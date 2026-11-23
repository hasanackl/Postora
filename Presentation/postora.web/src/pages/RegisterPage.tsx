import { useState } from 'react'
import type { SubmitEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { labelClass, inputClass, submitClass } from '../constants/formClasses'
import { useAuth } from '../hooks/useAuth'

function RegisterPage() {
  const { t } = useTranslation()
  const { register } = useAuth()
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (password !== passwordConfirm) {
      setError(t('auth.passwordMismatch'))
      return
    }

    const success = await register(fullName, email, password)

    if (!success) {
      setError(t('auth.emailTaken'))
      return
    }

    navigate('/', { replace: true })
  }

  return (
    <div className="px-4 py-12">
      <div className="max-w-md mx-auto bg-white border border-line rounded-2xl p-6 sm:p-8">
        <div className="w-12 h-12 rounded-xl bg-mint text-primary grid place-items-center mb-4">
          <FontAwesomeIcon icon={faUserPlus} />
        </div>
        <h1 className="font-heading text-2xl font-bold">{t('auth.registerTitle')}</h1>
        <p className="text-muted text-sm mt-1 mb-6">{t('auth.registerText')}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className={labelClass}>{t('auth.fullName')}</label>
            <input
              id="fullName"
              type="text"
              required
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={inputClass}
            />
          </div>

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
              minLength={6}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="passwordConfirm" className={labelClass}>{t('auth.passwordConfirm')}</label>
            <input
              id="passwordConfirm"
              type="password"
              required
              autoComplete="new-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
            {t('auth.registerButton')}
          </button>
        </form>

        <p className="text-sm text-muted text-center mt-6">
          {t('auth.haveAccount')}{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            {t('auth.loginLink')}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage