'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is GDG (Google Developer Groups)?',
            answer: 'GDG is a community of developers passionate about technology, learning, and building projects using Google technologies and beyond.',
        },
        {
            id: 'item-2',
            question: 'What is the purpose of GDG DCE?',
            answer: 'Our GDG chapter aims to create a space where students can learn, collaborate, and innovate through workshops, hackathons, study jams, and tech talks.',
        },
        {
            id: 'item-3',
            question: 'Is GDG officially affiliated with Google?',
            answer: 'Yes, GDG chapters are recognized by Google Developers, though they are independently organized by local communities.',
        },
        {
            id: 'item-4',
            question: 'How can I participate in GDG events?',
            answer: "You can check our upcoming events section or follow us on social media for event updates and registration links.",
        },
        {
            id: 'item-5',
            question: 'How can I stay updated about upcoming events?',
            answer: 'Follow our official handles on Instagram, LinkedIn, WhatsApp, and Discord links are provided on the website.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our Community.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
