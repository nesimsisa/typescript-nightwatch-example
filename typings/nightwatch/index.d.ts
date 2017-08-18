﻿declare module 'nightwatch' {
	export interface PageCommand {
		(browser: NightWatchClient, ...args: any[]): void;
	}

	export interface ElementObject {
		locateStrategy: string;
		selector: string;
	}

	export interface PageObject {
		url?: string;

		commands?: {
			[x: string]: PageCommand;
		}[];

		elements?: {
			[x: string]: ElementObject;
		};
	}

	export interface PageObjects {
		[x: string]: PageObject;
	}

	export interface DesiredCapabilities {
		/**
     * The name of the browser being used; should be one of {android|chrome|firefox|htmlunit|internet explorer|iPhone|iPad|opera|safari}.
     */
		browserName?: string /**
     * The browser version, or the empty string if unknown.
     */;
		version?: string /**
     * A key specifying which platform the browser should be running on. This value should be one of {WINDOWS|XP|VISTA|MAC|LINUX|UNIX|ANDROID}.
     * When requesting a new session, the client may specify ANY to indicate any available platform may be used.
     * For more information see [GridPlatforms (https://code.google.com/p/selenium/wiki/GridPlatforms)]
     */;
		platform?: string /**
     * Whether the session supports taking screenshots of the current page.
     */;
		takesScreenShot?: boolean /**
     * Whether the session can interact with modal popups, such as window.alert and window.confirm.
     */;
		handlesAlerts?: boolean /**
     * Whether the session supports CSS selectors when searching for elements.
     */;
		cssSelectorsEnabled?: boolean /**
     * Whether the session supports executing user supplied JavaScript in the context of the current page (only on HTMLUnitDriver).
     */;
		javascriptEnabled?: boolean /**
     * Whether the session can interact with database storage.
     */;
		databaseEnabled?: boolean /**
     * Whether the session can set and query the browser's location context.
     */;
		locationContextEnabled?: boolean /**
     * Whether the session can interact with the application cache.
     */;
		applicationCacheEnabled?: boolean /**
     * Whether the session can query for the browser's connectivity and disable it if desired.
     */;
		browserConnectionEnabled?: boolean /**
     * Whether the session supports interactions with storage objects (http://www.w3.org/TR/2009/WD-webstorage-20091029/).
     */;
		webStorageEnabled?: boolean /**
     * Whether the session should accept all SSL certs by default.
     */;
		acceptSslCerts?: boolean /**
     * Whether the session can rotate the current page's current layout between portrait and landscape orientations (only applies to mobile platforms).
     */;
		rotatable?: boolean /**
     * Whether the session is capable of generating native events when simulating user input.
     */;
		nativeEvents?: boolean /**
     * What the browser should do with an unhandled alert before throwing out the UnhandledAlertException. Possible values are "accept", "dismiss" and "ignore"
     */;
		unexpectedAlertBehaviour?: string /**
     * Allows the user to specify whether elements are scrolled into the viewport for interaction to align with the top (0) or bottom (1) of the viewport.
     * The default value is to align with the top of the viewport. Supported in IE and Firefox (since 2.36)
     */;
		elementScrollBehaviour?: number /**
     * A JSON object describing the logging level of different components in the browser, the driver, or any intermediary WebDriver servers.
     * Available values for most loggers are "OFF", "SEVERE", "WARNING", "INFO", "CONFIG", "FINE", "FINER", "FINEST", "ALL".
     * This produces a JSON object looking something like: {"loggingPrefs": {"driver": "INFO", "server": "OFF", "browser": "FINE"}}.
     */;
		loggingPrefs?: {browser?: string; driver?: string; server?: string};

		[x: string]: any;
	}

	export interface ScreenshotOptions {
		enabled?: boolean;
		on_failure?: boolean;
		on_error?: boolean;
		path?: string;
	}

	export interface NightWatchTestRunner {
		'type'?: string;
		options?: {ui?: string};
	}

	export interface NightWatchTestWorker {
		enabled: boolean;
		workers: string;
	}

	export interface NightWatchOptions {
		/**
     * An array of folders (excluding subfolders) where the tests are located.
     */
		src_folders: string | string[] /**
     * The location where the JUnit XML report files will be saved.
     */;
		output_folder?: string /**
     * Location(s) where custom commands will be loaded from.
     */;
		custom_commands_path?:
			| string
			| string[] /**
     * Location(s) where custom assertions will be loaded from.
     */;
		custom_assertions_path?:
			| string
			| string[] /**
     * Location(s) where page object files will be loaded from.
     */;
		page_objects_path?:
			| string
			| string[] /**
     * Location of an external globals module which will be loaded and made available to the test as a property globals on the main client instance.
     * Globals can also be defined/overwritten inside a test_settings environment.
     */;
		globals_path?: string /**
     * An object containing Selenium Server related configuration options. See below for details.
     */;
		selenium?: SeleniumOptions;

		/**
     * This object contains all the test related options. See below for details.
     */
		// test_settings: NightWatchTestSettings

		test_settings: {
			[x: string]: NightWatchTestSettings;
		};

		/**
    * Whether or not to buffer the output in case of parallel running. See below for details.
    */
		live_output?: boolean /**
     * Controls whether or not to disable coloring of the cli output globally.
     */;
		disable_color?: boolean /**
     * Specifies the delay(in milliseconds) between starting the child processes when running in parallel mode.
     */;
		parallel_process_delay?: number /**
     * Whether or not to run individual test files in parallel. If set to true, runs the tests in parallel and determines the number of workers automatically.
     * If set to an object, can specify specify the number of workers as "auto" or a number. Example: "test_workers" : {"enabled" : true, "workers" : "auto"}
     */;
		test_workers?:
			| boolean
			| NightWatchTestWorker /**
     * Specifies which test runner to use when running the tests. Values can be either default (built in nightwatch runner) or mocha.
     * Example: "test_runner" : {"type" : "mocha", "options" : {"ui" : "tdd"}}
     */;
		test_runner?: string | NightWatchTestRunner;
	}

	export interface SeleniumOptions {
		/**
     * Whether or not to manage the selenium process automatically.
     */
		start_process: boolean /**
     * Whether or not to automatically start the Selenium session.
     */;
		start_session: boolean /**
     * The location of the selenium jar file. This needs to be specified if start_process is enabled.E.g.: lib/selenium-server-standalone-2.43.0.jar
     */;
		server_path: string /**
     * The location where the selenium Selenium-debug.log file will be placed. Defaults to current directory. To disable Selenium logging, set this to false
     */;
		log_path:
			| string
			| boolean /**
     * Usually not required and only used if start_process is true. Specify the IP address you wish Selenium to listen on.
     */;
		host: string /**
     * The port number Selenium will listen on.
     */;
		port: number /**
     * List of cli arguments to be passed to the Selenium process. Here you can set various options for browser drivers, such as:
     *
     * webdriver.firefox.profile: Selenium will be default create a new Firefox profile for each session.
     * If you wish to use an existing Firefox profile you can specify its name here.
     * Complete list of Firefox Driver arguments available https://code.google.com/p/selenium/wiki/FirefoxDriver.
     *
     * webdriver.chrome.driver: Nightwatch can run the tests using Chrome browser also. To enable this you have to download the ChromeDriver binary
     * (http://chromedriver.storage.googleapis.com/index.html) and specify it's location here. Also don't forget to specify chrome as the browser name in the
     * desiredCapabilities object.
     * More information can be found on the ChromeDriver website (https://sites.google.com/a/chromium.org/chromedriver/).
     *
     * webdriver.ie.driver: Nightwatch has support for Internet Explorer also. To enable this you have to download the IE Driver binary
     * (https://code.google.com/p/selenium/wiki/InternetExplorerDriver) and specify it's location here. Also don't forget to specify "internet explorer" as the browser
     * name in the desiredCapabilities object.
     */;
		cli_args: any;
	}

	export interface NightWatchTestSettings {
		/**
     * A url which can be used later in the tests as the main url to load. Can be useful if your tests will run on different environments, each one with a different url.
     */
		launch_url?: string /**
     * The hostname/IP on which the selenium server is accepting connections.
     */;
		selenium_host?: string /**
     * The port number on which the selenium server is accepting connections.
     */;
		selenium_port?: number /**
     * Whether to show extended Selenium command logs.
     */;
		silent?: boolean /**
     * Use to disable terminal output completely.
     */;
		output?: boolean /**
     * Use to disable colored output in the terminal.
     */;
		disable_colors?: boolean /**
     * Selenium generates screenshots when command errors occur. With on_failure set to true, also generates screenshots for failing or erroring tests. These are saved on the disk.
     * Since v0.7.5 you can disable screenshots for command errors by setting "on_error" to false.
     * Example:
     * "screenshots" : {
     *      "enabled" : true,
     *      "on_failure" : true,
     *      "on_error" : false,
     *      "path" : ""
     * }
     */;
		screenshots?: ScreenshotOptions /**
     * In case the selenium server requires credentials this username will be used to compute the Authorization header.
     * The value can be also an environment variable, in which case it will look like this: "username" : "${SAUCE_USERNAME}"
     */;
		username?: string /**
     * This field will be used together with username to compute the Authorization header.
     * Like username, the value can be also an environment variable: "access_key" : "${SAUCE_ACCESS_KEY}"
     */;
		access_key?: string /**
     * Proxy requests to the selenium server. http, https, socks(v5), socks5, sock4, and pac are accepted. Uses node-proxy-agent. Example: http://user:pass@host:port
     */;
		proxy?: string /**
     * An object which will be passed to the Selenium WebDriver when a new session will be created. You can specify browser name for instance along with other capabilities.
     * Example:
     *  "desiredCapabilities" : {
     *  "browserName" : "firefox",
     *  "acceptSslCerts" : true
     * }
     * You can view the complete list of capabilities https://code.google.com/p/selenium/wiki/DesiredCapabilities.
     */;
		desiredCapabilities?: DesiredCapabilities /**
     * An object which will be made available within the test and can be overwritten per environment. Example:"globals" : {  "myGlobal" : "some_global" }
     */;
		globals?: {
			[x: string]: any;
		} /**
     * An array of folders or file patterns to be skipped (relative to the main source folder).
     * Example: "exclude" : ["excluded-folder"] or: "exclude" : ["test-folder/*-smoke.js"]
     */;
		exclude?: string[] /**
     * Folder or file pattern to be used when loading the tests. Files that don't match this patter will be ignored.
     * Example: "filter" : "tests/*-smoke.js"
     */;
		filter?: string /**
     * Do not show the Base64 image data in the (verbose) log when taking screenshots.
     */;
		log_screenshot_data?: boolean /**
     * Use xpath as the default locator strategy
     */;
		use_xpath?: boolean /**
     * Same as Selenium settings cli_args. You can override the global cli_args on a per-environment basis.
     */;
		cli_args?: any /**
     * End the session automatically when the test is being terminated, usually after a failed assertion.
     */;
		end_session_on_fail?: boolean /**
     * Skip the rest of testcases (if any) when one testcase fails..
     */;
		skip_testcases_on_fail?: boolean;
	}

	export interface TestSuite {
		name: string;
		'module': string;
		group: string;
		results: any;
	}

	export interface AssertionError {
		name: string;
		message: string;
		showDiff: boolean;
		stack: string;
	}

	export interface LanguageChains {
		to: Expect;
		be: Expect;
		been: Expect;
		is: Expect;
		that: Expect;
		which: Expect;
		and: Expect;
		has: Expect;
		have: Expect;
		with: Expect;
		at: Expect;
		of: Expect;
	}

	export interface Expect extends LanguageChains, NightWatchClient {
		/**
     * Returns the DOM Element
     * @param property: Css / Id property of the DOM element
     * @returns {}
     */
		element: (
			property: string,
		) => NightWatchClient /**
     * These methods will perform assertions on the specified target on the current element.
     * The targets can be an attribute value, the element's inner text and a css property.
     * @param value
     * @param message
     * @returns {}
     */;
		equal: (value: string) => NightWatchClient;
		contain: (value: string) => NightWatchClient;
		match: (value: string) => NightWatchClient /**
     * Negates any of assertions following in the chain.
     */;
		not: NightWatchClient /**
     * These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds).
     * before or after can be chained to any assertion and thus adding retry capability. You can change the polling interval by defining
     * a waitForConditionPollInterval property (in milliseconds) as a global property in your nightwatch.json or in
     * your external globals file. Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     * @param value: Number of milliseconds to wait to perform and operation of check
     * @returns {}
     */;
		before: (value: number) => NightWatchClient;
		after: (
			value: number,
		) => NightWatchClient /**
     * Checks if the type (i.e. tag name) of a specified element is of an expected value.
     * @param value: The expected type
     * @param message: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		a: (value: string, message?: string) => NightWatchClient;
		an: (
			value: string,
			message?: string,
		) => NightWatchClient /**
     * Checks if a given attribute of an element exists and optionally if it has the expected value.
     * @param attribute: The attribute name
     * @param message: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		attribute: (
			name: string,
			message?: string,
		) => NightWatchClient /**
     * Checks a given css property of an element exists and optionally if it has the expected value.
     * @param property: The css property name
     * @param message: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		css: (
			property: string,
			message?: string,
		) => NightWatchClient /**
     * Property that checks if an element is currently enabled.
     */;
		enabled: NightWatchClient /**
     * Property that checks if an element is present in the DOM.
     */;
		present: NightWatchClient /**
     * Property that checks if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     */;
		selected: NightWatchClient /**
     * Property that retrieves the text contained by an element. Can be chained to check if contains/equals/matches the specified text or regex.
     */;
		text: NightWatchClient /**
     * Property that retrieves the value (i.e. the value attributed) of an element. Can be chained to check if contains/equals/matches the specified text or regex.
     */;
		value: NightWatchClient /**
     * Property that asserts the visibility of a specified element.
     */;
		visible: NightWatchClient;
	}

	export interface Assertion extends NightWatchClient {
		/**
     * Checks if the given attribute of an element contains the expected value.
     * @param selector: The selector (CSS / Xpath) used to locate the element.
     * @param attribute: The attribute name
     * @param expected: The expected contained value of the attribute to check.
     * @param message: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */
		attributeContains: (
			selector: string,
			attribute: string,
			expected: string,
			message?: string,
		) => NightWatchClient /**
     * Checks if the given attribute of an element has the expected value.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param attribute: The attribute name
     * @param expected: The expected value of the attribute to check.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		attributeEquals: (
			cssSelector: string,
			attribute: string,
			expected: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given element contains the specified text.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param expectedText: The text to look for.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		containsText: (
			cssSelector: string,
			expectedText: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given element has the specified CSS class.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param className: The CSS class to look for.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		cssClassPresent: (
			cssSelector: string,
			className: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given element does not have the specified CSS class.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param className: The CSS class to look for.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		cssClassNotPresent: (
			cssSelector: string,
			className: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the specified css property of a given element has the expected value.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param cssProperty: The CSS property.
     * @param expected: The expected value of the css property to check.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		cssProperty: (
			cssSelector: string,
			cssProperty: string,
			expected: string | number,
			msg?: string,
		) => NightWatchClient;
		deepEqual: (value: any, expected: any, message?: string) => NightWatchClient;
		deepStrictEqual: (value: any, expected: any, message?: string) => NightWatchClient;
		doesNotThrow: (
			value: any,
			expected: any,
			message?: string,
		) => NightWatchClient /**
     * Checks if the given element exists in the DOM.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		elementPresent: (
			cssSelector: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given element does not exist in the DOM.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		elementNotPresent: (cssSelector: string, msg?: string) => NightWatchClient;
		equal: (value: any, expected: any, message?: string) => NightWatchClient;
		fail: (
			actual?: any,
			expected?: any,
			message?: string,
			operator?: string,
		) => NightWatchClient /**
     * Checks if the given element is not visible on the page.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		hidden: (cssSelector: string, msg?: string) => NightWatchClient;
		ifError: (value: any, message?: string) => NightWatchClient;
		notDeepEqual: (actual: any, expected: any, message?: string) => NightWatchClient;
		notDeepStrictEqual: (value: any, message?: string) => NightWatchClient;
		notEqual: (actual: any, expected: any, message?: string) => NightWatchClient;
		notStrictEqual: (value: any, expected: any, message?: string) => NightWatchClient;
		ok: (actual: boolean, message?: string) => NightWatchClient;
		strictEqual: (value: any, expected: any, message?: string) => NightWatchClient;
		throws: (
			fn: Function,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the page title equals the given value.
     * @param expected: The expected page title.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     *
     * Defined in base class.
     */;
		//title: (expected: string, msg?: string) => NightWatchClient;

		/**
     * Checks if the current URL contains the given value.
     * @param expectedText: The value expected to exist within the current URL.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */
		urlContains: (
			expectedText: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the current url equals the given value.
     * @param expected: The expected url.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		urlEquals: (
			expected: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given form element's value equals the expected value.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param expectedText: The expected text.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		value: (
			cssSelector: string,
			expectedText: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given form element's value contains the expected value.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param expectedText: The expected text.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		valueContains: (
			cssSelector: string,
			expectedText: string,
			msg?: string,
		) => NightWatchClient /**
     * Checks if the given element is visible on the page.
     * @param cssSelector: The CSS selector used to locate the element.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @returns {}
     */;
		visible: (cssSelector: string, msg?: string) => NightWatchClient;
		AssertionError: AssertionError;
	}

	export interface TypedCallbackResult<T> {
		status: number;
		value: T;
	}

	export interface CallbackResult extends TypedCallbackResult<string | any> {}

	export interface LogEntry {
		/**
     * The log entry message.
     */
		message: string /**
     * The time stamp of log entry in seconds.
     */;
		timestamp: number /**
     * Severity level
     */;
		level: string;
	}

	export interface Keys {
		/** Releases all held modifier keys. */
		'NULL': string /** OS-specific keystroke sequence that performs a cancel action. */;
		'CANCEL': string /** The help key. This key only appears on older Apple keyboards in place of the Insert key. */;
		'HELP': string /** The backspace key. */;
		'BACK_SPACE': string /** The tab key. */;
		'TAB': string /** The clear key. This key only appears on full-size Apple keyboards in place of Num Lock key. */;
		'CLEAR': string /** The return key. */;
		'RETURN': string /** The enter (numpad) key. */;
		'ENTER': string /** The shift key. */;
		'SHIFT': string /** The control key. */;
		'CONTROL': string /** The alt key. */;
		'ALT': string /** The pause key. */;
		'PAUSE': string /** The escape key. */;
		'ESCAPE': string /** The space bar. */;
		'SPACE': string /** The page up key. */;
		'PAGEUP': string /** The page down key. */;
		'PAGEDOWN': string /** The end key. */;
		'END': string /** The home key. */;
		'HOME': string /** The left arrow. */;
		'ARROW_LEFT': string;
		'LEFT_ARROW': string /** The up arrow. */;
		'ARROW_UP': string;
		'UP_ARROW': string /** The right arrow. */;
		'ARROW_RIGHT': string;
		'RIGHT_ARROW': string /** The down arrow. */;
		'ARROW_DOWN': string;
		'DOWN_ARROW': string /** The insert key. */;
		'INSERT': string /** The delete key. */;
		'DELETE': string /** The semicolon key. */;
		'SEMICOLON': string /** The equals key. */;
		'EQUALS': string /** The numpad zero key. */;
		'NUMPAD0': string /** The numpad one key. */;
		'NUMPAD1': string /** The numpad two key. */;
		'NUMPAD2': string /** The numpad three key. */;
		'NUMPAD3': string /** The numpad four key. */;
		'NUMPAD4': string /** The numpad five key. */;
		'NUMPAD5': string /** The numpad six key. */;
		'NUMPAD6': string /** The numpad seven key. */;
		'NUMPAD7': string /** The numpad eight key. */;
		'NUMPAD8': string /** The numpad nine key. */;
		'NUMPAD9': string /** The numpad multiply (*) key. */;
		'MULTIPLY': string /** The numpad add (+) key. */;
		'ADD': string /** The numpad separator (=) key. */;
		'SEPARATOR': string /** The numpad subtract (-) key. */;
		'SUBTRACT': string /** The numpad decimal (.) key. */;
		'DECIMAL': string /** The numpad divide (/) key. */;
		'DIVIDE': string /** The F1 key. */;
		'F1': string /** The F2 key. */;
		'F2': string /** The F3 key. */;
		'F3': string /** The F4 key. */;
		'F4': string /** The F5 key. */;
		'F5': string /** The F6 key. */;
		'F6': string /** The F7 key. */;
		'F7': string /** The F8 key. */;
		'F8': string /** The F9 key. */;
		'F9': string /** The F10 key. */;
		'F10': string /** The F11 key. */;
		'F11': string /** The F12 key. */;
		'F12': string /** The meta (Windows) key. */;
		'META': string /** The command (⌘) key. */;
		'COMMAND': string;
	}

	export interface NightWatchClient {
		assert: Assertion;
		expect: Expect;
		verify: Assertion /**
     * Clear a textarea or a text input element's value. Uses elementIdValue protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.clearValue('input[type=text]');
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		clearValue: (
			selector: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Simulates a click event on the given DOM element. Uses elementIdClick protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.click("#main ul li a.first");
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		click: (
			selector: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Close the current window. This can be useful when you're working with multiple windows open (e.g. an OAuth login). Uses window protocol command.
     *
     * Usage:
     * ```
     *  this.demoTest = function (client) {
     *   client.closeWindow();
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		closeWindow: (
			callback?: () => void,
		) => NightWatchClient /**
     * Delete the cookie with the given name. This command is a no-op if there is no such cookie visible to the current page.
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     *  browser.deleteCookie("test_cookie", function() {
     *  // do something more in here
     *  });
     * }
     * ```
     * @param The: name of the cookie to delete.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		deleteCookie: (
			The: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Delete all cookies visible to the current page.
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     * browser.deleteCookies(function() {
     *  // do something more in here
     *  });
     * }
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		deleteCookies: (
			callback?: () => void,
		) => NightWatchClient /**
     * Ends the session. Uses session protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.end();
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		end: (
			callback?: () => void,
		) => NightWatchClient /**
     * Retrieve the value of an attribute for a given DOM element. Uses elementIdAttribute protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.getAttribute("#main ul li a.first", "href", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, "#home");
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param attribute: The attribute name to inspect.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The value of the attribute}
     */;
		getAttribute: (
			selector: string,
			attribute: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve a single cookie visible to the current page. The cookie is returned as a cookie JSON object, as defined here.
     * Uses cookie protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     *  browser.getCookie(name, function callback(result) {
     *      this.assert.equal(result.value, '123456');
     *      this.assert.equals(result.name, 'test_cookie');
     *  });
     * }
     * ```
     * @param name: The cookie name
     * @param callback: The callback function which will receive the response as an argument.
     * @returns {The cookie object as a selenium cookie JSON object or null if the cookie wasn't found.}
     */;
		getCookie: (
			name: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve all cookies visible to the current page. The cookies are returned as an array of cookie JSON object,
     * as defined here. Uses cookie protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     *  browser.getCookies(function callback(result) {
     *      this.assert.equal(result.value.length, 1);
     *      this.assert.equals(result.value[0].name, 'test_cookie');
     *  });
     * }
     * ```
     * @param callback: The callback function which will receive the response as an argument.
     * @returns {A list of cookies}
     */;
		getCookies: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve the value of a css property for a given DOM element. Uses elementIdCssProperty protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.getCssProperty("#main ul li a.first", "display", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, 'inline');
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param cssProperty: The CSS property to inspect.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The value of the css property}
     */;
		getCssProperty: (
			selector: string,
			cssProperty: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's size in pixels. Uses elementIdSize protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.getElementSize("#main ul li a.first", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value.width, 500);
     *      this.assert.equal(result.value.height, 20);
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The width and height of the element in pixels}
     */;
		getElementSize: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     * The element's coordinates are returned as a JSON object with x and y properties. Uses elementIdLocation protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.getLocation("#main ul li a.first", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value.x, 200);
     *      this.assert.equal(result.value.y, 200);
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The X and Y coordinates for the element on the page}
     */;
		getLocation: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's location on the screen once it has been scrolled into view. Uses elementIdLocationInView protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.getLocationInView("#main ul li a.first", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value.x, 200);
     *      this.assert.equal(result.value.y, 200);
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The X and Y coordinates for the element on the page.}
     */;
		getLocationInView: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Gets a log from selenium
     *
     * Usage:
     * ```
     * this.demoTest = function(client) {
     *  this.getLog('browser', function(logEntriesArray) {
     *      console.log('Log length: ' + logEntriesArray.length);
     *      logEntriesArray.forEach(function(log) {
     *          console.log('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);
     *      });
     *  });
     * };
     * ```
     * @param typestring: Log type to request
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		getLog: (
			typestring: string,
			callback?: (log: LogEntry[]) => void,
		) => NightWatchClient /**
     * Gets the available log types
     *
     * Usage:
     * ```
     * this.demoTest = function(client) {
     *  this.getLogTypes(function(typesArray) {
     *      console.log(typesArray);
     *  });
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {Available log types}
     */;
		getLogTypes: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Query for an element's tag name. Uses elementIdName protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.getTagName("#main ul li .first", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, "a");
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The element's tag name, as a lowercase string.}
     */;
		getTagName: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Returns the visible text for the element. Uses elementIdText protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.getText("#main ul li a.first", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, "nightwatchjs.org");
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The element's visible text.}
     */;
		getText: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Returns the title of the current page. Uses title protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.getTitle(function(title) {
     *      this.assert.equal(typeof title, 'string');
     *      this.assert.equal(title, 'Nightwatch.js');
     *  });
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The page title.}
     */;
		getTitle: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Returns a form element current value. Uses elementIdValue protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.getValue("form.login input[type=text]", function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, "enter username");
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The element's value.}
     */;
		getValue: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * This command is an alias to url and also a convenience method when called without any arguments in the sense that it performs a call to .url() with passing the value of launch_url
     * field from the settings file. Uses url protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.init();
     * };
     * ```
     * @param url: Url to navigate to.
     * @returns {}
     */;
		init: (
			url?: string,
		) => NightWatchClient /**
     * Utility command to load an external script into the page specified by url.
     *
     * Usage:
     * ```
     * this.demoTest = function(client) {
     *  this.injectScript("{script-url}", function() {
     *      // we're all done here.
     *  });
     * };
     * ```
     * @param scriptUrl: The script file url
     * @param id: Dom element id to be set on the script tag.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The newly created script tag.}
     */;
		injectScript: (
			scriptUrl: string,
			id?: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Utility command to test if the log type is available
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     *  browser.isLogAvailable('browser', function(isAvailable) {
     *      // do something more in here
     *  });
     * }
     * ```
     * @param typeString: Type of log to test
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		isLogAvailable: (
			typeString: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine if an element is currently displayed. Uses elementIdDisplayed protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.isVisible('#main', function(result) {
     *      this.assert.equal(typeof result, "object");
     *      this.assert.equal(result.status, 0);
     *      this.assert.equal(result.value, true);
     *  });
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		isVisible: (
			selector: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Maximizes the current window.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.maximizeWindow();
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		maximizeWindow: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Move the mouse by an offset of the specified element. Uses moveTo protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.moveToElement('#main', 10, 10);
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param xoffset: X offset to move to, relative to the top-left corner of the element.
     * @param yoffset: Y offset to move to, relative to the top-left corner of the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		moveToElement: (
			selector: string,
			xoffset: number,
			yoffset: number,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Suspends the test for the given time in milliseconds. If the milliseconds argument is missing it will suspend the test indefinitely
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.pause(1000);
     *  // or suspend indefinitely
     *  browser.pause();
     * };
     * ```
     * @param ms: The number of milliseconds to wait.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		pause: (
			ms: number,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * A simple perform command which allows access to the "api" in a callback. Can be useful if you want to read variables set by other commands.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  var elementValue;
     *  browser
     *      .getValue('.some-element', function(result) {
     *          elementValue = result.value;
     *      })
     *      // other stuff going on ...
     *      //
     *      // self-completing callback
     *      .perform(function() {
     *          console.log('elementValue', elementValue);
     *          // without any defined parameters, perform
     *          // completes immediately (synchronously)
     *      })
     *      //
     *      // asynchronous completion
     *      .perform(function(done) {
     *          console.log('elementValue', elementValue);
     *          // potentially other async stuff going on
     *          // on finished, call the done callback
     *          done();
     *      })
     *      //
     *      // asynchronous completion including api (client)
     *      .perform(function(client, done) {
     *          console.log('elementValue', elementValue);
     *          // similar to before, but now with client
     *          // potentially other async stuff going on
     *          // on finished, call the done callback
     *          done();
     *      });
     * };
     * ```
     * @param callback: The function to run as part of the queue. Its signature can have up to two parameters. No parameters: callback runs and
     * perform completes immediately at the end of the execution of the callback. One parameter: allows for asynchronous execution within the
     * callback providing a done callback function for completion as the first argument. Two parameters: allows for asynchronous execution
     * with the "api" object passed in as the first argument, followed by the done callback.
     * @returns {}
     */;
		perform: (
			callback: (browser: NightWatchClient, done?: () => void) => void,
		) => NightWatchClient /**
     * Resizes the current window.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.resizeWindow(1000, 800);
     * };
     * ```
     * @param width: The new window width.
     * @param height: The new window height.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		resizeWindow: (
			width: number,
			height: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Take a screenshot of the current page and saves it as the given filename.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.saveScreenshot('/path/to/fileName.png');
     * };
     * ```
     * @param fileName: The complete path to the file name where the screenshot should be saved.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		saveScreenshot: (
			fileName: string,
			callback?: () => void,
		) => NightWatchClient /**
     * SessionId of the session used by the Nightwatch api.
     */;
		sessionId: string /**
     * Override the sessionId used by Nightwatch client with another session id.
     * @param sessionId: The session Id to set.
     * @returns {}
     */;
		setSessionId: (
			sessionId: string,
		) => NightWatchClient /**
     * Set a cookie, specified as a cookie JSON object, as defined https://code.google.com/p/selenium/wiki/JsonWireProtocol#Cookie_JSON_Object.
     * Uses cookie protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function(browser) {
     *  browser.setCookie({
     *      name     : "test_cookie",
     *      value    : "test_value",
     *      path     : "/", (Optional)
     *      domain   : "example.org", (Optional)
     *      secure   : false, (Optional)
     *      httpOnly : false, // (Optional)
     *      expiry   : 1395002765 // (Optional) time in seconds since midnight, January 1, 1970 UTC
     *  });
     * }
     * ```
     * @param cookie: The cookie object.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		setCookie: (
			cookie: any,
			callback?: () => void,
		) => NightWatchClient /**
     * Sends some text to an element. Can be used to set the value of a form element or to send a sequence of key strokes to an element. Any UTF-8 character may be specified.
     * An object map with available keys and their respective UTF-8 characters, as defined on W3C WebDriver draft spec (http://www.w3.org/TR/webdriver/#character-types),
     * is loaded onto the main Nightwatch instance as client.Keys.
     *
     * Usage:
     * ```
     * // send some simple text to an input
     * this.demoTest = function (browser) {
     *  browser.setValue('input[type=text]', 'nightwatch');
     * };
     *
     * //
     * // send some text to an input and hit enter.
     * this.demoTest = function (browser) {
     *  browser.setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER]);
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param inputValue: The text to send to the element or key strokes.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		setValue: (
			selector: string,
			inputValue: string | string[],
			callback?: () => void,
		) => NightWatchClient /**
     * Sets the current window position.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.setWindowPosition(0, 0);
     * };
     * ```
     * @param OffsetX: The new window offset x-position.
     * @param OffsetY: The new window offset y-position.
     * @param callback: ptional callback function to be called when the command finishes.
     * @returns {}
     */;
		setWindowPosition: (
			OffsetX: number,
			OffsetY: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element. Uses submit protocol command.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.submitForm('form.login');
     * };
     * ```
     * @param selector: The CSS/Xpath selector used to locate the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		submitForm: (
			selector: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Change focus to another window. The window to change focus to may be specified by its server assigned window handle, or by the value of its name attribute.
     * To find out the window handle use window_handles protocol action
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.window_handles(function(result) {
     *      var handle = result.value[0];
     *      browser.switchWindow(handle);
     *  });
     * };
     * ```
     * @param handleOrName: The server assigned window handle or the name attribute.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		switchWindow: (
			handleOrName: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Convenience method that adds the specified hash (i.e. url fragment) to the current value of the launch_url as set in nightwatch.json.
     *
     * Usage:
     * ```
     * this.demoTest = function (client) {
     *  client.urlHash('#hashvalue');
     *  // or
     *  client.urlHash('hashvalue');
     * };
     * ```
     * @param hash: The hash to add/replace to the current url (i.e. the value set in the launch_url property in nightwatch.json).
     * @param callback:
     * @returns {}
     */;
		urlHash: (
			hash: string,
		) => NightWatchClient /**
     * Opposite of waitForElementPresent. Waits a given time in milliseconds for an element to be not present (i.e. removed) in the page before performing any other commands
     * or assertions. If the element is still present after the specified amount of time, the test fails. You can change the polling interval by defining
     * a waitForConditionPollInterval property (in milliseconds) in as a global property in your nightwatch.json or in your external globals file.
     * Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.waitForElementNotPresent('#dialog', 1000);
     * };
     * ```
     * @param selector: The selector (CSS / Xpath) used to locate the element.
     * @param time: The number of milliseconds to wait. The runner performs repeated checks every 500 ms.
     * @param abortOnFailure: By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails.
     * To set this globally you can define a property `abortOnAssertionFailure` in your globals.
     * @param callback: Optional callback function to be called when the command finishes.
     * @param message: Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time
     * (e.g. Element %s was not in the page for %d ms).
     * @returns {}
     */;
		waitForElementNotPresent: (
			selector: string,
			time?: number,
			abortOnFailure?: boolean,
			callback?: () => void,
			message?: string,
		) => NightWatchClient /**
     * Opposite of waitForElementVisible. Waits a given time in milliseconds for an element to be not visible (i.e. hidden but existing) in the page before performing
     * any other commands or assertions. If the element fails to be hidden in the specified amount of time, the test fails. You can change the polling interval by
     * defining a waitForConditionPollInterval property (in milliseconds) in as a global property in your nightwatch.json or in your external globals file.
     * Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.waitForElementNotVisible('#dialog', 1000);
     * };
     * ```
     * @param selector: The selector (CSS / Xpath) used to locate the element.
     * @param time: The number of milliseconds to wait. The runner performs repeated checks every 500 ms.
     * @param abortOnFailure: By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails.
     * To set this globally you can define a property `abortOnAssertionFailure` in your globals.
     * @param callback: Optional callback function to be called when the command finishes.
     * @param message: Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time
     * (e.g. Element %s was not in the page for %d ms).
     * @returns {}
     */;
		waitForElementNotVisible: (
			selector: string,
			time?: number,
			abortOnFailure?: boolean,
			callback?: () => void,
			message?: string,
		) => NightWatchClient /**
     * Waits a given time in milliseconds for an element to be present in the page before performing any other commands or assertions.
     * If the element fails to be present in the specified amount of time, the test fails. You can change this by setting abortOnFailure to false.
     * You can change the polling interval by defining a waitForConditionPollInterval property (in milliseconds) in as a global property in your nightwatch.json or in
     * your external globals file.
     * Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.waitForElementPresent('body', 1000);
     *  // continue if failed
     *  browser.waitForElementPresent('body', 1000, false);
     *  // with callback
     *  browser.waitForElementPresent('body', 1000, function() {
     *      // do something while we're here
     *  });
     *  // custom Spanish message
     *  browser.waitForElementPresent('body', 1000, 'elemento %s no era presente en %d ms');
     *  // many combinations possible - the message is always the last argument
     *  browser.waitForElementPresent('body', 1000, false, function() {}, 'elemento %s no era presente en %d ms');
     * };
     * ```
     * @param selector: The selector (CSS / Xpath) used to locate the element.
     * @param time: The number of milliseconds to wait. The runner performs repeated checks every 500 ms.
     * @param abortOnFailure: By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails.
     * To set this globally you can define a property `abortOnAssertionFailure` in your globals.
     * @param callback: Optional callback function to be called when the command finishes.
     * @param message: Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time
     * (e.g. Element %s was not in the page for %d ms).
     * @returns {}
     */;
		waitForElementPresent: (
			selector: string,
			time?: number,
			abortOnFailure?: boolean,
			callback?: () => void,
			message?: string,
		) => NightWatchClient /**
     * Waits a given time in milliseconds for an element to be visible in the page before performing any other commands or assertions.
     * If the element fails to be present and visible in the specified amount of time, the test fails. You can change this by setting abortOnFailure to false.
     * You can change the polling interval by defining a waitForConditionPollInterval property (in milliseconds) in as a global property in your nightwatch.json
     * or in your external globals file.
     * Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.waitForElementVisible('body', 1000);
     *  // continue if failed
     *  browser.waitForElementVisible('body', 1000, false);
     *  // with callback
     *  browser.waitForElementVisible('body', 1000, function() {
     *  // do something while we're here
     *  });
     *  // custom Spanish message
     *  browser.waitForElementVisible('body', 1000, 'elemento %s no era visible en %d ms');
     *  // many combinations possible - the message is always the last argument
     *  browser.waitForElementVisible('body', 1000, false, function() {}, 'elemento %s no era visible en %d ms');
     * };
     * ```
     * @param selector: The selector (CSS / Xpath) used to locate the element.
     * @param time: The number of milliseconds to wait. The runner performs repeated checks every 500 ms.
     * @param abortOnFailure: By the default if the element is not found the test will fail. Set this to false if you wish for the test to continue even if the assertion fails. To set this globally you can define a property `abortOnAssertionFailure` in your globals.
     * @param callback: Optional callback function to be called when the command finishes.
     * @param message: Optional message to be shown in the output; the message supports two placeholders: %s for current selector and %d for the time (e.g. Element %s was not in the page for %d ms).
     * @returns {}
     */;
		waitForElementVisible: (
			selector: string,
			time?: number,
			abortOnFailure?: boolean,
			callback?: () => void,
			message?: string,
		) => NightWatchClient /**
     * Accepts the currently displayed alert dialog. Usually, this is equivalent to clicking on the 'OK' button in the dialog.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		acceptAlert: (
			callback?: () => void,
		) => NightWatchClient /**
     * Navigate backwards in the browser history, if possible.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		back: (
			callback?: () => void,
		) => NightWatchClient /**
     * Get a list of the available contexts.
     * Used by Appium when testing hybrid mobile web apps. More info here: https://github.com/appium/appium/blob/master/docs/en/advanced-concepts/hybrid.md.
     * @param callback: Callback function to be called when the command finishes.
     * @returns {an array of strings representing available contexts, e.g 'WEBVIEW', or 'NATIVE'}
     */;
		contexts: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve or delete all cookies visible to the current page or set a cookie.
     * @param method
     * @param callbackorCookie
     * @returns {a string representing the current context or `null`, representing "no context"}
     */;
		cookie: (
			method: string,
			callbackorCookie?: () => void,
		) => NightWatchClient /**
     * Get current context.
     * @param callback: Callback function to be called when the command finishes.
     * @returns {}
     */;
		currentContext: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Dismisses the currently displayed alert dialog. For confirm() and prompt() dialogs, this is equivalent to clicking the 'Cancel' button.
     * For alert() dialogs, this is equivalent to clicking the 'OK' button.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		dismissAlert: (
			callback?: () => void,
		) => NightWatchClient /**
     * Double-clicks at the current mouse coordinates (set by moveto).
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		doubleClick: (
			callback?: () => void,
		) => NightWatchClient /**
     * Search for an element on the page, starting from the document root. The located element will be returned as a WebElement JSON object.
     *
     * Usage:
     * ```
     * module.exports = {
     *  'demo Test' : function(browser) {
     *      browser.element('css selector', 'body', function(res) {
     *          console.log(res)
     *      });
     *  }
     * };
     * ```
     * @param using: The locator's strategy to use.
     * @param value: The search target.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		element: (
			using: string,
			value: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Get the element on the page that currently has focus.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementActive: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Get the value of an element's attribute.
     * @param id: ID of the element to route the command to.
     * @param attributeName: The attribute name
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdAttribute: (
			id: string,
			attributeName: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Clear a TEXTAREA or text INPUT element's value.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdClear: (
			id: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Click on an element.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdClick: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Query the value of an element's computed CSS property.
     * The CSS property to query should be specified using the CSS property name, not the JavaScript property name (e.g. background-color instead of backgroundColor).
     * @param id
     * @param cssPropertyName
     * @param callback
     * @returns {}
     */;
		elementIdCssProperty: (
			id: string,
			cssPropertyName: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine if an element is currently displayed.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdDisplayed: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Search for an element on the page, starting from the identified element. The located element will be returned as a WebElement JSON object.
     * @param id: ID of the element to route the command to.
     * @param using: The locator strategy to use.
     * @param value: The search target.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdElement: (
			id: string,
			using: string,
			value: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Search for multiple elements on the page, starting from the identified element. The located element will be returned as a WebElement JSON objects.
     * @param id: ID of the element to route the command to.
     * @param using: The locator strategy to use.
     * @param value: The search target.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdElements: (
			id: string,
			using: string,
			value: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine if an element is currently enabled.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdEnabled: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Test if two element IDs refer to the same DOM element.
     * @param id: ID of the element to route the command to.
     * @param otherId: ID of the element to compare against.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdEquals: (
			id: string,
			otherId: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's location on the page. The point (0, 0) refers to the upper-left corner of the page.
     * The element's coordinates are returned as a JSON object with x and y properties.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The X and Y coordinates for the element on the page.}
     */;
		elementIdLocation: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's location on the screen once it has been scrolled into view.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdLocationInView: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Query for an element's tag name.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdName: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine if an OPTION element, or an INPUT element of type checkbox or radio button is currently selected.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdSelected: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Determine an element's size in pixels. The size will be returned as a JSON object with width and height properties.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdSize: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Returns the visible text for the element.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		elementIdText: (
			id: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Send a sequence of key strokes to an element or returns the current value of the element.
     * @param id: ID of the element to route the command to.
     * @param value: Value to send to element in case of POST
     * @param callback
     * @returns {}
     */;
		elementIdValue: (
			id: string,
			value?: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Search for multiple elements on the page, starting from the document root. The located elements will be returned as a WebElement JSON objects.
     * Valid strings to use as locator strategies are: "class name", "css selector", "id", "name", "link text", "partial link text", "tag name", "xpath"
     * @param using: The locator strategy to use.
     * @param value: The search target.
     * @param callback: Callback function to be invoked with the result when the command finishes.
     * @returns {}
     */;
		elements: (
			using: string,
			value: string,
			callback: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is assumed to be synchronous and
     * the result of evaluating the script is returned to the client.
     * The script argument defines the script to execute in the form of a function body. The value returned by that function will be returned to the client.
     * The function will be invoked with the provided args array and the values may be accessed via the arguments object in the order specified.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.execute(function(data) {
     *      // resize operation
     *      return true;
     *  }, [imagedata], function(result) {
     *      ...
     *  });
     * };
     * ```
     * @param body: The function body to be injected.
     * @param args: An array of arguments which will be passed to the function.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The script result.}
     */;
		execute: (
			body: ((...data: any[]) => void) | string,
			args?: any[],
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Inject a snippet of JavaScript into the page for execution in the context of the currently selected frame. The executed script is assumed to be asynchronous
     * and the result of evaluating the script is returned to the client.
     * Asynchronous script commands may not span page loads. If an unload event is fired while waiting for a script result, an error should be returned to the client.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.executeAsync(function(data, done) {
     *      someAsyncOperation(function() {
     *          done(true);
     *      });
     *  }, [imagedata], function(result) {
     *      // ...
     *  });
     * };
     * ```
     * @param script: The function body to be injected.
     * @param args: An array of arguments which will be passed to the function.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The script result.}
     */;
		executeAsync: (
			script: ((...data: any[]) => void) | string,
			args?: any[],
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Navigate forwards in the browser history, if possible.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		forward: (
			callback?: () => void,
		) => NightWatchClient /**
     * Change focus to another frame on the page. If the frame id is missing or null, the server should switch to the page's default content.
     * @param frameId: Identifier for the frame to change focus to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		frame: (
			frameId?: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Change focus to the parent context. If the current context is the top level browsing context, the context remains unchanged.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		frameParent: (
			callback?: () => void,
		) => NightWatchClient /**
     * Gets the text of the currently displayed JavaScript alert(), confirm(), or prompt() dialog.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {The text of the currently displayed alert.}
     */;
		getAlertText: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Get the current browser orientation.
     * @param callback: Callback function to be called when the command finishes.
     * @returns {The current browser orientation: LANDSCAPE|PORTRAIT}
     */;
		getOrientation: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Send a sequence of key strokes to the active element. The sequence is defined in the same format as the sendKeys command.
     * An object map with available keys and their respective UTF-8 characters, as defined on W3C WebDriver draft spec, is loaded onto the main Nightwatch instance as client.Keys.
     * Rather than the setValue, the modifiers are not released at the end of the call. The state of the modifier keys is kept between calls, so mouse interactions can be performed while modifier keys are depressed.
     * @param keysToSend: The keys sequence to be sent.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		keys: (
			keysToSend: string[],
			callback?: () => void,
		) => NightWatchClient /**
     * Click at the current mouse coordinates (set by moveto).
     * The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button, and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     * @param button: The mouse button
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		mouseButtonClick: (
			button: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Click and hold the left mouse button (at the coordinates set by the last moveto command). Note that the next mouse-related command that should follow is mouseButtonUp . Any other mouse command (such as click or another call to buttondown) will yield undefined behaviour.
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button, and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     * @param button: The mouse button
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		mouseButtonDown: (
			button: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Releases the mouse button previously held (where the mouse is currently at). Must be called once for every mouseButtonDown command issued.
     * Can be used for implementing drag-and-drop. The button can be (0, 1, 2) or ('left', 'middle', 'right'). It defaults to left mouse button, and if you don't pass in a button but do pass in a callback, it will handle it correctly.
     * @param button: The mouse button
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		mouseButtonUp: (
			button: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Move the mouse by an offset of the specificed element. If no element is specified, the move is relative to the current mouse cursor. If an element is provided but no offset, the mouse will be moved to the center of the element.
     * If the element is not visible, it will be scrolled into view.
     * @param element: Opaque ID assigned to the element to move to. If not specified or is null, the offset is relative to current position of the mouse.
     * @param xofset: X offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @param yoffset: Y offset to move to, relative to the top-left corner of the element. If not specified, the mouse will move to the middle of the element.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		moveTo: (
			element: string,
			xofset: number,
			yoffset: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Refresh the current page.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		refresh: (
			callback?: () => void,
		) => NightWatchClient /**
     * Take a screenshot of the current page.
     * @param log_screenshot_data: Whether or not the screenshot data should appear in the logs when running with --verbose
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		screenshot: (
			log_screenshot_data: boolean,
			callback?: () => void,
		) => NightWatchClient /**
     * Get info about, delete or create a new session. Defaults to the current session.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.session(function(result) {
     *      console.log(result.value);
     *  });
     *  //
     *  browser.session('delete', function(result) {
     *      console.log(result.value);
     *  });
     *  //
     *  browser.session('delete', '12345-abc', function(result) {
     *      console.log(result.value);
     *  });
     * };
     * ```
     * @param action: The http verb to use, can be "get", "post" or "delete". If only the callback is passed, get is assumed as default.
     * @param sessionId: The id of the session to get info about or delete.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		session: (
			action?: string,
			sessionId?: string,
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Gets the text of the log type specified
     * @param typeString: Type of log to request
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {Array of the text entries of the log.}
     */;
		sessionLog: (
			typeString: string,
			callback?: (log: LogEntry[]) => void,
		) => NightWatchClient /**
     * Gets an array of strings for which log types are available.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {Available log types}
     */;
		sessionLogTypes: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Returns a list of the currently active sessions.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser.sessions(function(result) {
     *      console.log(result.value);
     *  });
     * };
     * ```
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		sessions: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Sends keystrokes to a JavaScript prompt() dialog.
     * @param value: Keystrokes to send to the prompt() dialog
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		setAlertText: (
			value: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Sets the context
     * @param context: context name to switch to - a string representing an available context.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		setContext: (
			context: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Sets the browser orientation.
     * @param orientation: The new browser orientation: {LANDSCAPE|PORTRAIT}
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		setOrientation: (
			orientation: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Get the current page source.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		source: (
			callback?: () => void,
		) => NightWatchClient /**
     * Query the server's current status.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		status: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Submit a FORM element. The submit command may also be applied to any element that is a descendant of a FORM element.
     * @param id: ID of the element to route the command to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		submit: (
			id: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Configure the amount of time that a particular type of operation can execute for before they are aborted and a |Timeout| error is returned to the client.
     * @param typeOfOperation: The type of operation to set the timeout for. Valid values are: "script" for script timeouts, "implicit" for modifying the implicit wait timeout and "page load" for setting a page load timeout.
     * @param ms: The amount of time, in milliseconds, that time-limited commands are permitted to run.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		timeouts: (
			typeOfOperation: string,
			ms: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Set the amount of time, in milliseconds, that asynchronous scripts executed by /session/:sessionId/execute_async are permitted to run before they are aborted and a |Timeout| error is returned to the client.
     * @param ms: The amount of time, in milliseconds, that time-limited commands are permitted to run.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		timeoutsAsyncScript: (
			ms: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Set the amount of time the driver should wait when searching for elements. If this command is never sent, the driver will default to an implicit wait of 0ms.
     * @param ms: The amount of time, in milliseconds, that time-limited commands are permitted to run.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		timeoutsImplicitWait: (
			ms: number,
			callback?: () => void,
		) => NightWatchClient /**
     * Get the current page title.
     * @param expected: The expected page title.
     * @param msg: Optional log message to display in the output. If missing, one is displayed by default.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		title: (
			expected: string,
			msg?: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Retrieve the URL of the current page or navigate to a new URL.
     *
     * Usage:
     * ```
     * module.exports = {
     *  'demo Test' : function(browser) {
     *      browser.url(function(result) {
     *          // return the current url
     *          console.log(result);
     *      });
     *      //
     *      // navigate to new url:
     *      browser.url('{URL}');
     *      //
     *      //
     *      // navigate to new url:
     *      browser.url('{URL}', function(result) {
     *          console.log(result);
     *      });
     *  }
     * };
     * ```
     * @param url: If missing, it will return the URL of the current page as an argument to the supplied callback
     * @param callback Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		url: (
			url?: string | ((result: CallbackResult) => void),
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Change focus to another window or close the current window.
     * @param method: The HTTP method to use
     * @param handleOrName: The window to change focus to.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		window: (
			method: string,
			handleOrName: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Retrieve the current window handle.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		windowHandle: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve the list of all window handles available to the session.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		windowHandles: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve the list of all window handles available to the session.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		window_handles: (
			callback?: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Retrieve the current window handle.
     * @param handleOrName: windowHandle URL parameter; if it is "current", the currently active window will be maximized.
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		windowMaximize: (
			handleOrName?: string,
			callback?: () => void,
		) => NightWatchClient /**
     * Change or get the position of the specified window. If the second argument is a function it will be used as a callback and the call will perform a get request to retrieve the existing window position.
     * @param windowHandle:
     * @param: offsetX:
     * @param: offsetY:
     * @param: callback:
     * @returns {}
     */;
		windowPosition: (
			windowHandle: string,
			offsetX: number,
			offsetY: number,
			callback: (result: CallbackResult) => void,
		) => NightWatchClient /**
     * Change or get the size of the specified window. If the second argument is a function it will be used as a callback and the call will perform a get request to retrieve the existing window size.
     * @param windowHandle:
     * @param width:
     * @param height:
     * @param callback: Optional callback function to be called when the command finishes.
     * @returns {}
     */;
		windowSize: (
			windowHandle: string,
			width: number,
			height: number,
			callback?: () => void,
		) => NightWatchClient /**
     * To switch to xpath selectors instead of css as the locate strategy.
     * To always use xpath by default set the property "use_xpath": true in your test settings.
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser
     *      .useXpath() // every selector now must be xpath
     *      .click("//tr[@data-recordid]/span[text()='Search Text']");
     * };
     * ```
     * @returns {}
     */;
		useXpath: () => NightWatchClient /**
     * To switch to css selectors instead of xpath as the locate strategy
     *
     * Usage:
     * ```
     * this.demoTest = function (browser) {
     *  browser
     *      .useCss() // we're back to CSS now
     *      .setValue('input[type=text]', 'nightwatch');
     * };
     * ```
     * @returns {}
     */;
		useCss: () => NightWatchClient;
		Keys: Keys;
		currentTest: TestSuite;
		globals: any;
		launch_url: string;

		page: {
			[x: string]: () => any;
		};
	}
}
