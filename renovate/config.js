module.exports = {
    platform: "github",

    // Liste des repos à scanner
    repositories: [
        "shaolin182-transactions/transactions-java",
        "shaolin182-transactions/transactions-orchestrator"
    ],

    baseBranchPatterns: ["main"],

    // Configuration de base recommandée
    extends: ["config:best-practices"],

    timezone: "Europe/Paris",

    // Désactive l'onboarding PR si tu veux aller direct en prod
    onboarding: false,

    // Ne rend pas obligatoire la conf Renovate par repo
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

            // Automerge uniquement les patch (safe)
            matchUpdateTypes: ["patch"],
            labels: ["dependencies", "patch"]
        },
        {
            matchManagers: ["maven"],
            matchUpdateTypes: ["minor"],
            labels: ["dependencies", "minor"]
        },
        {
            matchManagers: ["maven"],
            matchUpdateTypes: ["major"],
            labels: ["dependencies", "major"],
            dependencyDashboardApproval: true
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
    // Pas plus de 5 PRs pour le même repo
    prConcurrentLimit: 5,
    // Pas plus de PR créées par heure
    prHourlyLimit: 2,

    // Ignore certains artefacts si besoin
    ignoreDeps: [
        // "org.slf4j:slf4j-api"
    ]
};
