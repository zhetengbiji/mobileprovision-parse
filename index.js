var htmlDecode = require('htmlEncode').htmlDecode
var exec = require('child_process').exec

function getVal(xml, name) {
    var m = new RegExp(`<key>${name}<\\/key>\\n\\s*<string>(.+)<\\/string>`)
    return htmlDecode(xml.match(m)[1])
}

function getType(xml) {
    var types = {
        appstore: 'appstore',
        inhouse: 'inhouse',
        adhoc: 'adhoc',
        dev: 'dev',
    }
    if(xml.indexOf('<key>ProvisionsAllDevices</key>') >= 0) {
        return types.inhouse
    }
    if(xml.indexOf('<key>ProvisionedDevices</key>') < 0) {
        return types.appstore
    }
    if(xml.match(/<key>get-task-allow<\/key>\n\s*<true\/>/)) {
        return types.dev
    }
    return types.adhoc
}

function getInfo(xml) {
    var info = {}
    info.uuid = getVal(xml, 'UUID')
    info.team = {
        name: getVal(xml, 'TeamName'),
        id: getVal(xml, 'com.apple.developer.team-identifier'),
    }
    info.appid = getVal(xml, 'application-identifier')
    info.name = getVal(xml, 'Name')
    info.type = getType(xml)
    info.cers = xml.match(/[a-z0-9A-Z\+\/]+==/g)
    return info
}

function main(profilePath, cb) {
    var cmd = `security cms -D -i ${profilePath}`
    exec(cmd, (err, stdout, stderr) => {
        if(!err) {
            if(typeof cb === 'function') {
                cb(getInfo(stdout))
            }
        } else {
            throw new Error(stderr)
        }
    })
}

module.exports = main