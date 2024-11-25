# Wroker Script

### Working

- To make this script work, make sure you are connected to the same WIFI related to the machine you want the script to run on.
- Relace the IP of that machine with `other_machine_WIFI` in `worker.js` file.
- Move the `other_machine_script.js` file to the other machine and keep it running when you want the script to run.
- In the machine(for which the IP is mentioned in the code), verify if flutter setup is complete.
- Run rhe worker.js file and the build should get generated in the child/other machine.

Note: The entire setup and running is done through npm with node version v20.9.0
