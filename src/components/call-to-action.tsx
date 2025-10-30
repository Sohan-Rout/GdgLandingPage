import { Button } from '@/components/ui/button'
import Link from 'next/link'
import WhatsappOverlay from './overlay/whatsapp'

export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="bg-neutral-950 mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
                <div className="text-center">
                    <h2 className="text-balance text-neutral-200 text-4xl font-semibold lg:text-5xl">Where Developers Grow Together.</h2>
                    <p className="mt-4 text-neutral-400">Be part of something bigger. Attend Our Next Event</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <WhatsappOverlay />
                        <Button asChild size="lg">
                            <Link href="/">
                                <span>Events</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
