const coreLead = [
    {
        name: 'Nishant Yadav',
        role: 'Core Lead',
        avatar: './team/nishant.webp',
    },
]

const techLead = [
    {
        name: 'Manas Thakur',
        role: 'Fullstack',
        avatar: './team/manas.webp',
    },
    {
        name: 'Sohan Rout',
        role: 'Frontend & Ui/Ux',
        avatar: './team/sohan.webp',
    },
]

const designLead = [
    {
        name: 'Manav Tuli',
        role: 'Graphics',
        avatar: './team/manav.jpeg',
    },
    {
        name: 'Bhumika Yadav',
        role: 'Public Relations',
        avatar: './team/bhumi.jpg',
    },
]

const outreachLead = [
    {
        name: 'Megha Yadav',
        role: 'Social & Outreach',
        avatar: './team/megha.webp',
    },
    {
        name: 'Ariyan Pal',
        role: 'Social & Outreach',
        avatar: './team/ariyan.webp',
    },
]


export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Our team</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Leadership</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {coreLead.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Engineering</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {techLead.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Designing</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {designLead.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Marketing</h3>
                    <div data-rounded="full" className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {outreachLead.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                    <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
