var parse = require('../index')
var str = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>AppIDName</key>
	<string>test</string>
	<key>ApplicationIdentifierPrefix</key>
	<array>
	<string>YKD9XXXX55</string>
	</array>
	<key>CreationDate</key>
	<date>2017-06-21T06:21:45Z</date>
	<key>Platform</key>
	<array>
		<string>iOS</string>
	</array>
	<key>DeveloperCertificates</key>
	<array>
		<data>MIIFrD00BJSgAwIBAgIIRlo7ioqmq0cwDQYJKoZIhvcNAQEFBQAwgZYxCzAJBgNVBAYTAlVT00MwEQYDVQQKDApBcHBsZSBJbmMuMSwwKgYDVQQLDCNBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9uczFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTcwNTMxMDQ0MjQ3WhcNMjAwNTMwMDQ0MjQ3WjCBrTEaMBgGCgmSJomT8ixkAQEMCllLRDlCRFk1NTUxQDA+BgNVBAMMN2lQaG9uZSBEaXN0cmlidXRpb246IFpoYW9mZW5nIFNlbnNvciBFcXVpcG1lbnQgQ28uLEx0ZC4xEzARBgNVBAsMCllLRDlCRFk1NTUxKzApBgNVBAoMIlpoYW9mZW5nIFNlbnNvciBFcXVpcG1lbnQgQ28uLEx0ZC4xCzAJBgNVBAYTAlVTMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtfZcCKYk3//Xm061BWZJA5YA4MEs4dEh1GYs6AQMkDDg/EMEMjAItXCCKfxVqc4brMN/O/Z2sGGGvEXOq3ms5QhjVdNHZHQJpVXuJTT/qB0NSmCBDSYA7hI573cPFRHrIpLqvIoh+Xqw5R5khOjRteA6IH21/vylytelmn/4CI/q1G4cauJdCm517EoNRQhkPr1M7EKJrRVmZYXC/f7CS4qKRBK2tz3ayC/BeI3afEoEEH1gwghQzkaUQmHHRXw+/9Aln7p0grcs0lqCfcm4Plhg68C2yy0FnsT05QZ5lzzeZTjRETZLcDfaNdRXnJ+/G0zCQ1pHSjXKe5aawdrcSwIDAQABo4IB4zCCAd8wPwYIKwYBBQUHAQEEMzAxMC8GCCsGAQUFBzABhiNodHRwOi8vb2NzcC5hcHBsZS5jb20vb2NzcDAyLXd3ZHIwMTAdBgNVHQ4EFgQUKpbSmR9BuY2Te11ZWdB07CQJxbswDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSIJxcJqbYYYIvs67r2R1nFUlSjtzCCAQ8GA1UdIASCAQYwggECMIH/BgkqhkiG92NkBQEwgfEwgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wKQYIKwYBBQUHAgEWHWh0dHA6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvMA4GA1UdDwEB/wQEAwIHgDAWBgNVHSUBAf8EDDAKBggrBgEFBQcDAzATBgoqhkiG92NkBgEEAQH/BAIFADANBgkqhkiG9w0BAQUFAAOCAQEAaokmpRn5ifJz2i7eMtrrjHnWkFoplKhMOxDrOjtTOPLPRyF09msLQz1qseDrm2plwfiKipvvA5cWZNPxeTl7UxdmvF1gCjr25qOxZeLBhm8SkxiWrXBqNWteXMDKzeRIj6a/RvNMhWTk2/AhBuFyh/WMqJD2ZlbbK49m+ZInE3/ln183o1mAEqgBrAUdzYuIlN+UsHbBpEtqIfBbxyX5++OIr0OJaeerxENGy64o30t8bnx52YvDEvvden6rwJGzuSCi91yhhcs1npC2VcNQdj4YYoBrHSzShHGEGCziDXJXisOceGyPsX3osQVd9SCYgsrFfqznOTGjdxizAON5oA==</data>
	</array>
	<key>Entitlements</key>
	<dict>
		<key>keychain-access-groups</key>
		<array>
			<string>YKD9XXXX55.*</string>		
		</array>
		<key>get-task-allow</key>
		<false/>
		<key>application-identifier</key>
		<string>YKD9XXXX55.com.test.test</string>
		<key>com.apple.developer.team-identifier</key>
		<string>YKD9XXXX55</string>
	</dict>
	<key>ExpirationDate</key>
	<date>2018-06-21T06:21:45Z</date>
	<key>Name</key>
	<string>adhoc配置</string>
	<key>ProvisionedDevices</key>
	<array>
		<string>88af00222738b50a188d328de1f8fb1f008517e9</string>
		<string>252af4c00564c5402949ee2401dccc9230046661</string>
	</array>
	<key>TeamIdentifier</key>
	<array>
		<string>YKD9XXXX55</string>
	</array>
	<key>TeamName</key>
	<string>Test Test.,Ltd.</string>
	<key>TimeToLive</key>
	<integer>365</integer>
	<key>UUID</key>
	<string>4f162e97-a97f-468e-9729-429bc0097520</string>
	<key>Version</key>
	<integer>1</integer>
</dict>
</plist>
`
info = parse(str)
console.log(info)