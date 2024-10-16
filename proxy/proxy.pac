function FindProxyForURL(url, host) {
    // Check if the domain ends with .zim.com
    if (dnsDomainIs(host, ".zim.com") && !dnsDomainIs(host, "sms-sslger.zim.com") && !dnsDomainIs(host, "sms-sslil.zim.com")) {
        // Use the SOCKS proxy for these domains
        return "SOCKS5 localhost:1337";
    }
	
    // Direct connection for everything else
    return "DIRECT";
}