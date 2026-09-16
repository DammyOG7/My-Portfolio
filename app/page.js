export default function Home() {
  const projects = [
    {
      name: 'DoDo',
      description: 'Campus marketplace app for FUNAAB — live product with agent verification and payment infrastructure.',
      status: 'Live',
      link: 'https://dodo-funaab.vercel.app',

    },
    {
      name: 'Kontribute',
      description: 'Gen Z-focused social micro-crowdfunding app. "Ask for it. Get it." Built with Paystack integration.',
      status: 'Live',
      link: 'https://kontribute-tau.vercel.app',

    },
    {
      name: 'Cast',
      description: 'Cantina-style AI character video app.',
      status: 'In progress',
      link: '#',
    },
  ]

  return (
    <main className="max-w-2xl mx-auto px-5 py-16 text-white">
      <section className="mb-16">
        <p className="text-purple-400 font-semibold mb-2">Hey, I'm</p>
        <h1 className="text-4xl font-extrabold mb-4">David</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Self-taught developer building apps for Nigerian and African markets — entirely from my phone. 
          I build products that solve real problems, from campus marketplaces to fintech tools.
        </p>
      </section>

      <section>
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-6">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="block p-5 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500 transition"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    project.status === 'Live'
                      ? 'bg-green-900 text-green-400'
                      : 'bg-yellow-900 text-yellow-400'
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          Built entirely from an iPhone. No laptop, no excuses.
        </p>
      </section>
    </main>
  )
}
