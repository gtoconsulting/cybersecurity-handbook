(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{rZoz:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return i})),o.d(t,"default",(function(){return l}));o("5hJT"),o("W1QL"),o("K/PF"),o("t91x"),o("75LO"),o("PJhk"),o("mXGw");var n=o("/FXl"),s=o("TjRS");o("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/proactive_controls/c7_enforce_access_controls.mdx"}});var r={_frontmatter:i},c=s.a;function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(s[o]=e[o]);return s}(e,["components"]);return Object(n.b)(c,a({},r,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ℹ️ This section will be part of ",Object(n.b)("a",a({parentName:"em"},{href:"https://github.com/guidesmiths/cybersecurity-handbook/issues/41"}),"1.0.0 Release"))),Object(n.b)("h1",{id:"c7-enforce-access-controls"},"C7: Enforce Access Controls"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"Access Control (or Authorization) is the process of granting or denying specific requests from\na user, program, or process. Access control also involves the act of granting and revoking\nthose privileges.\nIt should be noted that authorization (verifying access to specific features or resources) is not\nequivalent to authentication (verifying identity).\nAccess Control functionality often spans many areas of software depending on the\ncomplexity of the access control system. For example, managing access control metadata or\nbuilding caching for scalability purposes are often additional components in an access control\nsystem that need to be built or managed.\nThere are several different types of access control design that should be considered."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Discretionary Access Control (DAC) is a means of restricting access to objects (e.g.,\nfiles, data entities) based on the identity and need-to-know of subjects (e.g., users,\nprocesses) and/or groups to which the object belongs."),Object(n.b)("li",{parentName:"ul"},"Mandatory Access Control (MAC) is a means of restricting access to system resources\nbased on the sensitivity (as represented by a label) of the information contained in\nthe system resource and the formal authorization (i.e., clearance) of users to access\ninformation of such sensitivity."),Object(n.b)("li",{parentName:"ul"},"Role Based Access Control (RBAC) is a model for controlling access to resources where\npermitted actions on resources are identified with roles rather than with individual\nsubject identities."),Object(n.b)("li",{parentName:"ul"},"Attribute Based Access Control (ABAC) will grant or deny user requests based on\narbitrary attributes of the user and arbitrary attributes of the object, and\nenvironment conditions that may be globally recognized and more relevant to the\npolicies at hand. ")),Object(n.b)("h2",{id:"implementation"},"Implementation"),Object(n.b)("h3",{id:"access-control-design-principles"},"Access Control Design Principles"),Object(n.b)("h4",{id:"1-design-access-control-thoroughly-up-front"},"1. Design Access Control Thoroughly Up Front"),Object(n.b)("p",null,"Once you have chosen a specific access control design pattern, it is often difficult and time\nconsuming to re-engineer access control in your application with a new pattern. Access\nControl is one of the main areas of application security design that must be thoroughly\ndesigned up front, especially when addressing requirements like multi-tenancy and\nhorizontal (data dependent) access control."),Object(n.b)("p",null,"Access Control design may start simple but can often grow into a complex and feature-heavy\nsecurity control. When evaluating access control capability of software frameworks, ensure\nthat your access control functionality will allow for customization for your specific access\ncontrol feature need."),Object(n.b)("h4",{id:"2-force-all-requests-to-go-through-access-control-checks"},"2. Force All Requests to Go Through Access Control Checks"),Object(n.b)("p",null,"Ensure that all request go through some kind of access control verification layer.\nTechnologies like Java filters or other automatic request processing mechanisms are ideal\nprogramming artifacts that will help ensure that all requests go through some kind of access\ncontrol check."),Object(n.b)("h4",{id:"3-deny-by-default-is-the-principle-that-if-a-request-is-not-specifically-allowed-it-is-denied-there"},"3. Deny by default is the principle that if a request is not specifically allowed, it is denied. There"),Object(n.b)("p",null,"are many ways that this rule will manifest in application code. Some examples of these are:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Application code may throw an error or exception while processing access control\nrequests. In these cases access control should always be denied."),Object(n.b)("li",{parentName:"ol"},"When an administrator creates a new user or a user registers for a new account, that\naccount should have minimal or no access by default until that access is configured."),Object(n.b)("li",{parentName:"ol"},"When a new feature is added to an application all users should be denied to use that\nfeature until it's properly configured.")),Object(n.b)("h4",{id:"4-principle-of-least-privilege"},"4. Principle of Least Privilege"),Object(n.b)("p",null,"Ensure that all users, programs, or processes are only given as least or as little necessary\naccess as possible. Be wary of systems that do not provide granular access control\nconfiguration capabilities."),Object(n.b)("h4",{id:"5-dont-hardcode-roles"},"5. Don't Hardcode Roles"),Object(n.b)("p",null,"Many application frameworks default to access control that is role based. It is common to\nfind application code that is filled with checks of this nature."),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-js"}),'if (user.hasRole("ADMIN")) || (user.hasRole("MANAGER")) {\ndeleteAccount();\n}\n')),Object(n.b)("p",null,"Be careful about this type of role-based programming in code. It has the following limitations\nor dangers."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Role based programming of this nature is fragile. It is easy to create incorrect or\nmissing role checks in code."),Object(n.b)("li",{parentName:"ul"},"Role based programming does not allow for multi-tenancy. Extreme measures like\nforking the code or added checks for each customer will be required to allow role\nbased systems to have different rules for different customers."),Object(n.b)("li",{parentName:"ul"},"Role based programming does not allow for data-specific or horizontal access control\nrules."),Object(n.b)("li",{parentName:"ul"},"Large codebases with many access control checks can be difficult to audit or verify the\noverall application access control policy.\nInstead, please consider the following access control programming methodology:")),Object(n.b)("pre",null,Object(n.b)("code",a({parentName:"pre"},{className:"language-js"}),'if (user.hasAccess("DELETE_ACCOUNT")) {\ndeleteAccount();\n}\n')),Object(n.b)("p",null,"Attribute or feature-based access control checks of this nature are the starting point to\nbuilding well-designed and feature-rich access control systems. This type of programming\nalso allows for greater access control customization capability over time."),Object(n.b)("h4",{id:"6-log-all-access-control-events"},"6. Log All Access Control Events"),Object(n.b)("p",null,"All access control failures should be logged as these may be indicative of a malicious user\nprobing the application for vulnerabilities."),Object(n.b)("h2",{id:"specific-mitigations"},"Specific Mitigations"),Object(n.b)("h3",{id:"owasp-top-10-vulnerabilities-mitigated"},"OWASP Top 10 Vulnerabilities Mitigated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",a({parentName:"li"},{href:"/cybersecurity-handbook/owasp/a5_broken_access_control"}),"A5:2017-Broken Access Control"))),Object(n.b)("h3",{id:"owasp-mobile-top-10-vulnerabilities-mitigated"},"OWASP Mobile Top 10 Vulnerabilities Mitigated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",a({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m6-insecure-authorization"}),"M6: Insecure Authorization"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/proactive_controls/c7_enforce_access_controls.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-proactive-controls-c-7-enforce-access-controls-mdx-33f2f14dbbb747ddce00.js.map