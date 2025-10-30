export function hey(message: string): string {
  if (typeof message !== 'string') {
    throw new Error('Invalid input')
  }

  if (isSilence(message)) {
    return 'Fine. Be that way!'
  }

  if(isYelling(message) && isQuestion(message)) {
    return 'Calm down, I know what I\'m doing!'
  }

  if (isYelling(message)) {
    return 'Whoa, chill out!'
  }

  if (isQuestion(message)) {
    return 'Sure.'
  }

  return 'Whatever.'
}

function isQuestion(message: string): boolean {
  return message.trim().endsWith('?')
}

function isYelling(message: string): boolean {
  return message.toUpperCase() === message && /[A-Z]/.test(message) // Ensure there is at least one letter
}

function isSilence(message: string): boolean {
  return message.trim() === ''
}
