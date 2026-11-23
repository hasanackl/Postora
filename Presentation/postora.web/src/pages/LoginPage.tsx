import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { labelClass, inputClass, submitClass } from '../constants/formClasses'
import { useAuth } from '../hooks/useAuth'

function LoginPage() {
  const { t } = useTranslation()
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const success = await login(email, password)

    if (!success) {
      setError(t('auth.loginError'))
      return
    }

    navigate(from, { replace: true })
  }

  return (
    <div className="px-4 py-12">
      <div className="max-w-md mx-auto bg-white border border-line rounded-2xl p-6 sm:p-8">
        <div className="w-12 h-12 rounded-xl bg-mint text-primary grid place-items-center mb-4">
          <FontAwesomeIcon icon={faRightToBracket} />
        </div>
        <h1 className="font-heading text-2xl font-bold">{t('auth.loginTitle')}</h1>
        <p className="text-muted text-sm mt-1 mb-6">{t('auth.loginText')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className={labelClass}>{t('auth.email')}</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>{t('auth.password')}</label>
            <input
              id="password"
              type="password"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </div>

          {error && (
            <p role="alert" className="flex items-center gap-2 text-sm text-accent">
              <FontAwesomeIcon icon={faCircleExclamation} />
              {error}
            </p>
          )}

          <button type="submit" className={submitClass}>
            {t('auth.loginButton')}
          </button>
        </form>

        <div className="mt-6 p-3 rounded-lg bg-mint text-xs text-primary-dark">
          <p className="font-semibold mb-1">{t('auth.demoAccounts')}</p>
          <p>user@postora.com / 123456</p>
          <p>admin@postora.com / 123456</p>
        </div>

        <p className="text-sm text-muted text-center mt-6">
          {t('auth.noAccount')}{' '}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            {t('auth.registerLink')}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage