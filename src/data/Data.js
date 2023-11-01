import Template1 from "../templates/Template_1";
import Template2 from "../templates/Template_2";
import Template3 from "../templates/Template_3";
import Template4 from "../templates/Template_4";



// This Array of objects is used to  store data of template Images and template components ***************


export const TempImg = [
	{
		id: 1,
		name: "Template 1",
		image: require("./images/template-1.png"),
		rTemp: <Template1 />,
	},
	{
		id: 2,
		name: "Template 2",
		image: require("./images/template-2.png"),
		rTemp: <Template2 />,
	},
	{
		id: 3,
		name: "Template 3",
		image: require("./images/template-3.png"),
		rTemp: <Template3 />,
	},
	{
		id: 4,
		name: "Template 4",
		image: require("./images/template-4.png"),
		rTemp: <Template4 />,
	},
];

// This Array of objects is used to store social media icons and their individual links*************************


export const SocialMediaImg = [
	{
		id: 1,
		image: require("./images/fb.png"),
		Link: "https://www.facebook.com/",
	},
	{
		id: 2,
		image: require("./images/twt.png"),
		Link: "https://twitter.com/?lang=en-in",
	},
	{
		id: 3,
		image: require("./images/wApp.png"),
		Link: "https://web.whatsapp.com/",
	},
	{
		id: 4,
		image: require("./images/LIn.png"),
		Link: "https://www.linkedin.com/login",
	},
	{
		id: 5,
		image: require("./images/Email.png"),
		Link: "https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1324893943%3A1695045157253991&theme=glif",
	},
	{
		id: 6,
		image: require("./images/Github.png"),
		Link: "https://github.com/idharmendrarock/Resume_Builder_Project",
	},
];
