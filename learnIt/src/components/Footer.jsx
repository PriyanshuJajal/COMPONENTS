import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants/idx'

const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Resources</h3>
                    <ul className='space-y-2 mb-5'>
                        {resourcesLinks.map((link , idx) => (
                            <li key={idx}>
                                <a href={link.href} className='text-neutral-300 hover:text-white transition-transform duration-300 ease-out inline-block hover:scale-105'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='text-md font-semibold mb-4'>Platforms</h3>
                    <ul className='space-y-2 mb-5'>
                        {platformLinks.map((link , idx) => (
                            <li key={idx}>
                                <a href={link.href} className='text-neutral-300 hover:text-white transition-transform duration-300 ease-out inline-block hover:scale-105'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className='text-md font-semibold mb-4'>Community</h3>
                    <ul className='space-y-2 mb-5'>
                        {communityLinks.map((link , idx) => (
                            <li key={idx}>
                                <a href={link.href} className='text-neutral-300 hover:text-white transition-transform duration-300 ease-out inline-block hover:scale-105'>
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </footer>
    )
}

export default Footer
