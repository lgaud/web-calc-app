import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'

import prisma from '../lib/prisma'

/**
 * User methods.
 */

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = await prisma.user.create( {data: {
    id: uuidv4(),
    username: username,
    password: hash,
    salt: salt
  }})

  return { username: user.username, createdAt: user.createdAt }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  return prisma.user.findUnique({where: {username : username}, select: {username: true, history : true}})
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.password === inputHash
  return passwordsMatch
}
