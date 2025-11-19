module.exports = {
    apps: [{
        name: "frontend-app",
        script: "npm",
        args: "run serve",
        env: {
            NODE_ENV: "production",
        }
    }]
}
