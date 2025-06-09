

import todo1 from '../assets/Project_Photos/todo1.png';
import todo2 from '../assets/Project_Photos/todo2.png';
import todo3 from '../assets/Project_Photos/todo3.png';
import todo4 from '../assets/Project_Photos/todo4.png';
import portfolio1 from '../assets/Project_Photos/portfolio1.png';
import portfolio2 from '../assets/Project_Photos/portfolio2.png';
import portfolio3 from '../assets/Project_Photos/portfolio3.png';
import portfolio4 from '../assets/Project_Photos/portfolio4.png';
import chatapp1 from '../assets/Project_Photos/chatapp1.png';
import chatapp2 from '../assets/Project_Photos/chatapp2.png';
import chatapp3 from '../assets/Project_Photos/chatapp3.png';
import chatapp4 from '../assets/Project_Photos/chatapp4.png';


const todoImages = [
    { url: todo1 },
    { url: todo2 },
    { url: todo3 },
    { url: todo4 },
];

const portfolioImages = [
    { url: portfolio1 },
    { url: portfolio2 },
    { url: portfolio3 },
    { url: portfolio4 },
];

const chatAppImages = [
    { url: chatapp1 },
    { url: chatapp2 },
    { url: chatapp3 },
    { url: chatapp4 },
];


export const todoProject = {
    heading:"Todo Management Application",
    subheading:"Efficiently Manage your DaytoDay Task with todo management list stay consistant and get successful",
    description:"A to-do list application, often abbreviated as todo app, is a software program designed to help users manage their tasks and stay organized. It provides a way to create, track, and complete tasks, improving productivity and reducing the mental burden of remembering everything that needs to be done.",
    subdescription:"This Todo Management Application is a versatile tools that can benefit anyone looking to improve their organization, productivity, and overall task management.",
    link:"https://todomanagementapplication-frontend.onrender.com",
    images:todoImages
}

export const portfolioProject = {
    heading:"Portfolio Project",
    subheading:"A static single page website for a professional that makes them standup from the crowed",
    description:"This React portfolio website is an user-friendly online platform built using the React JavaScript library specifically to showcase a developer's skills, experience, and projects. It serves as a digital resume and an effective tool to attract potential employers or clients.",
    subdescription:"Best portfolio websites provide a powerful and versatile platform for developers to showcase their skills and stand out in the competitive job market.",
    link:"https://aaditya-portfolio.onrender.com/",
    images:portfolioImages
};

export const ChatAppProject = {
    heading: "Real-Time Chat Application",
    subheading: "A responsive real-time chat web app enabling instant communication using Socket.IO",
    description: "This chat application is a single-page real-time communication platform built with Node.js, Express.js, and Socket.IO. It allows users to join chat rooms and exchange messages instantly without refreshing the page. The frontend is developed using HTML, CSS, and JavaScript, ensuring a smooth user experience across devices.",
    subdescription: "The project showcases real-time web socket communication, efficient event handling, and responsive UI design. It serves as a strong demonstration of full-stack development skills with live message updates and user interaction.",
    link: "https://chatapp-sbxq.onrender.com",
    images: chatAppImages
};

