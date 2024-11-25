const axios = require("axios");

async function triggerBuild(script) {
  try {
    const response = await axios.post("http://<other_machine_WIFI>/run-build", {
      script,
    });
    console.log("Build Output:", response.data.stdout);
  } catch (error) {
    console.error("Error triggering build:", error.message);
  }
}

triggerBuild(
  "cd /Users/mouli/Documents/GitHub/nconnect_staff && flutter build ios"
);
