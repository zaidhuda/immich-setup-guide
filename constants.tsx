import React from 'react';
import { SlideStep, SlideType } from './types';
import { Shield, Zap, Lock, Image, Smartphone, Globe, Terminal, Server } from 'lucide-react';

export const SLIDES: SlideStep[] = [
  {
    id: 'intro',
    title: 'Immich Setup Guide',
    type: SlideType.INTRO,
    content: (
      <div className="space-y-6">
        <p className="text-2xl text-gray-200 font-light leading-relaxed">
          The comprehensive guide to self-hosting your photos on your MacBook Pro, securely exposed to the world.
        </p>
        <div className="flex flex-col gap-4">
            <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm flex items-start gap-4">
                <div className="p-2 bg-immich/20 rounded-lg text-immich-light mt-1"><Server size={20} /></div>
                <div>
                  <h3 className="font-bold text-white text-lg">Immich</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">A high-performance, self-hosted photo and video management solution.</p>
                </div>
            </div>
            <div className="bg-gray-800/40 p-4 rounded-xl border border-gray-700/50 backdrop-blur-sm flex items-start gap-4">
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400 mt-1"><Globe size={20} /></div>
                <div>
                  <h3 className="font-bold text-white text-lg">Cloudflare Tunnel</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">Secure internet exposure without opening router ports.</p>
                </div>
            </div>
        </div>
      </div>
    ),
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'why-immich',
    title: 'Why Immich?',
    type: SlideType.INSTRUCTION,
    content: (
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-immich/50 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-immich/20 rounded-lg text-immich-light group-hover:scale-110 transition-transform"><Image size={20} /></div>
                  <h3 className="font-bold text-white">Google Photos Alternative</h3>
              </div>
              <p className="text-sm text-gray-400">A familiar, beautiful user interface with timeline view, map view, and memories.</p>
          </div>
          <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-immich/50 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition-transform"><Zap size={20} /></div>
                  <h3 className="font-bold text-white">Smart Search</h3>
              </div>
              <p className="text-sm text-gray-400">Powerful facial recognition and object detection so you can find "Dog on beach" instantly.</p>
          </div>
          <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-immich/50 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-green-500/20 rounded-lg text-green-400 group-hover:scale-110 transition-transform"><Smartphone size={20} /></div>
                  <h3 className="font-bold text-white">Mobile Sync</h3>
              </div>
              <p className="text-sm text-gray-400">Native iOS and Android apps backed up your photos in the background automatically.</p>
          </div>
           <div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-immich/50 transition-colors group">
              <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-red-500/20 rounded-lg text-red-400 group-hover:scale-110 transition-transform"><Lock size={20} /></div>
                  <h3 className="font-bold text-white">Total Privacy</h3>
              </div>
              <p className="text-sm text-gray-400">Your data stays on your MacBook. No tracking, no ads, no monthly subscription fees.</p>
          </div>
       </div>
    )
  },
  {
    id: 'why-cloudflare',
    title: 'Why Cloudflare Tunnel?',
    type: SlideType.INSTRUCTION,
    content: (
       <div className="space-y-6">
          <p className="text-gray-300">
            Traditionally, exposing a server involved "Port Forwarding" on your router, which can be risky. We are using <strong>Cloudflare Tunnel</strong> instead.
          </p>
          <div className="space-y-4">
             <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="mt-1 bg-orange-500/10 p-2 rounded-full"><Shield className="w-5 h-5 text-orange-500" /></div>
                <div>
                   <h3 className="font-semibold text-white">Zero Trust Security</h3>
                   <p className="text-sm text-gray-400">Your home firewall stays completely closed. No open ports for hackers to scan.</p>
                </div>
             </div>
             <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-full"><Globe className="w-5 h-5 text-blue-400" /></div>
                <div>
                   <h3 className="font-semibold text-white">Public Domain & SSL</h3>
                   <p className="text-sm text-gray-400">You get a secure HTTPS link (e.g., <code>https://photos.mysite.com</code>) automatically handled by Cloudflare.</p>
                </div>
             </div>
             <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                <div className="mt-1 bg-green-500/10 p-2 rounded-full"><Zap className="w-5 h-5 text-green-400" /></div>
                <div>
                   <h3 className="font-semibold text-white">Works Everywhere</h3>
                   <p className="text-sm text-gray-400">Works even behind complicated ISP setups (CGNAT) like Starlink or 5G mobile networks.</p>
                </div>
             </div>
          </div>
       </div>
    )
  },
  {
    id: 'prereqs',
    title: 'The Essentials',
    type: SlideType.INSTRUCTION,
    content: (
      <div className="space-y-6">
        <p className="text-gray-300 text-lg">Before we start the setup, ensure your Mac is ready.</p>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
             <div>
                <h3 className="font-semibold text-white">Docker Desktop</h3>
                <p className="text-sm text-gray-400 mt-1">Must be installed and running. This runs the Immich database and server.</p>
             </div>
          </div>
           <div className="flex items-start space-x-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
             <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2.5 flex-shrink-0"></div>
             <div>
                <h3 className="font-semibold text-white">Cloudflare Account</h3>
                <p className="text-sm text-gray-400 mt-1">You need an active account and a domain name (e.g., <code>mysite.com</code>) added to Cloudflare.</p>
             </div>
          </div>
           <div className="flex items-start space-x-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></div>
             <div>
                <h3 className="font-semibold text-white">Terminal Access</h3>
                <p className="text-sm text-gray-400 mt-1">We will use the macOS Terminal. You can just copy/paste the commands provided.</p>
             </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'setup-dir',
    title: '1. Create Workspace',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Open your Terminal. Let's create a dedicated directory for your Immich installation.</p>,
    code: `mkdir -p ~/immich-app/immich-data
cd ~/immich-app`,
    note: "This keeps everything organized in your home folder."
  },
  {
    id: 'download-files',
    title: '2. Download Configs',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Download the official configuration files needed to tell Docker how to run Immich.</p>,
    code: `curl -L https://github.com/immich-app/immich/releases/latest/download/docker-compose.yml -o docker-compose.yml

curl -L https://github.com/immich-app/immich/releases/latest/download/example.env -o .env`,
  },
  {
    id: 'env-config',
    title: '3. Configure Secrets',
    type: SlideType.INSTRUCTION,
    content: (
        <div className="space-y-6">
            <p className="text-gray-300">Open the <code>.env</code> file in a text editor (like TextEdit or VS Code).</p>
            <div className="bg-gray-950 p-6 rounded-lg font-mono text-sm border border-gray-800 shadow-inner">
                <div className="text-gray-500 mb-4"># .env file configuration</div>
                <div className="space-y-4">
                    <div className="flex flex-col border-l-2 border-blue-500 pl-4">
                        <span className="text-blue-300">UPLOAD_LOCATION=./immich-data</span>
                        <span className="text-gray-500 text-xs mt-1">Change this line. It ensures photos are stored in the folder we just made.</span>
                    </div>
                     <div className="flex flex-col border-l-2 border-purple-500 pl-4">
                        <span className="text-purple-300">DB_PASSWORD=your_secure_password</span>
                        <span className="text-gray-500 text-xs mt-1">Set a strong, unique password for the database.</span>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-sm">
                <span className="text-immich-light font-semibold">Tip:</span> Save the file after making these changes.
            </p>
        </div>
    )
  },
  {
    id: 'launch',
    title: '4. Start Server',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Start the application. Docker will download the necessary software components (approx 2GB).</p>,
    code: `docker compose up -d`,
    note: "First run takes 5-10 mins. Use 'docker compose logs -f' to watch progress if you're curious."
  },
  {
    id: 'cloudflared-install',
    title: '5. Install Tunnel',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Now let's set up the internet access. We'll install the Cloudflare Tunnel daemon via Homebrew.</p>,
    code: `brew install cloudflared`,
    note: "If you don't have Homebrew, install it first from brew.sh, or download cloudflared manually."
  },
  {
    id: 'tunnel-auth',
    title: '6. Authenticate',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Login to Cloudflare to authorize your MacBook.</p>,
    code: `cloudflared tunnel login`,
    note: "A browser window will open. Select the domain you want to use."
  },
  {
    id: 'tunnel-create',
    title: '7. Create Tunnel',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Create a named tunnel identity. We'll call it <code>immich-mac</code>.</p>,
    code: `cloudflared tunnel create immich-mac`,
    note: "IMPORTANT: Copy the UUID (e.g., 3429384-...) from the output!"
  },
  {
    id: 'tunnel-config',
    title: '8. Tunnel Config',
    type: SlideType.INSTRUCTION,
    content: (
        <div className="space-y-4">
            <p className="text-gray-300">Create a configuration file at <code>~/.cloudflared/config.yml</code>.</p>
             <div className="bg-gray-950 p-4 rounded-lg border border-gray-800 shadow-2xl relative group">
                <div className="absolute top-2 right-2 text-xs text-gray-500">config.yml</div>
                <pre className="text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto whitespace-pre p-2">
{`tunnel: [YOUR-UUID-HERE]
credentials-file: /Users/[YOUR-USER]/.cloudflared/[YOUR-UUID-HERE].json

ingress:
  - hostname: photos.yourdomain.com
    service: http://localhost:2283
  - service: http_status:404`}
                </pre>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-900/50 p-3 rounded text-sm text-yellow-200">
                ⚠ Replace <code>[YOUR-UUID-HERE]</code>, <code>[YOUR-USER]</code>, and <code>photos.yourdomain.com</code>.
            </div>
        </div>
    )
  },
  {
    id: 'tunnel-route',
    title: '9. Route DNS',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Tell Cloudflare to send traffic for your chosen subdomain (e.g. photos.mysite.com) to this specific tunnel.</p>,
    code: `cloudflared tunnel route dns immich-mac photos.yourdomain.com`,
  },
  {
    id: 'tunnel-run',
    title: '10. Start Tunnel',
    type: SlideType.CODE,
    content: <p className="text-gray-300">Run the tunnel using the configuration file we just created.</p>,
    code: `cloudflared tunnel run immich-mac`,
    note: "This runs it in the foreground. Close terminal to stop. Search 'cloudflared service install' to run in background."
  },
  {
    id: 'success',
    title: 'You are Online!',
    type: SlideType.SUCCESS,
    content: (
      <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in py-6">
        <div className="relative group">
             <div className="absolute inset-0 bg-immich blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-1000"></div>
             <div className="w-24 h-24 bg-gradient-to-tr from-immich to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative z-10 border border-white/10">
                <Globe className="w-10 h-10 text-white" />
             </div>
        </div>
        
        <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Setup Complete</h2>
            <p className="text-gray-400 max-w-md mx-auto">Your Immich instance is running on your Mac and securely accessible worldwide.</p>
        </div>

        <div className="w-full max-w-md bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 backdrop-blur-md">
            <div className="flex justify-between items-center mb-4 border-b border-gray-700/50 pb-2">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Next Steps</span>
            </div>
            <ul className="space-y-3">
                <li className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-immich-light rounded-full mr-3 shadow-[0_0_8px_rgba(174,184,255,0.8)]"></span>
                    Go to your URL (photos.domain.com)
                </li>
                <li className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-immich-light rounded-full mr-3 shadow-[0_0_8px_rgba(174,184,255,0.8)]"></span>
                    Create Admin Account
                </li>
                 <li className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-immich-light rounded-full mr-3 shadow-[0_0_8px_rgba(174,184,255,0.8)]"></span>
                    Download Immich Mobile App
                </li>
            </ul>
        </div>
      </div>
    )
  }
];
