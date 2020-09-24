#!/usr/bin/env node

const inquirer = require('inquirer')

function calculate () {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'timeSignature',
        message: 'Choose a time signature.',
        choices: ['4/4', '3/4', '2/4']
      },
      {
        name: 'bpm',
        message: 'Enter the BPM.'
      },
      {
        name: 'bars',
        message: 'Enter the number of bars.'
      }
    ])
    .then(answers => {
      const beats = parseInt(answers.timeSignature)
      const length = 60 / answers.bpm * beats * answers.bars
      if (isNaN(length)) {
        console.log('Enter integer values. (Except for a time signature)')
      } else {
        const min = Math.floor(length / 60)
        const sec = Math.ceil(length % 60)
        console.log(`${min} min ${sec} sec`)
      }
    })
}

calculate()
