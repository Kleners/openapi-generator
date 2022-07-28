(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(312)),i={id:"file-post-processing",title:"File post-processing"},l={id:"file-post-processing",title:"File post-processing",description:"Each tool (CLI and plugins) supports enabling file post-processing at a high-level. Enabling this option allows for generators which support post-processing to call some external process for each generated file, passing the file path to that tool. The external tool must be defined in an environment variable supported by the generator.",source:"@site/../docs/file-post-processing.md",permalink:"/docs/file-post-processing",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/file-post-processing.md",lastUpdatedBy:"William Cheng",lastUpdatedAt:1658374707,sidebar:"docs",previous:{title:"Configuration Options",permalink:"/docs/configuration"},next:{title:"Using Templates",permalink:"/docs/templating"}},p=[{value:"Supported Environment Variables",id:"supported-environment-variables",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Each tool (CLI and plugins) supports enabling file post-processing at a high-level. Enabling this option allows for generators which support post-processing to call some external process for each generated file, passing the file path to that tool. The external tool must be defined in an environment variable supported by the generator."),Object(o.b)("p",null,"Note that:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"this option is ",Object(o.b)("inlineCode",{parentName:"li"},"--enable-post-process-file")," in the CLI and ",Object(o.b)("inlineCode",{parentName:"li"},"enablePostProcessFile")," in plugins"),Object(o.b)("li",{parentName:"ul"},"we require ",Object(o.b)("em",{parentName:"li"},"both")," specifying the environment variable ",Object(o.b)("em",{parentName:"li"},"and")," enabling the option at the tooling level; this feature is opt-in for security "),Object(o.b)("li",{parentName:"ul"},"file processing occurs one at a time"),Object(o.b)("li",{parentName:"ul"},"the external tool may be a custom script which invokes multiple tools")),Object(o.b)("p",null,"Also refer to the relevant documentation for ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/usage"}),"CLI"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator-maven-plugin/README.md"}),"Maven Plugin"),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator-gradle-plugin/README.adoc"}),"Gradle Plugin"),", or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/sbt-openapi-generator/blob/master/README.md"}),"SBT Plugin"),"."),Object(o.b)("h2",{id:"supported-environment-variables"},"Supported Environment Variables"),Object(o.b)("p",null,"The following environment variables are supported by their respective generators:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CPP_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CSHARP_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"C_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DART_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"FSHARP_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"GO_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"HASKELL_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JAVA_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"JS_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"KOTLIN_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"OCAML_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PERL_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PHP_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"POWERSHELL_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PYTHON_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RUBY_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RUST_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SCALA_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SWIFT_POST_PROCESS_FILE")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"TS_POST_PROCESS_FILE"))),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Let's see how to pass Ruby generated files to Rubocop, a static code analysis/linter/formatter tool."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'# First, export the required environment variable\nexport RUBY_POST_PROCESS_FILE="/usr/local/bin/rubocop -a"\n\nexport OPENAPI_DOC="https://raw.githubusercontent.com/openapitools/openapi-generator/master/modules/openapi-generator/src/test/resources/3_0/petstore.yaml"\n\n# Invoke the generator with --enable-post-process-file\nopenapi-generator generate --enable-post-process-file -i $OPENAPI_DOC -g ruby -o .out-ruby/\n')),Object(o.b)("p",null,"You will now see messages logged about which files have been processed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/.rspec\n[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/spec/spec_helper.rb\n[main] INFO  o.o.c.languages.AbstractRubyCodegen - Successfully executed: /usr/local/bin/rubocopy -a /Users/jim/projects/openapi-generator/.out-ruby/spec/spec_helper.rb\n[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/spec/configuration_spec.rb\n[main] INFO  o.o.c.languages.AbstractRubyCodegen - Successfully executed: /usr/local/bin/rubocopy -a /Users/jim/projects/openapi-generator/.out-ruby/spec/configuration_spec.rb\n[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/spec/api_client_spec.rb\n[main] INFO  o.o.c.languages.AbstractRubyCodegen - Successfully executed: /usr/local/bin/rubocopy -a /Users/jim/projects/openapi-generator/.out-ruby/spec/api_client_spec.rb\n[main] INFO  o.o.codegen.TemplateManager - Skipped /Users/jim/projects/openapi-generator/.out-ruby/.openapi-generator-ignore (Skipped by supportingFiles options supplied by user.)\n[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/.openapi-generator/VERSION\n[main] INFO  o.o.codegen.TemplateManager - writing file /Users/jim/projects/openapi-generator/.out-ruby/.openapi-generator/FILES\n")))}s.isMDXComponent=!0},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),O=r,m=b["".concat(i,".").concat(O)]||b[O]||u[O]||o;return n?a.a.createElement(m,l({ref:t},c,{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);