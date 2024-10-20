module.exports = {
    apps: [{
        name: "frontend-app",
        script: "npm",
        args: "run build && npm start",
        cwd: "./client",
        env: {
            NODE_ENV: "production",
        }
    }]
}
