module.exports = {
    platform: "github",

    // Liste des repos à scanner
    repositories: [
        "shaolin182-transactions/transactions-java",
        "shaolin182-transactions/transactions-orchestrator"
    ],

    baseBranches: ["main"],

    // Configuration de base recommandée
    extends: ["config:best-practices"],

    timezone: "Europe/Paris",

    // Désactive l'onboarding PR si tu veux aller direct en prod
    onboarding: false,

    requireConfig: "optional",

    labels: ["dependencies", "maven"],

    // Activation dashboard
    dependencyDashboard: true,

    // Active les alertes de vulnérabilité
    vulnerabilityAlerts: {
        enabled: true
    },

    // Configuration spécifique Maven
    packageRules: [
        {
            matchManagers: ["maven"],

            // Regroupe toutes les deps Maven dans une PR
            groupName: "maven dependencies",

            // Automerge uniquement les patch (safe)
            matchUpdateTypes: ["patch"],
            automerge: true
        },
        {
            matchManagers: ["maven"],
            matchUpdateTypes: ["minor"],
            groupName: "maven minor updates"
        },
        {
            matchManagers: ["maven"],
            matchUpdateTypes: ["major"],
            groupName: "maven major updates"
        }
    ],

    hostRules: [
        {
            matchHost: "maven.pkg.github.com",
            hostType: "maven",
            username: process.env.GITHUB_USERNAME,
            password: process.env.GH_TOKEN
        }
    ],


    // Limite le bruit
    prConcurrentLimit: 5,
    prHourlyLimit: 2,

    // Ignore certains artefacts si besoin
    ignoreDeps: [
        // "org.slf4j:slf4j-api"
    ]
};
