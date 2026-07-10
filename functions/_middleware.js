const DEFAULT_REALM = 'Portfolio'

function unauthorized(realm) {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${realm}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    },
  })
}

function getCredentials(request) {
  const authorization = request.headers.get('Authorization')

  if (!authorization?.startsWith('Basic ')) {
    return null
  }

  try {
    const decoded = atob(authorization.slice('Basic '.length))
    const separatorIndex = decoded.indexOf(':')

    if (separatorIndex === -1) {
      return null
    }

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    }
  } catch {
    return null
  }
}

function constantTimeEqual(left, right) {
  const encoder = new TextEncoder()
  const leftBytes = encoder.encode(left)
  const rightBytes = encoder.encode(right)
  const length = Math.max(leftBytes.length, rightBytes.length)
  let result = leftBytes.length ^ rightBytes.length

  for (let index = 0; index < length; index += 1) {
    result |= (leftBytes[index] ?? 0) ^ (rightBytes[index] ?? 0)
  }

  return result === 0
}

export async function onRequest(context) {
  const { request, env } = context
  const expectedUsername = env.BASIC_AUTH_USERNAME
  const expectedPassword = env.BASIC_AUTH_PASSWORD
  const realm = env.BASIC_AUTH_REALM || DEFAULT_REALM

  if (!expectedUsername || !expectedPassword) {
    return new Response('Basic auth is not configured', {
      status: 500,
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  }

  const credentials = getCredentials(request)

  if (
    credentials &&
    constantTimeEqual(credentials.username, expectedUsername) &&
    constantTimeEqual(credentials.password, expectedPassword)
  ) {
    return context.next()
  }

  return unauthorized(realm)
}
