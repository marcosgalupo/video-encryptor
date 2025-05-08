import { stdout } from 'process';
import { exec } from 'child_process';
import  os from 'os';
import  path from 'path';

const BASE_TOOL_PATH = path.join(os.homedir(), 'bento4', 'bin');

export default class CommandLine {

    static outputCallback(err, stdout, stderr){
        console.log(stdout)
    }

    static fragmentVideo(videoPath){
        console.log("Teste");
        const process = exec('ls', this.outputCallback)
    }
}
