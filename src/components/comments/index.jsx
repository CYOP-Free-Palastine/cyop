import CommentCard from '@components/comment-card'
import React, { useState } from 'react'

export default function Comments() {
    const [show, setShow] = useState(false)

    return (
        <section className={`container py-20 relative ${show === true ? "" : "h-[50vh] overflow-hidden"}`}>
            <div className='w-full grid grid-flow-row grid-cols-3 gap-8'>
                <ul className='flex flex-col gap-8'>
                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of SpaceX, Twitter"} message={`Today I was revisiting "Refactoring UI", a visual design book for engineers. Started writing down my highlights... but then I realized I was trying to save most of the book. At least that's when you know it's good`}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Tesla,  Twitter"} message={`We just bought this at work and I absolutely love it. You guys did a great job. I do a lot of UI work but did it based on "feel" but couldn't explain why... your book does exactly that. Great work!`}/>
                    </li>

                    <li>
                        <CommentCard avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Tesla, SpaceX, Twitter"} message={"Your Project is very usefull. I didn't have a portfolio until I saw this project."} />
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Ben Nadel"} about={"Owner of Tesla"} message={"Over the weekend, I read Refactoring UI by @adamwathan and @steveschoger. The content is amazing and the writing is clear, concise, and to-the-point. I need to come up with a strategy that ensures that I weave this book into my ongoing development efforts."}/>
                    </li>
                </ul>
                <ul className='flex flex-col gap-8'>
                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Twitter"} message={"Your Project is very usefull. I didn't have a portfolio until I saw this project."}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Tesla, Twitter"} message={"Why didn't I ever think of the personality of the site I am designing the apps for? Great stuff - Thanks @steveschoger and @adamwathan!Your Project is very usefull. I didn't have a portfolio until I saw this project."}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of SpaceX"} message={"Why didn't I ever think of the personality of the site I am designing the apps for? Great stuff - Thanks @steveschoger and @adamwathan!"}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Tesla, SpaceX"} message={"I can definitely see why this book is called “Refactoring UI” … tons of UI smells / anti-patterns and how to correct them with great examples for each case. 👍 Congrats @adamwathan and @steveschoger on the launch!"}/>
                    </li>
                </ul>
                <ul className='flex flex-col gap-8'>
                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Telegram, SpaceX, Twitter"} message={"Well I just read Refactoring UI by @adamwathan and @steveschoger in one sitting. So it’s safe to say it’s a great book 🔥"}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Google"} message={"Only read the first chapter of @steveschoger and @adamwathan’s Refactoring UI book so far and already I’ve had so many “Ah - that makes so much sense!” moments 💡 This stuff is genius"}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Microsoft"} message={"Your Project is very usefull. I didn't have a portfolio until I saw this project."}/>
                    </li>

                    <li>
                        <CommentCard  avatar={"https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg"} name={"Elon Musk"} about={"Owner of Tesla, SpaceX"} message={"I can definitely see why this book is called “Refactoring UI” … tons of UI smells / anti-patterns and how to correct them with great examples for each case. 👍 Congrats @adamwathan and @steveschoger on the launch!"}/>
                    </li>
                </ul>
            </div>
            <button onClick={() => setShow(!show)} className={`bg-secondary_button_bg py-3 text-[0.9rem] font-[500] px-7 rounded-xl position absolute ${show === true ? "bottom-32" : "bottom-10"} z-[15] left-[50%] translate-x-[-50%]`}>{show === true ? "Okay, I get the point" : "Show more ..."}</button>
            <div className={`absolute ${show == true ? "bottom-20" : "bottom-0"} left-0 w-full h-44 bg-red z-10 bottom-bg`}></div>
        </section>
    )
}