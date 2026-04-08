export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
            Dedicated <strong>.NET Developer</strong> with <strong>3.5+ years</strong> of professional experience building robust, scalable enterprise web applications. 
            I specialize in designing and delivering production-grade solutions across <strong>fintech, healthcare, HCM, and SaaS</strong> domains.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Core Expertise</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>✓ <strong>ASP.NET Core</strong> & ASP.NET MVC Architecture</li>
                <li>✓ RESTful Web APIs & JWT Authentication</li>
                <li>✓ Entity Framework Core & Database Optimization</li>
                <li>✓ Role-Based Access Control (RBAC)</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
                <li>✓ <strong>Backend:</strong> .NET Core, Web API, C#</li>
                <li>✓ <strong>Frontend:</strong> React.js, Angular, HTML5, CSS3</li>
                <li>✓ <strong>Databases:</strong> MS SQL, MySQL, MongoDB</li>
                <li>✓ <strong>DevOps:</strong> IIS, AWS, Git, CI/CD</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            I'm passionate about building secure, high-performance applications with clean code and strong architectural principles. 
            Currently at <strong>Sourceget Pvt Ltd</strong>, developing enterprise solutions with cutting-edge .NET technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
