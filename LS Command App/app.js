#!/usr/bin/env node
import fs from 'fs';
import {lstat} from 'fs/promises';
import chalk from 'chalk'
import path from 'path';

//switched to esm because chalk is not available to be required in any longer as commonjs

// const fs = require('fs');
// const {lstat} = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {

    if(err) {
        throw new Error(err);
    }

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats){
        let index = allStats.indexOf(stats);

        if (stats.isFile()){
            console.log(chalk.greenBright(filenames[index]));
        }else{

        console.log(chalk.magentaBright(filenames[index]));
    }
}

    
    
    
    // for (let filename of filenames){
    //     try{
    //     const stats = await lstat(filename);
    //     console.log(filename, stats.isFile());
    //     } catch (err){
    //         console.log(err);
    //     }
    



    // const allStats = Array(filenames.length).fill(null);

    // for (let filename of filenames) {
    //     const index = filenames.indexOf(filename);
    //     fs.lstat(filename, (err, stats) => {
    //         if (err) {
    //             throw new Error(err);
    //         }

    //         allStats[index] = stats;

    //         const ready = allStats.every((stats) => {
    //             return stats
    //         });

    //     if(ready) {
    //         allStats.forEach((stats, index) => {

    //             console.log(filenames[index], stats.isFile());

    //         });
    //     }

    //     });
    // }

    
});

