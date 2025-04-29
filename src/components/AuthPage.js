import React, { useState, useEffect } from 'react';
import { callApi, mainUrl } from '../util/api/requestUtils';
import { useTranslation } from 'react-i18next';
import "./styles.css";

const AuthPage = ({ onLoginSuccess }) => {
    const { t } = useTranslation();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordValidations, setPasswordValidations] = useState({
        hasMinLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });
    const [passwordStrength, setPasswordStrength] = useState(0);

    const checkPasswordStrength = (pass) => {
        const validations = {
            hasMinLength: pass.length >= 8,
            hasUpperCase: /[A-Z]/.test(pass),
            hasLowerCase: /[a-z]/.test(pass),
            hasNumber: /\d/.test(pass),
            hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
        };

        const strength = Object.values(validations).filter(Boolean).length;
        return { validations, strength };
    };

    useEffect(() => {
        if (!isLogin) {
            const { validations, strength } = checkPasswordStrength(password);
            setPasswordValidations(validations);
            setPasswordStrength(strength);
        }
    }, [password, isLogin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (!isLogin) {
                if (password !== confirmPassword) {
                    setError(t('auth.passwords_mismatch'));
                    return;
                }
                if (passwordStrength < 3) {
                    setError(t('auth.weak_password'));
                    return;
                }
            }

            const endpoint = isLogin ? '/login' : '/register';
            const url = `${mainUrl}/api/auth${endpoint}`;
            const response = await callApi(url, 'POST', { username, password });

            if (response.status === '0') {
                localStorage.setItem('token', response.accessToken);
                onLoginSuccess();
            } else {
                setError(response.message || t('auth.error'));
            }
        } catch (err) {
            setError(err.response.data.message || t('auth.error'));
        } finally {
            setLoading(false);
        }
    };

    const getStrengthColor = () => {
        const colors = ['#ff0000', '#ff4000', '#ff8000', '#ffbf00', '#00ff00'];
        return colors[passwordStrength] || '#ff0000';
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? t('auth.login') : t('auth.register')}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>{t('auth.username')}</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>{t('auth.password')}</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {!isLogin && (
                        <>
                            <div className="password-strength-bar">
                                <div
                                    className="strength-indicator"
                                    style={{
                                        width: `${(passwordStrength / 5) * 100}%`,
                                        backgroundColor: getStrengthColor()
                                    }}
                                ></div>
                            </div>

                            <div className="password-rules">
                                <div className={`rule-item ${passwordValidations.hasMinLength ? 'valid' : ''}`}>
                                    {t('auth.rules.min_length')}
                                </div>
                                <div className={`rule-item ${passwordValidations.hasUpperCase ? 'valid' : ''}`}>
                                    {t('auth.rules.uppercase')}
                                </div>
                                <div className={`rule-item ${passwordValidations.hasLowerCase ? 'valid' : ''}`}>
                                    {t('auth.rules.lowercase')}
                                </div>
                                <div className={`rule-item ${passwordValidations.hasNumber ? 'valid' : ''}`}>
                                    {t('auth.rules.number')}
                                </div>
                                <div className={`rule-item ${passwordValidations.hasSpecialChar ? 'valid' : ''}`}>
                                    {t('auth.rules.special_char')}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {!isLogin && (
                    <div className="form-group">
                        <label>{t('auth.confirm_password')}</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}

                {error && <div className="error-message">{error}</div>}

                <button type="submit" disabled={loading}>
                    {loading ? t('auth.loading') : isLogin ? t('auth.login') : t('auth.register')}
                </button>
            </form>

            <p>
                {isLogin ? t('auth.no_account') : t('auth.have_account')}{' '}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="switch-mode"
                >
                    {isLogin ? t('auth.register_here') : t('auth.login_here')}
                </button>
            </p>
        </div>
    );
};

export default AuthPage;