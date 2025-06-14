# WESTFORD ASSESSMENT TASK
<img width="1680" alt="Screenshot 2025-06-14 at 8 05 46 AM" src="https://github.com/user-attachments/assets/65f38db5-debc-49bc-8ed7-b834a1cab34f" />

<br />

## SETUP
1. Execute `npm install` in terminal.
2. Execute `npm run dev` in termainal.

<br />

## INCONSISTENCIES I FOUND
* In the programs modal and in each of the zoom cards, i'm not sure if the hover zoom state meant that the arrow button also gets affected. but in the figma file, each are separated. Following the figma file strictly, I implemented them as separate.
* In the hero text where it says "Higher national diploma international", the words are not properly title cased.
* In the figma prototype, there was a separation of layers between the brochure icon and the arrow inside it. I combined both and exported together as an .svg file.=
* In the "top skills you will learn" section, the heading is not properly title cased.
* In programme overview, there is no period at the very end of the paragraph.
* In the "explore our courses" section, i grouped the pictures together for one export since everything is a separate component.
* Some of the icons are of file type .png and requires animation, I then converted said icons to .svg via AI.

<br />

## WHAT I FOCUSED ON
I first focused on the general aesthetic (color palettes) and the layout of the website. Starting with how I can execute the design using flexboxes and grid layouts. Next was the spacings of different components such as paddings and margins. I focused on the animations as the last part because I'm not really attuned to creating animations. I implemented the animations with the help of AI.

<br />

## CHALLENGES FACED
* Using Tailwind and Vite, I faced a problem with applying the Poppins font. after careful research and reading of documentation, I was able to resolve it.
* I faced difficulties primarily with the layout, because not all of the components have the same margins. Some components stick to the very side, rather than being uniform. Specifically in the admission form component under "talk to our admission team".
* I faced difficulties in the course cards in the related courses section, especially on the hover of the "know more" since it's being overlapped by different components with z indexes. And also that the Tailwind group hover is already taken up by the parent components.
* I faced difficulties in the academic partner cards, where the logo is supposed to be in motion when hovered
* I faced difficulties in the hero component when making it mobile responsive. As a solution, I decided to create three separate views: desktop, tablet, and mobile view.

<br />

## HOW I APPROACHED RESPONSIVENESS
I approached mobile responsiveness using Tailwind's breakpoints. With each breakpoint, I modified the layout by changing the columns of a grid and also adding flexwrap to flexboxes. Most of the components are using flexboxes and grids. But for the hero component, it's three different views since it has a very complex layout.
