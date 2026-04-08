import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { ReactElement } from 'react';

export default function Footer(): ReactElement {
  const { language, t } = useLanguage();
  const isKo = language === 'ko';

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-study">Research</span>
              <span className="brand-master"> Master</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <p className="footer-description" style={{ marginTop: 8, fontSize: 13 }}>{t('footer.descriptionDetail')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/research-design">{isKo ? '연구설계' : 'Research Design'}</Link></li>
              <li><Link to="/sampling">{isKo ? '표본추출' : 'Sampling'}</Link></li>
              <li><Link to="/measurement">{isKo ? '측정과 척도' : 'Measurement'}</Link></li>
              <li><Link to="/survey">{isKo ? '설문조사법' : 'Survey'}</Link></li>
              <li><Link to="/experiment">{isKo ? '실험연구' : 'Experiment'}</Link></li>
              <li><Link to="/qualitative">{isKo ? '질적연구' : 'Qualitative'}</Link></li>
              <li><Link to="/statistics">{isKo ? '통계분석' : 'Statistics'}</Link></li>
              <li><Link to="/ethics">{isKo ? '연구윤리' : 'Ethics'}</Link></li>
              <li><Link to="/quantitative-methods">{isKo ? '양적연구방법' : 'Quantitative'}</Link></li>
              <li><Link to="/qualitative-methods">{isKo ? '질적연구방법' : 'Qual Methods'}</Link></li>
              <li><Link to="/ahp">{isKo ? 'AHP방법론' : 'AHP'}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isKo ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>{isKo ? '카카오톡' : 'KakaoTalk'}: aebon</p>
            <p className="business-hours">{isKo ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://chatgpt.dreamitbiz.com">ChatGPT Master</option>
                <option value="https://claude.dreamitbiz.com">Claude Master</option>
                <option value="https://study.dreamitbiz.com">Study Master</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {isKo ? '대표이사' : 'CEO'}: {isKo ? '이애본' : 'Aebon Lee'}
          </p>
        </div>
      </div>
    </footer>
  );
}
