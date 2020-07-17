const defaultTitle = "Site Title",
	headerRef: any = {};

const config = {
	setHeaderRef(k: any, v: any) {
		headerRef[k] = v;
	},

	get siteName() {
		return defaultTitle;
	},

	setTitle(t?: string) {
		document.title = t ? t + " :: " + defaultTitle : defaultTitle;
		if ("setTitle" in headerRef) headerRef.setTitle(t || "");
	},
};

export default config;
