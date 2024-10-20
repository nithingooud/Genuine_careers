module.exports = {
    apps: [{
        name: "app",
        script: "app.js",
        instances: -1,
        exec_mode: "cluster",
        node_args: "--max-old-space-size=4096 -r dotenv/config"
    }]
}
