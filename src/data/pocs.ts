export interface POC {
    id: number;
    title: string;
    description: string;
    liveUrl: string;
    icon: string;
    gradient: string;
}

export const pocs: POC[] = [
    {
        id: 1,
        title: 'Topo3D Explorer',
        description: 'Interactive 3D topographic map visualization with real-time elevation data rendering and smooth terrain exploration.',
        liveUrl: 'https://topo3d.itouahda.com/',
        icon: '🏔️',
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        id: 2,
        title: 'Skill Matcher',
        description: 'Gemini AI-powered platform featuring skill-to-job matching and project alignment tools to help students land their ideal internships.',
        liveUrl: 'https://skills.itouahda.com/',
        icon: '🎯',
        gradient: 'from-cyan-500 to-blue-600'
    }
];
