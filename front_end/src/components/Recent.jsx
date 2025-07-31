import React from 'react'
import {Accordion, AccordionItem} from "@heroui/react";
export default function Recent() {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <div className='p-[40px] w-[1720px] bg-gradient-to-r from-[#111111] to-[#1A1A1A] border-[#222222] border-1 rounded-[24px]'>
                <div className='flex pb-[40px]  items-center justify-between'>
                    <p className='text-[#cccccc] font-medium text-[20px]'>Recent Activity</p>
                    <p className='text-[#6366F1] font-medium text-[18px]'>View all</p>
                </div>
                <div> 
                    <Accordion
                        itemClasses={{    
                            base: "border-b border-[#333] py-2",
                            indicator: `
                              ml-auto text-[#666666]
                              transition-transform duration-300 
                              data-[open=true]:rotate-[-90deg]
                            `,
                            title: "text-white mb-[2.5px]",
                            subtitle: "text-[#666666] mr-[5px]",
                            content: "text-white mt-[15px]",
                        }}
                    >
                        <AccordionItem
                            key="1"
                            aria-label="Accordion 1"
                            subtitle="Press to expand"
                            title="Spotify Premium"
                        >
                        {defaultContent}
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Accordion 1"
                            subtitle="Press to expand"
                            title="Spotify Premium"
                        >
                        {defaultContent}
                        </AccordionItem>                    
                    </Accordion>
                </div>
            </div>
  )
}
