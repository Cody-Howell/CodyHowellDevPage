import { Content } from "../../_WikiData";

export const CustomDomain: Content = {
  primaryCode: [],
  paragraphs: [
    `Firebase Hosting allows you to use custom domains for your project. Below is the 1 way that I prefer to use it, 
    using subdomains. `,
    `Using CNAME properties: Go into Hosting and say what specific subdomain you want to use for your site (ex. demo.codyhowell.dev). 
    It will provide you with the CNAME text you need to put into your domain provider's DNS settings. It will need to verify that 
    your domain is properly configured, which can take around 2 days. If you want to use a propogation checker for DNS, there's a link 
    below for you to use. Just type in the full domain you're trying to check and set it to CNAME; Firebase generally won't verify 
    until all the systems across the globe agree on the same thing. `,
    `Upon further checking, the example I used above has been active for around a month, and still everything doesn't agree. That's 
    pretty weird.  `
  ],
  seeSimilar: [],
  externalLinks: [
    {
      fullPath: "https://www.whatsmydns.net/#CNAME",
      visibleName: "DNS Checker (set to CNAME)"
    }
  ]
}