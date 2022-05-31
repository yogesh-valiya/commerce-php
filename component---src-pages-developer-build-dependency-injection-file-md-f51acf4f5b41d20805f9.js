"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[8214],{82227:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return u}});var t,r=a(87462),i=a(63366),m=(a(15007),a(64983)),o=a(91515),l=["components"],d={},s=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),p={_frontmatter:d},c=o.Z;function u(e){var n=e.components,a=(0,i.Z)(e,l);return(0,m.mdx)(c,(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"dependency-injection-configuration"},"Dependency injection configuration"),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," file configures which ",(0,m.mdx)("a",{parentName:"p",href:"../components/dependency-injection.md"},"dependencies")," are injected by the ",(0,m.mdx)("a",{parentName:"p",href:"../components/object-manager/index.md"},"object manager"),". You can also specify ",(0,m.mdx)("a",{parentName:"p",href:"#sensitive-and-system-specific-configuration-settings"},"sensitive configuration settings")," using ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml"),"."),(0,m.mdx)("h2",{id:"areas-and-application-entry-points"},"Areas and application entry points"),(0,m.mdx)("p",null,"Each ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," can have a global and area-specific ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," file.\nThe application reads all the ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," configuration files declared in the system and merges them all together by appending all nodes."),(0,m.mdx)("p",null,"As a general rule, the area specific ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," files should configure dependencies for the presentation layer, and your module's global ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," file should configure the remaining dependencies."),(0,m.mdx)("p",null,"The application loads the configuration in the following stages:"),(0,m.mdx)("ol",null,(0,m.mdx)("li",{parentName:"ol"},"Initial (",(0,m.mdx)("inlineCode",{parentName:"li"},"app/etc/di.xml"),")"),(0,m.mdx)("li",{parentName:"ol"},"Global (",(0,m.mdx)("inlineCode",{parentName:"li"},"<moduleDir>/etc/di.xml"),")"),(0,m.mdx)("li",{parentName:"ol"},"Area-specific (",(0,m.mdx)("inlineCode",{parentName:"li"},"<moduleDir>/etc/<area>/di.xml"),")")),(0,m.mdx)("p",null,"The areas are:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"adminhtml"),(0,m.mdx)("li",{parentName:"ul"},"frontend"),(0,m.mdx)("li",{parentName:"ul"},"graphql"),(0,m.mdx)("li",{parentName:"ul"},"webapi_rest"),(0,m.mdx)("li",{parentName:"ul"},"webapi_soap"),(0,m.mdx)("li",{parentName:"ul"},"crontab")),(0,m.mdx)("p",null,"During ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/bootstrap/magento-bootstrap.html"},"bootstrapping"),", each application entry point loads the appropriate ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," files for the requested ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/architecture/archi_perspectives/components/modules/mod_and_areas.html"},"area"),"."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Examples:")),(0,m.mdx)("p",null,"In ",(0,m.mdx)("inlineCode",{parentName:"p"},"index.php"),", the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/App/Http.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\App\\Http"))," class loads the area based on the front-name provided in the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/url"},"URL"),"."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"$areaCode = $this->_areaList->getCodeByFrontName($this->_request->getFrontName());\n$this->_state->setAreaCode($areaCode);\n$this->_objectManager->configure($this->_configLoader->load($areaCode));\n")),(0,m.mdx)("p",null,"In ",(0,m.mdx)("inlineCode",{parentName:"p"},"static.php"),", the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/App/StaticResource.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\App\\StaticResource"))," class also loads the area based on the URL in the request."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"$path = $this->request->get('resource');\n$params = $this->parsePath($path);\n$this->state->setAreaCode($params['area']);\n$this->objectManager->configure($this->configLoader->load($params['area']));\n")),(0,m.mdx)("p",null,"In ",(0,m.mdx)("inlineCode",{parentName:"p"},"cron.php"),", the ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/App/Cron.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"\\Magento\\Framework\\App\\Cron"))," class always loads the ",(0,m.mdx)("inlineCode",{parentName:"p"},"crontab")," area."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"$this->_state->setAreaCode(Area::AREA_CRONTAB);\n$configLoader = $this->objectManager->get(\\Magento\\Framework\\ObjectManager\\ConfigLoaderInterface::class);\n$this->objectManager->configure($configLoader->load(Area::AREA_CRONTAB));\n")),(0,m.mdx)("h2",{id:"type-configuration"},"Type configuration"),(0,m.mdx)("p",null,"Type configurations describe an object's lifestyle and how to instantiate it."),(0,m.mdx)("p",null,"You can configure the type in your ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," configuration node in the following ways:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <virtualType name="moduleConfig" type="Magento\\Core\\Model\\Config">\n        <arguments>\n            <argument name="type" xsi:type="string">system</argument>\n        </arguments>\n    </virtualType>\n    <type name="Magento\\Core\\Model\\App">\n        <arguments>\n            <argument name="config" xsi:type="object">moduleConfig</argument>\n        </arguments>\n    </type>\n</config>\n')),(0,m.mdx)("p",null,"The preceding example declares the following types:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"moduleConfig"),": A virtual type that extends the type ",(0,m.mdx)("inlineCode",{parentName:"li"},"Magento\\Core\\Model\\Config"),"."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"Magento\\Core\\Model\\App"),": All instances of this type receive an instance of ",(0,m.mdx)("inlineCode",{parentName:"li"},"moduleConfig")," as a dependency.")),(0,m.mdx)("h3",{id:"virtual-types"},"Virtual types"),(0,m.mdx)("p",null,"A ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/virtual-type"},"virtual type")," allows you to change the arguments of a specific injectable dependency and change the behavior of a particular class.\nThis allows you to use a customized class without affecting other classes that have a dependency on the original."),(0,m.mdx)("p",null,"The example creates a virtual type for ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Core\\Model\\Config")," and specifies ",(0,m.mdx)("inlineCode",{parentName:"p"},"system")," as the constructor argument for ",(0,m.mdx)("inlineCode",{parentName:"p"},"type"),"."),(0,m.mdx)("h2",{id:"constructor-arguments"},"Constructor arguments"),(0,m.mdx)("p",null,"You can configure the class constructor arguments in your ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," in the argument node.\nThe object manager injects these arguments into the class during creation.\nThe name of the argument configured in the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"XML")," file must correspond to the name of the parameter in the constructor in the configured class."),(0,m.mdx)("p",null,"The following example creates instances of ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Core\\Model\\Session")," with the class constructor argument ",(0,m.mdx)("inlineCode",{parentName:"p"},"$sessionName")," set to a value of ",(0,m.mdx)("inlineCode",{parentName:"p"},"adminhtml"),":"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\Core\\Model\\Session">\n        <arguments>\n            <argument name="sessionName" xsi:type="string">adminhtml</argument>\n        </arguments>\n    </type>\n</config>\n')),(0,m.mdx)("h3",{id:"argument-types"},"Argument types"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"object")),(0,m.mdx)("p",null,"Node Formats:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="object">{typeName}</argument>'),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="object" shared="{shared}">{typeName}</argument>')),(0,m.mdx)("p",null,"Creates an instance of ",(0,m.mdx)("inlineCode",{parentName:"p"},"typeName")," type and passes it in as an argument.\nYou can pass any class name, interface name, or virtual type as ",(0,m.mdx)("inlineCode",{parentName:"p"},"typeName"),"."),(0,m.mdx)("p",null,"Setting the ",(0,m.mdx)("inlineCode",{parentName:"p"},"shared")," property defines the lifestyle of a created instance.\nSee ",(0,m.mdx)("a",{parentName:"p",href:"#object-lifestyle-configuration"},"object lifestyle configuration"),"."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"string")),(0,m.mdx)("p",null,"Node Formats:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="string">{strValue}</argument>'),"\n",(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="string" translate="true">{strValue}</argument>')),(0,m.mdx)("p",null,"The application interprets any value for this argument node as a string."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="boolean">{boolValue}</argument>')),(0,m.mdx)("p",null,"The application converts any value for this argument node into a boolean value.\nSee table below:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Input Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Boolean Value"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"true"),(0,m.mdx)("td",{parentName:"tr",align:null},"true")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,m.mdx)("td",{parentName:"tr",align:null},"false"),(0,m.mdx)("td",{parentName:"tr",align:null},"false")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},'"true"*'),(0,m.mdx)("td",{parentName:"tr",align:null},"true")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},'"false"*'),(0,m.mdx)("td",{parentName:"tr",align:null},"false")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},'"1"'),(0,m.mdx)("td",{parentName:"tr",align:null},"true")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},'"0"'),(0,m.mdx)("td",{parentName:"tr",align:null},"false")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,m.mdx)("td",{parentName:"tr",align:null},"1"),(0,m.mdx)("td",{parentName:"tr",align:null},"true")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,m.mdx)("td",{parentName:"tr",align:null},"0"),(0,m.mdx)("td",{parentName:"tr",align:null},"false")))),(0,m.mdx)("small",null,"*These String literals are case-sensitive"),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"number")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="number">{numericValue}</argument>')),(0,m.mdx)("p",null,"Acceptable values for this type include: integers, floats, or ",(0,m.mdx)("a",{parentName:"p",href:"http://us3.php.net/is_numeric"},"numeric strings"),"."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"init_parameter")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="init_parameter">{Constant::NAME}</argument>')),(0,m.mdx)("p",null,"This is the global application initialization argument represented by ",(0,m.mdx)("inlineCode",{parentName:"p"},"Constant::NAME"),"."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"const")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="const">{Constant::NAME}</argument>')),(0,m.mdx)("p",null,"This is the constant value represented by ",(0,m.mdx)("inlineCode",{parentName:"p"},"Constant::NAME"),"."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"null")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},'<argument xsi:type="null"/>')),(0,m.mdx)("p",null,"This indicates a null value."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"array")),(0,m.mdx)("p",null,"Node Format:"),(0,m.mdx)("p",null,"The node format is as follows:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<argument xsi:type="array">\n  <item name="someKey" xsi:type="<type>">someVal</item>\n</argument>\n')),(0,m.mdx)("p",null,"  The application builds an array with elements corresponding to the items and passes it as the argument.\nThe array can contain an infinite number of items, and each array item can be of any object type including an array itself."),(0,m.mdx)("p",null,"  When the application merges the configuration files for a given scope, array arguments with the same name get merged into a new array."),(0,m.mdx)("p",null,"  When the application loads a new configuration at a later time, either by a more specific scope or through code, then any array definitions in the new configuration will replace the loaded config instead of merging."),(0,m.mdx)("hr",null),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Argument Examples:")),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\Example\\Type">\n        <arguments>\n            \x3c!-- Pass simple string --\x3e\n            <argument name="stringParam" xsi:type="string">someStringValue</argument>\n            \x3c!-- Pass instance of Magento\\Some\\Type --\x3e\n            <argument name="instanceParam" xsi:type="object">Magento\\Some\\Type</argument>\n            \x3c!-- Pass true --\x3e\n            <argument name="boolParam" xsi:type="boolean">1</argument>\n            \x3c!-- Pass 1 --\x3e\n            <argument name="intParam" xsi:type="number">1</argument>\n            \x3c!-- Pass application init argument, named by constant value --\x3e\n            <argument name="globalInitParam" xsi:type="init_parameter">Magento\\Some\\Class::SOME_CONSTANT</argument>\n            \x3c!-- Pass constant value --\x3e\n            <argument name="constantParam" xsi:type="const">Magento\\Some\\Class::SOME_CONSTANT</argument>\n            \x3c!-- Pass null value --\x3e\n            <argument name="optionalParam" xsi:type="null"/>\n            \x3c!-- Pass array --\x3e\n            <argument name="arrayParam" xsi:type="array">\n                \x3c!-- First element is value of constant --\x3e\n                <item name="firstElem" xsi:type="const">Magento\\Some\\Class::SOME_CONSTANT</item>\n                \x3c!-- Second element is null --\x3e\n                <item name="secondElem" xsi:type="null"/>\n                \x3c!-- Third element is a subarray --\x3e\n                <item name="thirdElem" xsi:type="array">\n                    \x3c!-- Subarray contains scalar value --\x3e\n                    <item name="scalarValue" xsi:type="string">ScalarValue</item>\n                    \x3c!-- and application init argument --\x3e\n                    <item name="globalArgument " xsi:type="init_parameter">Magento\\Some\\Class::SOME_CONSTANT</item>\n                </item>\n            </argument>\n        </arguments>\n    </type>\n</config>\n')),(0,m.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Arguments on different stages"),"—Configuration arguments are merged when they are declared on the same stage (Initial, Global, or Area-Specifc). If you declare new arguments on a higher stage, like Area-Specific, the arguments declared on the higher stage will replace the existing ones."),(0,m.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Merging and Arguments"),"—During merging, arguments replace other arguments with the same name if their type is different.\nIf the argument type is the same, then the newer argument replaces the old one."),(0,m.mdx)("h3",{id:"abstraction-implementation-mappings"},"Abstraction-implementation mappings"),(0,m.mdx)("p",null,"The object manager uses abstraction-implementation mappings when the constructor signature of a class requests an object by its interface.\nThe object manager uses these mappings to determine what the default implementation is for that class for a particular scope."),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"preference")," node specifies the default implementation:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!--  File: app/etc/di.xml --\x3e\n<config>\n    <preference for="Magento\\Framework\\UrlInterface" type="Magento\\Framework\\Url" />\n</config>\n')),(0,m.mdx)("p",null,"This mapping is in ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/etc/di.xml"),", so the object manager injects the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Url")," implementation class wherever there is a request for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\UrlInterface")," in the global scope."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- File: app/code/Magento/Backend/etc/adminhtml/di.xml --\x3e\n<config>\n    <preference for="Magento\\Framework\\UrlInterface" type="Magento\\Backend\\Model\\UrlInterface" />\n</config>\n')),(0,m.mdx)("p",null,"This mapping is in ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/code/Magento/Backend/etc/adminhtml/di.xml"),", so the object manager injects the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Backend\\Model\\UrlInterface")," implementation class wherever there is a request for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\UrlInterface")," in the ",(0,m.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/admin"},"admin")," area."),(0,m.mdx)("h3",{id:"override-a-method-using-preference-nodes"},"Override a method using 'preference' nodes"),(0,m.mdx)("p",null,"If you want to override a public or protected method from a core class, utilize the ",(0,m.mdx)("inlineCode",{parentName:"p"},"preference")," node from ",(0,m.mdx)("inlineCode",{parentName:"p"},"di.xml")," to achieve it.\nHere is an example of overriding a method from a core file:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- app/code/ExampleCorp/OverrideExample/etc/di.xml --\x3e\n<config  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <preference for="Magento\\Checkout\\Block\\Onepage\\Success" type="ExampleCorp\\OverrideExample\\Block\\Onepage\\Success" />\n</config>\n')),(0,m.mdx)("p",null,"The example below overrides the ",(0,m.mdx)("inlineCode",{parentName:"p"},"isVisible")," method from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Checkout\\Block\\Onepage\\Success")," block class."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace ExampleCorp\\OverrideExample\\Block\\Onepage;\n\nuse Magento\\Checkout\\Block\\Onepage\\Success as MagentoSuccess;\nuse Magento\\Framework\\View\\Element\\Template\\Context;\nuse Magento\\Checkout\\Model\\Session;\nuse Magento\\Sales\\Model\\Order\\Config;\nuse Magento\\Framework\\App\\Http\\Context as HttpContext;\n\nclass Success extends MagentoSuccess\n{\n    /**\n     * Constructor Modification\n     *\n     * @param Context $context\n     * @param Session $checkoutSession\n     * @param Config $orderConfig\n     * @param HttpContext $httpContext\n     * @param array $data\n     */\n    public function __construct(\n        Context $context,\n        Session $checkoutSession,\n        Config $orderConfig,\n        HttpContext $httpContext,\n        array $data = []\n    ) {\n        parent::__construct(\n            $context,\n            $checkoutSession,\n            $orderConfig,\n            $httpContext,\n            $data\n        );\n    }\n\n    /**\n     * Is order visible\n     *\n     * @param Order $order\n     * @return bool\n     */\n    protected function isVisible(Order $order)\n    {\n        # Write your custom logic here.\n        return !in_array(\n            $order->getStatus(),\n            $this->_orderConfig->getInvisibleOnFrontStatuses()\n        );\n    }\n}\n")),(0,m.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"Overriding entire methods is not recommended approach and is noted here as a method of last resort. This approach may cause conflicts in the system and reduces system upgradability. Other extensibility options such as ",(0,m.mdx)("inlineCode",{parentName:"p"},"event observers")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"plugins")," are preferable, when possible."),(0,m.mdx)("h3",{id:"parameter-configuration-inheritance"},"Parameter configuration inheritance"),(0,m.mdx)("p",null,"Parameters configured for a class type pass on its configuration to its descendant classes.\nAny descendant can override the parameters configured for its supertype; that is, the parent class or interface:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\Framework\\View\\Element\\Context">\n        <arguments>\n            <argument name="urlBuilder" xsi:type="object">Magento\\Framework\\Url</argument>\n        </arguments>\n    </type>\n    <type name="Magento\\Backend\\Block\\Context">\n        <arguments>\n            <argument name="urlBuilder" xsi:type="object">Magento\\Backend\\Model\\Url</argument>\n        </arguments>\n    </type>\n</config>\n')),(0,m.mdx)("p",null,"In the preceding example, ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Backend/Block/Context.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"Magento\\Backend\\Block\\Context"))," is a descendant of ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/View/Element/Context.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\View\\Element\\Context")),"."),(0,m.mdx)("p",null,"The first entry configures all instances of ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\View\\Element\\Context")," as well as its children to pass in ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Url.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Url"))," as ",(0,m.mdx)("inlineCode",{parentName:"p"},"$urlBuilder")," in their constructors."),(0,m.mdx)("p",null,"The second entry overrides this and configures all instances of ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Backend\\Block\\Context")," to use ",(0,m.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Backend/Model/Url.php"},(0,m.mdx)("inlineCode",{parentName:"a"},"Magento\\Backend\\Model\\Url"))," as the ",(0,m.mdx)("inlineCode",{parentName:"p"},"$urlBuilder")," instead."),(0,m.mdx)("h2",{id:"object-lifestyle-configuration"},"Object lifestyle configuration"),(0,m.mdx)("p",null,"The lifestyle of an object determines the number of instances that can exist of that object."),(0,m.mdx)("p",null,"You can configure dependencies in Adobe Commerce and Magento Open Source to have the following lifestyles:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Singleton"),"(default) - One instance of this class exists. The object manager creates it at the first request. Requesting the class again returns the same instance. Disposing or ending the container registered to it releases the instance."),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("strong",{parentName:"li"},"Transient")," - The object manager creates a new instance of the class for every request.")),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"shared")," property determines the lifestyle of both ",(0,m.mdx)("inlineCode",{parentName:"p"},"argument")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"type")," configurations."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\Filesystem" shared="false">\n        <arguments>\n            <argument name="adapter" xsi:type="object" shared="false">Magento\\Filesystem\\Adapter\\Local</argument>\n        </arguments>\n    </type>\n</config>\n')),(0,m.mdx)("p",null,"In this example ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Filesystem")," is not shared, so all clients will retrieve separate instances of ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Filesystem"),".\nAlso, every instance of ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Filesystem")," will get separate instance of ",(0,m.mdx)("inlineCode",{parentName:"p"},"$adapter"),", because it is non-shared too."),(0,m.mdx)("h2",{id:"sensitive-and-system-specific-configuration-settings"},"Sensitive and system-specific configuration settings"),(0,m.mdx)("p",null,"For multi-system deployments, such as the ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/deployment/pipeline/"},"pipeline deployment model"),", you can specify the following types of configuration settings:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null}),(0,m.mdx)("th",{parentName:"tr",align:null}))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"shared"),(0,m.mdx)("td",{parentName:"tr",align:null},"Settings that are shared between systems using ",(0,m.mdx)("inlineCode",{parentName:"td"},"app/etc/config.php"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sensitive"),(0,m.mdx)("td",{parentName:"tr",align:null},"Settings that are restricted or confidential")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"system-specific"),(0,m.mdx)("td",{parentName:"tr",align:null},"Settings that are unique to a particular system or environment")))),(0,m.mdx)("p",null,"The following code sample is a template for specifying values as sensitive or system-specific:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-xml"},'<type name="Magento\\Config\\Model\\Config\\TypePool">\n   <arguments>\n      <argument name="VALUE_TYPE" xsi:type="array">\n         <item name="CONFIG_PATH" xsi:type="string">ARGUMENT_VALUE</item>\n      </argument>\n   </arguments>\n</type>\n')),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null}),(0,m.mdx)("th",{parentName:"tr",align:null}))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"VALUE_TYPE")),(0,m.mdx)("td",{parentName:"tr",align:null},"Specifies the type of value: either ",(0,m.mdx)("inlineCode",{parentName:"td"},"sensitive")," or ",(0,m.mdx)("inlineCode",{parentName:"td"},"environment"),".")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"CONFIG_PATH")),(0,m.mdx)("td",{parentName:"tr",align:null},"A unique, ",(0,m.mdx)("inlineCode",{parentName:"td"},"/"),"-delimited string that identifies this configuration setting.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"ARGUMENT_VALUE")),(0,m.mdx)("td",{parentName:"tr",align:null},"A value of ",(0,m.mdx)("inlineCode",{parentName:"td"},"1")," indicates the ",(0,m.mdx)("inlineCode",{parentName:"td"},"CONFIG_PATH")," value is sensitive or system-specific. The default ",(0,m.mdx)("inlineCode",{parentName:"td"},"0")," value indicates it is neither sensitive nor system specific.")))),(0,m.mdx)("p",null,"Do not share sensitive or system-specific settings stored in ",(0,m.mdx)("inlineCode",{parentName:"p"},"app/etc/env.php")," between development and production systems."),(0,m.mdx)("p",null,"See ",(0,m.mdx)("a",{parentName:"p",href:"../configuration/sensitive-environment-settings.md"},"sensitive and environment settings")," for more information and examples."),(0,m.mdx)("h3",{id:"information-related-to-pipeline-deployment"},"Information related to pipeline deployment"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../configuration/sensitive-environment-settings.md"},"Guidelines for specifying system-specific and sensitive configuration values")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/prod/config-reference-sens.html"},"Sensitive and system-specific configuration paths reference")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/config-guide/prod/config-reference-b2b.html"},"Adobe Commerce B2B Extension configuration paths reference"))),(0,m.mdx)("h2",{id:"get-dependency-injection-configuration-information-for-a-class"},"Get dependency injection configuration information for a class"),(0,m.mdx)("p",null,"Use the ",(0,m.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/reference/cli/magento.html#devdiinfo"},"dev:di:info")," command to retrieve information about dependency injection configuration for a class. The following example retrieves the dependency injection configuration information for the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem")," class:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-bash"},'bin/magento dev:di:info "Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem"\n')),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-terminal"},"DI configuration for the class Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem in the GLOBAL area\n\nPreference: Magento\\Quote\\Model\\Quote\\Item\\ToOrderItem\n\nConstructor Parameters:\n+-------------------+--------------------------------------------------+------------------+\n| Name              | Requested Type                                   | Configured Value |\n+-------------------+--------------------------------------------------+------------------+\n| orderItemFactory  | Magento\\Sales\\Api\\Data\\OrderItemInterfaceFactory |                  |\n| objectCopyService | Magento\\Framework\\DataObject\\Copy                |                  |\n| dataObjectHelper  | Magento\\Framework\\Api\\DataObjectHelper           |                  |\n+-------------------+--------------------------------------------------+------------------+\n\nPlugins:\n+-----------------------------------------------------+---------+--------+\n| Plugin                                              | Method  | Type   |\n+-----------------------------------------------------+---------+--------+\n| Magento\\Catalog\\Model\\Plugin\\QuoteItemProductOption | convert | before |\n| Magento\\GiftMessage\\Model\\Plugin\\QuoteItem          | convert | after  |\n| Magento\\Bundle\\Model\\Plugin\\QuoteItem               | convert | after  |\n+-----------------------------------------------------+---------+--------+\n\nPlugins for the Preference:\n+-----------------------------------------------------+---------+--------+\n| Plugin                                              | Method  | Type   |\n+-----------------------------------------------------+---------+--------+\n| Magento\\Catalog\\Model\\Plugin\\QuoteItemProductOption | convert | before |\n| Magento\\GiftMessage\\Model\\Plugin\\QuoteItem          | convert | after  |\n| Magento\\Bundle\\Model\\Plugin\\QuoteItem               | convert | after  |\n+-----------------------------------------------------+---------+--------+\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-build-dependency-injection-file-md-f51acf4f5b41d20805f9.js.map