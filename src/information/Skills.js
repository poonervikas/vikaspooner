import {FaCode,FaUikit,FaTools} from 'react-icons/fa';

export const frontend_icon = FaUikit;
export const backend_icon = FaCode;
export const tools_icon = FaTools;


export const SKILLS=[
    {
        icon:frontend_icon,
        heading:"Frontend",
        text:"I like to code things from scratch, and enjoy bringing ideas to life in the browser.",
        preskillsText:"Things i have worked with:",
        skills:["HTML","CSS","Javascript","ReactJs","Angular","Bootstrap","Less"]
    },
    {
        icon:backend_icon,
        heading:"Backend",
        text:"I love creating API's that can be exposed and utilized well in the frontend.",
        preskillsText:"Things i have worked with:",
        skills:["Java","SpringBoot","NodeJs","Express","MySql","MongoDB"]
    },
    {
        icon:tools_icon,
        heading:"Tools",
        text:"I use different tools day in and day out to pace up the process of development ",
        preskillsText:"Tools i have worked with:",
        skills:["Git","Wavemaker(LCD)","Bitbucket","Postman","Grunt","JIRA","BitBucket"]
    }
]