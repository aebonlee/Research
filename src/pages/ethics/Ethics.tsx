import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ------------------------------------------------------------------ */
/*  Section metadata                                                   */
/* ------------------------------------------------------------------ */

const SECTIONS = [
  { id: 'importance', icon: 'fa-heart', ko: '연구윤리의 중요성', en: 'Importance of Research Ethics' },
  { id: 'irb', icon: 'fa-building-columns', ko: 'IRB와 연구심의', en: 'IRB & Research Review' },
  { id: 'protection', icon: 'fa-user-shield', ko: '연구대상자 보호', en: 'Protecting Research Participants' },
  { id: 'misconduct', icon: 'fa-ban', ko: '연구부정행위', en: 'Research Misconduct' },
  { id: 'conflict', icon: 'fa-handshake-angle', ko: '이해충돌과 저자권', en: 'Conflicts of Interest & Authorship' },
  { id: 'guidelines', icon: 'fa-book-bookmark', ko: '연구윤리 가이드라인', en: 'Research Ethics Guidelines' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* ================================================================== */
/*  Section 1 — Importance of Research Ethics                          */
/* ================================================================== */

function ImportanceSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-heart" />
        {isKo ? ' 연구윤리의 중요성' : ' Importance of Research Ethics'}
      </h2>

      {/* --- Why research ethics matter --- */}
      <h3>{isKo ? '왜 연구윤리가 중요한가?' : 'Why Do Research Ethics Matter?'}</h3>
      <p>
        {isKo
          ? '연구윤리는 과학적 탐구의 신뢰성과 정당성을 보장하는 근본적인 토대입니다. 연구자가 윤리적 원칙을 준수할 때, 과학 지식의 축적은 사회적 신뢰를 얻고, 연구 결과는 정책 결정과 실천에 정당하게 활용될 수 있습니다. 연구윤리는 단순히 규정을 지키는 것이 아니라, 과학자로서의 사회적 책임을 이행하는 것입니다.'
          : 'Research ethics form the fundamental foundation that ensures the credibility and legitimacy of scientific inquiry. When researchers adhere to ethical principles, the accumulation of scientific knowledge gains public trust, and research findings can be legitimately used in policy-making and practice. Research ethics are not merely about following regulations — they are about fulfilling a scientist\'s social responsibility.'}
      </p>
      <p>
        {isKo
          ? '윤리적 연구는 세 가지 핵심 목표를 달성합니다: (1) 과학에 대한 사회적 신뢰 확보, (2) 연구대상자의 권리와 복지 보호, (3) 연구 결과의 타당성과 재현 가능성 보장. 이 세 가지 목표는 서로 밀접하게 연결되어 있으며, 어느 하나라도 훼손되면 전체 연구 생태계에 심각한 영향을 미칩니다.'
          : 'Ethical research achieves three core objectives: (1) securing public trust in science, (2) protecting the rights and welfare of research participants, and (3) ensuring the validity and reproducibility of research results. These three goals are closely interconnected, and compromising any one of them can severely impact the entire research ecosystem.'}
      </p>

      {/* --- Historical cases --- */}
      <h3>{isKo ? '역사적 윤리 위반 사례' : 'Historical Cases of Ethical Violations'}</h3>
      <p>
        {isKo
          ? '연구윤리의 현대적 체계는 과거의 비극적인 사례들로부터 교훈을 얻어 발전해 왔습니다. 다음의 역사적 사건들은 왜 엄격한 윤리적 기준이 필요한지를 생생하게 보여줍니다:'
          : 'The modern system of research ethics has evolved from lessons learned through tragic historical cases. The following events vividly demonstrate why rigorous ethical standards are necessary:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '터스키기 매독 연구 (1932-1972)' : 'Tuskegee Syphilis Study (1932-1972)'}</strong>
          {' — '}
          {isKo
            ? '미국 공중보건국이 앨라배마주 흑인 남성 600명을 대상으로 매독의 자연 경과를 관찰한 연구입니다. 페니실린이 효과적 치료제로 확인된 후에도 40년간 치료를 제공하지 않았으며, 참여자들에게 연구 목적을 정확히 알리지 않았습니다. 이 사건은 미국 연방 규정의 전면 개정과 IRB 제도 도입의 직접적 계기가 되었습니다.'
            : 'The U.S. Public Health Service observed the natural progression of syphilis in 600 Black men in Alabama. Even after penicillin was confirmed as an effective treatment, they withheld treatment for 40 years and failed to properly inform participants of the study\'s purpose. This case directly led to comprehensive reform of U.S. federal regulations and the establishment of the IRB system.'}
        </li>
        <li>
          <strong>{isKo ? '나치 인체실험 (1939-1945)' : 'Nazi Human Experiments (1939-1945)'}</strong>
          {' — '}
          {isKo
            ? '제2차 세계대전 중 나치 의사들은 강제수용소 수감자들을 대상으로 저체온, 고압, 감염병 등에 대한 잔혹한 인체실험을 수행했습니다. 뉘른베르크 전범 재판 이후 1947년 뉘른베르크 강령(Nuremberg Code)이 제정되어, 자발적 동의가 연구의 절대적 전제조건임을 선언했습니다.'
            : 'During World War II, Nazi doctors conducted brutal human experiments on concentration camp prisoners involving hypothermia, high altitude, and infectious diseases. After the Nuremberg Trials, the Nuremberg Code (1947) was established, declaring that voluntary consent is an absolute prerequisite for research.'}
        </li>
        <li>
          <strong>{isKo ? 'Tearoom Trade 연구 (1970)' : 'Tearoom Trade Study (1970)'}</strong>
          {' — '}
          {isKo
            ? 'Laud Humphreys는 공중화장실에서의 남성 간 성행위를 비밀리에 관찰하고, 차량 번호판을 통해 참여자의 신원을 추적하여 가정 방문 면접을 실시했습니다. 이 연구는 사생활 침해와 기만적 연구 방법의 윤리적 문제를 강력히 제기했습니다.'
            : 'Laud Humphreys secretly observed male sexual encounters in public restrooms, tracked participants\' identities through license plates, and conducted home interviews under false pretenses. This study raised serious ethical concerns about privacy violation and deceptive research methods.'}
        </li>
        <li>
          <strong>{isKo ? '밀그램 복종 실험 (1961)' : 'Milgram Obedience Experiment (1961)'}</strong>
          {' — '}
          {isKo
            ? 'Stanley Milgram의 실험에서 참가자들은 다른 사람에게 치명적인 전기 충격을 가하고 있다고 믿도록 속았습니다. 참가자들이 겪은 극심한 심리적 고통은 연구에서의 기만과 심리적 피해에 대한 윤리적 논쟁을 촉발했습니다.'
            : 'In Stanley Milgram\'s experiment, participants were deceived into believing they were administering lethal electric shocks to another person. The extreme psychological distress experienced by participants sparked ethical debates about deception and psychological harm in research.'}
        </li>
      </ul>

      {/* --- Belmont Report --- */}
      <h3>{isKo ? '벨몬트 보고서 (1979)' : 'The Belmont Report (1979)'}</h3>
      <p>
        {isKo
          ? '미국 국가연구법(National Research Act, 1974)에 의해 설립된 국가위원회는 1979년 벨몬트 보고서를 발표했습니다. 이 보고서는 인간 대상 연구의 윤리적 원칙과 지침을 체계화한 기념비적 문서로, 세 가지 핵심 원칙을 제시합니다:'
          : 'The National Commission, established by the National Research Act (1974), published the Belmont Report in 1979. This landmark document systematized ethical principles and guidelines for human subjects research, presenting three core principles:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '인격 존중 (Respect for Persons)' : 'Respect for Persons'}</strong>
          {' — '}
          {isKo
            ? '개인은 자율적 행위자로 대우받아야 하며, 자율 능력이 제한된 사람들은 특별한 보호를 받아야 합니다. 이 원칙은 충분한 정보에 기반한 자발적 동의(informed consent)의 근거가 됩니다.'
            : 'Individuals should be treated as autonomous agents, and persons with diminished autonomy are entitled to special protection. This principle provides the foundation for informed consent.'}
        </li>
        <li>
          <strong>{isKo ? '선행 (Beneficence)' : 'Beneficence'}</strong>
          {' — '}
          {isKo
            ? '연구자는 해를 끼치지 않을 의무가 있으며(do no harm), 가능한 이익을 극대화하고 가능한 해를 최소화해야 합니다. 이 원칙은 체계적인 위험-이익 평가(risk-benefit assessment)를 요구합니다.'
            : 'Researchers have an obligation to do no harm, to maximize possible benefits, and to minimize possible harms. This principle requires systematic risk-benefit assessment.'}
        </li>
        <li>
          <strong>{isKo ? '정의 (Justice)' : 'Justice'}</strong>
          {' — '}
          {isKo
            ? '연구의 이익과 부담은 공정하게 분배되어야 합니다. 특정 집단이 연구의 위험만 부담하고 다른 집단이 이익을 누리는 것은 부정의합니다. 이 원칙은 공정한 대상자 선정 기준의 근거가 됩니다.'
            : 'The benefits and burdens of research must be fairly distributed. It is unjust for one group to bear the risks of research while another group enjoys its benefits. This principle provides the basis for fair subject selection criteria.'}
        </li>
      </ol>

      {/* --- Nuremberg Code & Helsinki --- */}
      <h3>{isKo ? '뉘른베르크 강령과 헬싱키 선언' : 'The Nuremberg Code & Declaration of Helsinki'}</h3>
      <p>
        {isKo
          ? '뉘른베르크 강령(1947)은 연구윤리의 최초의 국제적 문서로, 자발적 동의의 절대적 필수성, 불필요한 고통과 상해의 회피, 그리고 연구대상자가 언제든 실험을 중단할 수 있는 권리 등 10가지 원칙을 명시했습니다. 이후 세계의사회(WMA)는 1964년 헬싱키 선언을 채택하여 의학 연구의 윤리적 원칙을 더욱 구체화했으며, 이 선언은 현재까지 여러 차례 개정되며 국제적 연구윤리의 핵심 기준으로 기능하고 있습니다.'
          : 'The Nuremberg Code (1947) was the first international document on research ethics, establishing 10 principles including the absolute necessity of voluntary consent, avoidance of unnecessary suffering, and the right of subjects to end the experiment at any time. Subsequently, the World Medical Association (WMA) adopted the Declaration of Helsinki in 1964, further specifying ethical principles for medical research. This declaration has been revised multiple times and continues to serve as a core international standard for research ethics.'}
      </p>

      {/* --- Consequences --- */}
      <h3>{isKo ? '윤리 위반의 결과' : 'Consequences of Ethical Violations'}</h3>
      <p>
        {isKo
          ? '연구윤리 위반은 개인과 학계, 그리고 사회 전체에 심각한 결과를 초래합니다:'
          : 'Violations of research ethics have serious consequences for individuals, academia, and society as a whole:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '논문 철회 (Retraction)' : 'Retraction'}</strong>
          {' — '}
          {isKo
            ? '연구부정행위가 발견되면 해당 논문은 학술지에서 철회됩니다. Retraction Watch에 따르면 매년 수천 건의 논문이 철회되고 있으며, 철회된 논문은 영구적으로 기록에 남습니다.'
            : 'When research misconduct is discovered, the paper is retracted from the journal. According to Retraction Watch, thousands of papers are retracted annually, and retracted papers remain permanently on record.'}
        </li>
        <li>
          <strong>{isKo ? '경력 손상' : 'Career Damage'}</strong>
          {' — '}
          {isKo
            ? '연구부정행위가 확인된 연구자는 연구비 신청 자격 박탈, 해고, 학위 취소 등 심각한 제재를 받을 수 있습니다.'
            : 'Researchers found guilty of misconduct may face loss of funding eligibility, termination, degree revocation, and other severe sanctions.'}
        </li>
        <li>
          <strong>{isKo ? '법적 책임' : 'Legal Liability'}</strong>
          {' — '}
          {isKo
            ? '연구대상자에게 피해를 입힌 경우 민사 소송이나 형사 처벌의 대상이 될 수 있으며, 연구비 부정 사용은 사기죄로 처벌될 수 있습니다.'
            : 'Researchers who harm participants may face civil lawsuits or criminal prosecution, and misuse of research funds can be prosecuted as fraud.'}
        </li>
        <li>
          <strong>{isKo ? '사회적 불신' : 'Public Distrust'}</strong>
          {' — '}
          {isKo
            ? '반복적인 윤리 위반 사례는 과학 전반에 대한 사회적 불신을 야기하며, 이는 연구 참여자 모집의 어려움, 연구비 삭감, 과학적 증거에 기반한 정책 수립의 약화로 이어질 수 있습니다.'
            : 'Repeated ethical violations erode public trust in science, which can lead to difficulties in recruiting research participants, funding cuts, and weakened evidence-based policymaking.'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? '핵심 관점' : 'Key Perspective'}>
        <p>
          {isKo
            ? '연구윤리는 연구를 방해하는 장애물이 아니라, 좋은 연구의 기본 토대입니다. 윤리적으로 수행된 연구만이 과학적으로 타당하고 사회적으로 가치 있는 결과를 산출할 수 있습니다. 윤리적 연구 설계는 종종 방법론적으로도 더 엄격한 연구로 이어집니다. "훌륭한 윤리는 훌륭한 과학이다(Good ethics is good science)"라는 원칙을 항상 기억하십시오.'
            : 'Research ethics are not an obstacle to research but the very foundation of good research. Only ethically conducted research can produce scientifically valid and socially valuable results. Ethical research design often leads to methodologically more rigorous studies. Always remember the principle: "Good ethics is good science."'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — IRB & Research Review                                  */
/* ================================================================== */

function IrbSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-building-columns" />
        {isKo ? ' IRB와 연구심의' : ' IRB & Research Review'}
      </h2>

      {/* --- What is an IRB --- */}
      <h3>{isKo ? 'IRB(기관생명윤리위원회)란?' : 'What Is an Institutional Review Board (IRB)?'}</h3>
      <p>
        {isKo
          ? 'IRB(Institutional Review Board)는 인간 대상 연구의 윤리적 적절성을 심의하고 승인하는 독립적인 기관 내 위원회입니다. 한국에서는 「생명윤리 및 안전에 관한 법률」에 따라 기관생명윤리위원회로 운영됩니다. IRB의 핵심 임무는 연구대상자의 권리, 안전, 복지를 보호하는 것이며, 연구 시작 전에 연구 계획의 윤리적 측면을 사전 검토합니다.'
          : 'An IRB (Institutional Review Board) is an independent institutional committee that reviews and approves the ethical appropriateness of human subjects research. In Korea, it operates as the Institutional Bioethics Committee (기관생명윤리위원회) under the Bioethics and Safety Act. The IRB\'s core mission is to protect the rights, safety, and welfare of research participants by reviewing the ethical aspects of research protocols before the study begins.'}
      </p>

      {/* --- Composition & Function --- */}
      <h3>{isKo ? 'IRB의 구성과 기능' : 'IRB Composition and Function'}</h3>
      <p>
        {isKo
          ? 'IRB는 다양한 배경과 전문성을 갖춘 위원들로 구성됩니다. 일반적으로 최소 5인 이상의 위원으로 구성되며, 과학적 전문가, 비과학 분야 위원, 그리고 연구기관에 소속되지 않은 외부 위원(지역사회 대표)이 반드시 포함되어야 합니다. 한국의 경우 생명윤리법에 따라 자연과학자, 의학/치의학/한의학 전문가, 법학자, 윤리학자, 그리고 일반인 대표가 포함됩니다.'
          : 'An IRB is composed of members with diverse backgrounds and expertise. Typically, it must include at least five members, including scientific experts, non-scientist members, and at least one member not affiliated with the institution (community representative). In Korea, the Bioethics Act requires the inclusion of natural scientists, medical/dental/oriental medicine professionals, legal scholars, ethicists, and lay representatives.'}
      </p>
      <p>
        {isKo
          ? 'IRB의 주요 기능은 다음과 같습니다: (1) 연구 프로토콜의 윤리적 심의 및 승인, (2) 지속적인 모니터링과 연차 심의, (3) 프로토콜 변경 사항 검토, (4) 이상반응(adverse event) 보고 검토, (5) 연구 중단 또는 종결 관리.'
          : 'The primary functions of an IRB include: (1) ethical review and approval of research protocols, (2) ongoing monitoring and continuing review, (3) review of protocol amendments, (4) review of adverse event reports, and (5) managing study suspension or termination.'}
      </p>

      {/* --- Types of review --- */}
      <h3>{isKo ? '심의 유형' : 'Types of Review'}</h3>
      <p>
        {isKo
          ? 'IRB 심의는 연구의 위험 수준에 따라 세 가지 유형으로 분류됩니다:'
          : 'IRB reviews are classified into three types based on the risk level of the research:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '심의 면제 (Exempt Review)' : 'Exempt Review'}</strong>
          {' — '}
          {isKo
            ? '최소한의 위험만 수반하며 특정 범주에 해당하는 연구입니다. 예: 공개된 자료 분석, 교육 현장에서의 일상적 교육 방법 비교, 식별 불가능한 기존 자료 분석. 심의 면제라 하더라도 IRB에 신고하여 면제 확인을 받아야 합니다.'
            : 'Research involving minimal risk that falls into specific categories. Examples: analysis of publicly available data, comparison of routine educational methods, analysis of existing de-identified data. Even exempt research must be submitted to the IRB for an exemption determination.'}
        </li>
        <li>
          <strong>{isKo ? '신속 심의 (Expedited Review)' : 'Expedited Review'}</strong>
          {' — '}
          {isKo
            ? '최소한의 위험 이하이며 특정 범주에 해당하는 연구로, IRB 위원장 또는 지정 위원이 심의합니다. 예: 소량 혈액 채취, 비침습적 생체 시료 수집, 설문조사/면접/관찰 연구(민감한 주제가 아닌 경우), 승인된 연구의 경미한 수정.'
            : 'Research involving no more than minimal risk that falls into specific categories, reviewed by the IRB chair or designated member(s). Examples: small blood draws, non-invasive biological sample collection, surveys/interviews/observations (non-sensitive topics), minor modifications to approved research.'}
        </li>
        <li>
          <strong>{isKo ? '정규 심의 (Full Board Review)' : 'Full Board Review'}</strong>
          {' — '}
          {isKo
            ? '최소한의 위험 이상을 수반하거나 취약한 대상자를 포함하는 연구입니다. 정족수(과반수)가 참석한 위원회 회의에서 심의하며, 출석 위원 과반수의 찬성으로 승인합니다. 임상시험, 취약계층 대상 연구, 기만적 방법을 사용하는 연구 등이 해당됩니다.'
            : 'Research involving greater than minimal risk or involving vulnerable populations. Reviewed at a convened meeting with a quorum (majority) of members present, approved by majority vote of those present. This includes clinical trials, research with vulnerable populations, and studies using deceptive methods.'}
        </li>
      </ol>

      {/* --- What requires IRB --- */}
      <h3>{isKo ? 'IRB 승인이 필요한 연구' : 'What Requires IRB Approval?'}</h3>
      <p>
        {isKo
          ? '일반적으로 살아 있는 인간 또는 인간의 식별 가능한 정보/생체 시료를 이용하는 체계적 조사(systematic investigation)로서 일반화 가능한 지식의 생산을 목적으로 하는 모든 연구 활동이 IRB 심의 대상입니다. 여기에는 설문조사, 면접, 관찰, 실험, 임상시험, 기존 자료의 이차 분석(식별 가능한 경우) 등이 포함됩니다.'
          : 'Generally, all research activities involving living human beings or identifiable human data/biospecimens that constitute systematic investigations designed to produce generalizable knowledge require IRB review. This includes surveys, interviews, observations, experiments, clinical trials, and secondary analysis of existing data (when identifiable).'}
      </p>
      <p>
        {isKo
          ? '다만, 질 향상(quality improvement) 활동, 기관 내부 프로그램 평가, 교육 과정의 일부로 수행되는 교실 내 활동 등은 일반적으로 연구로 간주되지 않아 IRB 심의 대상이 아닐 수 있습니다. 불확실한 경우에는 반드시 소속 기관의 IRB에 문의하여 확인해야 합니다.'
          : 'However, quality improvement activities, internal program evaluations, and classroom activities conducted as part of coursework are generally not considered research and may not require IRB review. When in doubt, always consult your institution\'s IRB for clarification.'}
      </p>

      {/* --- IRB Application Process --- */}
      <h3>{isKo ? 'IRB 신청 절차' : 'The IRB Application Process'}</h3>
      <p>
        {isKo
          ? 'IRB 신청은 연구 시작 전에 완료되어야 합니다. 일반적인 신청 절차는 다음과 같습니다:'
          : 'IRB applications must be completed before research begins. The typical application process includes:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '연구 프로토콜' : 'Research Protocol'}</strong>
          {' — '}
          {isKo
            ? '연구 목적, 방법, 대상자 선정 기준, 위험-이익 분석, 자료 관리 계획 등을 포함하는 상세한 연구 계획서를 작성합니다.'
            : 'Prepare a detailed research plan including research objectives, methods, participant selection criteria, risk-benefit analysis, and data management plan.'}
        </li>
        <li>
          <strong>{isKo ? '동의서 (Informed Consent Forms)' : 'Informed Consent Forms'}</strong>
          {' — '}
          {isKo
            ? '연구의 목적, 절차, 위험과 이익, 비밀보장, 자발적 참여와 철회 권리 등을 명확하고 이해하기 쉬운 언어로 기술한 동의서를 준비합니다.'
            : 'Prepare consent forms written in clear, understandable language describing the study\'s purpose, procedures, risks and benefits, confidentiality, and the right to voluntary participation and withdrawal.'}
        </li>
        <li>
          <strong>{isKo ? '연구 도구 (Instruments)' : 'Research Instruments'}</strong>
          {' — '}
          {isKo
            ? '설문지, 면접 가이드, 관찰 프로토콜 등 자료 수집에 사용할 모든 도구를 제출합니다.'
            : 'Submit all data collection tools such as questionnaires, interview guides, and observation protocols.'}
        </li>
        <li>
          <strong>{isKo ? '연구자 교육 이수 증명' : 'Researcher Training Certification'}</strong>
          {' — '}
          {isKo
            ? 'CITI(Collaborative Institutional Training Initiative) 프로그램 등 연구윤리 교육 이수 증명서를 제출합니다.'
            : 'Submit certificates of research ethics training completion, such as the CITI (Collaborative Institutional Training Initiative) program.'}
        </li>
      </ul>

      {/* --- Korean IRB System --- */}
      <h3>{isKo ? '한국의 IRB 제도' : 'The Korean IRB System'}</h3>
      <p>
        {isKo
          ? '한국의 연구윤리 심의 제도는 「생명윤리 및 안전에 관한 법률」(생명윤리법)에 근거합니다. 인간 대상 연구, 인체유래물 연구, 배아 연구 등을 수행하는 기관은 기관생명윤리위원회를 설치하거나, 공용기관생명윤리위원회에 심의를 위탁해야 합니다. 국가생명윤리정책원(NIBP)은 IRB의 등록, 관리, 교육을 총괄하며, 모든 IRB 심의 결과는 국가생명윤리정보포털(e-IRB)에 보고됩니다.'
          : 'Korea\'s research ethics review system is based on the Bioethics and Safety Act (생명윤리법). Institutions conducting human subjects research, human-derived material research, or embryo research must establish an institutional bioethics committee or delegate review to a public IRB. The National Institute of Bioethics Policy (NIBP) oversees IRB registration, management, and education, and all IRB review results are reported to the national bioethics information portal (e-IRB).'}
      </p>

      {/* --- Common Rejections --- */}
      <h3>{isKo ? 'IRB 반려 사유와 대처법' : 'Common Reasons for IRB Rejection'}</h3>
      <p>
        {isKo
          ? 'IRB 신청이 반려되거나 수정을 요구받는 흔한 사유는 다음과 같습니다:'
          : 'Common reasons for IRB applications being rejected or requiring modifications include:'}
      </p>
      <ul>
        <li>{isKo ? '동의서의 내용이 불충분하거나 이해하기 어려운 수준으로 작성됨' : 'Consent forms with insufficient information or written at an inaccessible reading level'}</li>
        <li>{isKo ? '위험-이익 평가가 부적절하거나 위험 최소화 방안이 불명확함' : 'Inadequate risk-benefit assessment or unclear risk minimization strategies'}</li>
        <li>{isKo ? '취약 대상자에 대한 추가 보호 조치 미비' : 'Insufficient additional protections for vulnerable populations'}</li>
        <li>{isKo ? '자료 보안 및 비밀보장 계획 미흡' : 'Inadequate data security and confidentiality plans'}</li>
        <li>{isKo ? '대상자 모집 방법이 부적절하거나 강압적 요소 포함' : 'Inappropriate recruitment methods or coercive elements'}</li>
        <li>{isKo ? '연구자 교육 이수 미완료' : 'Incomplete researcher training requirements'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? 'IRB 신청 팁' : 'IRB Application Tips'}>
        <p>
          {isKo
            ? '강력한 IRB 신청서를 준비하려면: (1) 동의서를 중학생도 이해할 수 있는 수준(가독성 6-8학년 수준)으로 작성하세요. (2) 잠재적 위험을 솔직하게 기술하되, 구체적인 위험 최소화 방안을 함께 제시하세요. (3) 자료 보안 계획을 구체적으로 명시하세요 (암호화, 접근 제한, 보관 기간 등). (4) IRB 심의 전에 동료나 멘토에게 신청서를 검토받으세요. (5) 소속 기관 IRB의 양식과 지침을 꼼꼼히 확인하고, 불확실한 점은 IRB 사무국에 사전 문의하세요.'
            : 'To prepare a strong IRB application: (1) Write consent forms at a 6th-8th grade reading level. (2) Honestly describe potential risks while providing specific risk minimization measures. (3) Clearly specify data security plans (encryption, access restrictions, retention periods, etc.). (4) Have colleagues or mentors review your application before submission. (5) Carefully follow your institution\'s IRB forms and guidelines, and contact the IRB office with any questions before submitting.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Protecting Research Participants                       */
/* ================================================================== */

function ProtectionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-user-shield" />
        {isKo ? ' 연구대상자 보호' : ' Protecting Research Participants'}
      </h2>

      {/* --- Informed Consent --- */}
      <h3>{isKo ? '충분한 설명에 의한 동의 (Informed Consent)' : 'Informed Consent'}</h3>
      <p>
        {isKo
          ? '충분한 설명에 의한 동의(informed consent)는 연구윤리의 가장 핵심적인 요소 중 하나입니다. 동의는 단순한 서명이 아니라, 연구대상자가 연구에 대한 충분한 정보를 이해하고 자발적으로 참여를 결정하는 지속적인 과정입니다. 유효한 동의가 성립하려면 세 가지 요소가 충족되어야 합니다: 정보 제공(information), 이해(comprehension), 자발성(voluntariness).'
          : 'Informed consent is one of the most fundamental elements of research ethics. Consent is not simply a signature — it is an ongoing process in which research participants understand sufficient information about the study and voluntarily decide to participate. Valid consent requires three elements: information, comprehension, and voluntariness.'}
      </p>
      <p>
        {isKo
          ? '동의서에 반드시 포함되어야 하는 요소는 다음과 같습니다:'
          : 'Essential elements that must be included in a consent form are:'}
      </p>
      <ul>
        <li>{isKo ? '연구의 목적과 절차에 대한 설명' : 'Description of the study\'s purpose and procedures'}</li>
        <li>{isKo ? '예상되는 위험과 불편' : 'Foreseeable risks and discomforts'}</li>
        <li>{isKo ? '합리적으로 기대할 수 있는 이익' : 'Reasonably expected benefits'}</li>
        <li>{isKo ? '대안적 절차나 치료(해당되는 경우)' : 'Alternative procedures or treatments (if applicable)'}</li>
        <li>{isKo ? '비밀보장의 범위와 방법' : 'Extent and methods of confidentiality'}</li>
        <li>{isKo ? '보상 및 피해 발생 시 구제 방안' : 'Compensation and remedies in case of harm'}</li>
        <li>{isKo ? '연구 관련 문의 연락처' : 'Contact information for research-related questions'}</li>
        <li>{isKo ? '참여의 자발성과 언제든 철회 가능함을 명시' : 'Statement of voluntary participation and right to withdraw at any time'}</li>
      </ul>

      {/* --- Special Populations --- */}
      <h3>{isKo ? '특별 보호 대상자' : 'Special Populations'}</h3>
      <p>
        {isKo
          ? '특정 집단은 자율적 의사결정 능력이 제한되거나 강압에 취약하여 추가적인 보호가 필요합니다. 이러한 취약한 대상자(vulnerable populations)에는 다음이 포함됩니다:'
          : 'Certain groups require additional protections because their capacity for autonomous decision-making may be limited or they are vulnerable to coercion. These vulnerable populations include:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '아동 및 미성년자' : 'Children and Minors'}</strong>
          {' — '}
          {isKo
            ? '부모(또는 법정 대리인)의 동의(permission)와 함께 아동 본인의 승낙(assent)을 받아야 합니다. 승낙은 아동의 발달 수준에 적합한 방식으로 설명하고 얻어야 합니다. 일반적으로 7세 이상의 아동에게 승낙을 구합니다.'
            : 'Parental (or legal guardian) permission must be obtained along with the child\'s own assent. Assent must be explained and obtained in a manner appropriate to the child\'s developmental level. Generally, assent is sought from children aged 7 and older.'}
        </li>
        <li>
          <strong>{isKo ? '수감자' : 'Prisoners'}</strong>
          {' — '}
          {isKo
            ? '구금 환경의 특성상 자발적 참여가 강압될 위험이 있으므로, IRB에 수감자 대표가 포함되어야 하며, 연구 참여에 대한 보상이 부당한 유인이 되지 않도록 주의해야 합니다.'
            : 'Due to the inherent coercive nature of confinement, the IRB must include a prisoner representative, and care must be taken to ensure that incentives for participation do not constitute undue inducement.'}
        </li>
        <li>
          <strong>{isKo ? '임산부와 태아' : 'Pregnant Women and Fetuses'}</strong>
          {' — '}
          {isKo
            ? '연구가 임산부나 태아에게 최소한의 위험 이상을 수반하는 경우, 해당 연구가 임산부나 태아의 건강에 직접적 이익을 제공하는 경우에만 허용됩니다.'
            : 'When research poses more than minimal risk to pregnant women or fetuses, it is only permitted if the research offers a direct health benefit to the pregnant woman or fetus.'}
        </li>
        <li>
          <strong>{isKo ? '인지 능력이 손상된 사람' : 'Cognitively Impaired Individuals'}</strong>
          {' — '}
          {isKo
            ? '치매, 지적 장애, 정신질환 등으로 인지 능력이 손상된 사람의 경우, 법적 대리인의 동의와 함께 가능한 범위 내에서 본인의 승낙을 구해야 합니다. 연구 참여 중 인지 능력의 변동에도 주의를 기울여야 합니다.'
            : 'For individuals with impaired cognitive capacity due to dementia, intellectual disability, mental illness, etc., consent from a legal representative must be obtained along with the individual\'s own assent to the extent possible. Attention must also be paid to fluctuations in cognitive capacity during study participation.'}
        </li>
      </ul>

      {/* --- Privacy and Confidentiality --- */}
      <h3>{isKo ? '개인정보 보호와 비밀보장' : 'Privacy and Confidentiality'}</h3>
      <p>
        {isKo
          ? '연구에서 개인정보 보호는 두 가지 관련되지만 구별되는 개념을 포함합니다. 익명성(anonymity)은 연구자조차 응답자의 신원을 알 수 없는 상태를 의미하며, 비밀보장(confidentiality)은 연구자가 신원을 알지만 이를 외부에 공개하지 않는 것을 의미합니다. 많은 연구에서 완전한 익명성은 불가능하므로, 비밀보장이 더 현실적인 보호 방법입니다.'
          : 'Privacy protection in research involves two related but distinct concepts. Anonymity means that even the researcher cannot identify the respondent, while confidentiality means the researcher knows the identity but does not disclose it externally. Since complete anonymity is impossible in many studies, confidentiality is a more practical method of protection.'}
      </p>

      {/* --- Data Protection --- */}
      <h3>{isKo ? '자료 보호' : 'Data Protection'}</h3>
      <p>
        {isKo
          ? '연구 자료의 보호를 위해 다음과 같은 조치가 필요합니다:'
          : 'The following measures are necessary to protect research data:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '비식별화 (De-identification)' : 'De-identification'}</strong>
          {' — '}
          {isKo
            ? '이름, 주민등록번호, 주소 등 직접 식별자를 제거하고, 코드 번호로 대체합니다. 코드 키(연결 파일)는 원자료와 분리하여 별도의 안전한 장소에 보관합니다.'
            : 'Remove direct identifiers such as names, social security numbers, and addresses, replacing them with code numbers. The code key (linking file) must be stored separately from the original data in a secure location.'}
        </li>
        <li>
          <strong>{isKo ? '안전한 저장 (Secure Storage)' : 'Secure Storage'}</strong>
          {' — '}
          {isKo
            ? '전자 자료는 암호화하여 보관하고, 접근 권한을 연구팀으로 제한합니다. 종이 자료는 잠금 장치가 있는 캐비닛에 보관합니다. 클라우드 저장소 사용 시 기관의 정보보호 정책을 준수합니다.'
            : 'Electronic data should be encrypted and access restricted to the research team. Paper documents should be stored in locked cabinets. When using cloud storage, comply with institutional information security policies.'}
        </li>
        <li>
          <strong>{isKo ? '보관 기간 정책 (Retention Policies)' : 'Retention Policies'}</strong>
          {' — '}
          {isKo
            ? '연구 자료의 보관 기간은 법령, 기관 규정, 연구비 지원 기관의 요구사항에 따라 결정됩니다. 한국의 경우 생명윤리법에 따라 동의서는 연구 종료 후 3년간 보관해야 합니다. 보관 기간이 만료된 자료는 안전하게 폐기해야 합니다.'
            : 'Data retention periods are determined by laws, institutional policies, and funder requirements. In Korea, the Bioethics Act requires consent forms to be retained for 3 years after study completion. Data that has exceeded its retention period must be securely destroyed.'}
        </li>
      </ul>

      {/* --- Risk-Benefit Assessment --- */}
      <h3>{isKo ? '위험-이익 평가' : 'Risk-Benefit Assessment'}</h3>
      <p>
        {isKo
          ? 'IRB 심의의 핵심은 연구의 잠재적 위험과 기대 이익 간의 합리적 균형을 평가하는 것입니다. "최소한의 위험(minimal risk)"이란 일상생활이나 통상적인 신체적·심리적 검사에서 겪는 위험의 확률과 크기를 초과하지 않는 수준을 의미합니다. 위험은 신체적, 심리적, 사회적, 경제적, 법적 차원을 모두 포함하며, 연구 설계 단계에서부터 체계적으로 평가하고 최소화해야 합니다.'
          : 'The core of IRB review is evaluating the reasonable balance between a study\'s potential risks and expected benefits. "Minimal risk" means the probability and magnitude of harm do not exceed those ordinarily encountered in daily life or during routine physical or psychological examinations. Risks encompass physical, psychological, social, economic, and legal dimensions, and must be systematically assessed and minimized from the research design stage.'}
      </p>

      {/* --- Deception --- */}
      <h3>{isKo ? '연구에서의 기만 (Deception)' : 'Deception in Research'}</h3>
      <p>
        {isKo
          ? '일부 사회과학 연구에서는 연구의 진정한 목적이나 절차를 미리 공개하면 결과가 왜곡될 수 있어 기만적 방법(deception)을 사용하는 경우가 있습니다. 기만이 정당화되려면 다음 조건을 충족해야 합니다: (1) 기만을 사용하지 않고는 연구를 수행할 수 없을 것, (2) 연구의 과학적·교육적·실용적 가치가 충분히 클 것, (3) 기만이 참가자에게 심각한 신체적 고통이나 정서적 고통을 초래하지 않을 것. 기만을 사용한 연구에서는 실험 종료 후 반드시 디브리핑(debriefing)을 실시하여 참가자에게 연구의 진정한 목적과 기만의 내용을 설명해야 합니다.'
          : 'In some social science research, revealing the true purpose or procedures beforehand would distort results, so deceptive methods are used. For deception to be justified: (1) the research cannot be conducted without deception, (2) the study\'s scientific, educational, or practical value must be sufficient, and (3) the deception must not cause serious physical pain or emotional distress. Studies using deception must conduct debriefing after the experiment to explain the true purpose and nature of the deception to participants.'}
      </p>

      <TipBox type="warning" title={isKo ? '취약 대상자 연구 시 주의사항' : 'Special Care for Vulnerable Populations'}>
        <p>
          {isKo
            ? '취약한 대상자를 연구에 포함할 때는 특별한 주의가 필요합니다. (1) 대상자의 취약성이 연구 참여 결정에 미치는 영향을 신중하게 고려하세요. (2) 보호자/대리인의 동의와 함께 가능한 범위 내에서 본인의 승낙을 반드시 구하세요. (3) 연구 참여에 대한 보상이 부당한 유인(undue inducement)이 되지 않도록 적정한 수준을 유지하세요. (4) 연구 도중 대상자가 불편함이나 고통을 표현하면 즉시 적절한 조치를 취하세요. 취약 대상자 포함은 반드시 과학적으로 정당화되어야 하며, 해당 집단을 포함하지 않고는 연구 목적을 달성할 수 없어야 합니다.'
            : 'Special care is required when including vulnerable populations in research. (1) Carefully consider how the participant\'s vulnerability affects their decision to participate. (2) Always seek the participant\'s own assent to the extent possible, in addition to guardian/proxy consent. (3) Ensure that compensation does not constitute undue inducement. (4) If a participant expresses discomfort or distress during the study, take immediate appropriate action. Inclusion of vulnerable populations must be scientifically justified, and the research objectives must not be achievable without including that population.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 4 — Research Misconduct                                    */
/* ================================================================== */

function MisconductSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-ban" />
        {isKo ? ' 연구부정행위' : ' Research Misconduct'}
      </h2>

      {/* --- Three Types of Misconduct (FFP) --- */}
      <h3>{isKo ? '연구부정행위의 세 가지 유형 (FFP)' : 'Three Types of Research Misconduct (FFP)'}</h3>
      <p>
        {isKo
          ? '연구부정행위(research misconduct)는 연구의 제안, 수행, 보고 과정에서 행해지는 위조, 변조, 표절을 의미합니다. 이른바 FFP(Fabrication, Falsification, Plagiarism)로 불리는 이 세 가지 범주는 국제적으로 가장 널리 인정되는 연구부정행위의 핵심 유형입니다.'
          : 'Research misconduct refers to fabrication, falsification, and plagiarism committed in proposing, performing, or reporting research. These three categories, known as FFP (Fabrication, Falsification, Plagiarism), are the most widely recognized core types of research misconduct internationally.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '위조 (Fabrication)' : 'Fabrication'}</strong>
          <p>
            {isKo
              ? '존재하지 않는 데이터나 연구 결과를 만들어내는 행위입니다. 실제로 실험이나 관찰을 수행하지 않았으면서 데이터를 생성하거나, 실시하지 않은 설문조사의 결과를 보고하는 것이 해당됩니다. 위조는 가장 심각한 형태의 연구부정행위로 간주되며, 과학적 지식 체계를 근본적으로 훼손합니다.'
              : 'Fabrication is the act of making up data or research results that do not exist. This includes generating data without actually conducting experiments or observations, or reporting results from surveys that were never administered. Fabrication is considered the most serious form of research misconduct and fundamentally undermines the scientific knowledge base.'}
          </p>
        </li>
        <li>
          <strong>{isKo ? '변조 (Falsification)' : 'Falsification'}</strong>
          <p>
            {isKo
              ? '연구 재료, 장비, 과정을 조작하거나 데이터를 변경 또는 누락하여 연구 결과가 정확하게 반영되지 않도록 하는 행위입니다. 예를 들어, 가설에 맞지 않는 데이터 포인트를 정당한 이유 없이 삭제하거나, 이미지를 부적절하게 편집하거나, 통계 분석 결과를 선택적으로 보고하는 것이 포함됩니다.'
              : 'Falsification is manipulating research materials, equipment, or processes, or changing or omitting data so that research results are not accurately represented. Examples include deleting data points that do not support the hypothesis without justification, inappropriately editing images, or selectively reporting statistical analysis results.'}
          </p>
        </li>
        <li>
          <strong>{isKo ? '표절 (Plagiarism)' : 'Plagiarism'}</strong>
          <p>
            {isKo
              ? '다른 사람의 아이디어, 방법, 결과 또는 문장을 적절한 출처 표시 없이 자신의 것처럼 사용하는 행위입니다. 직접 표절(다른 사람의 문장을 그대로 복사)뿐 아니라, 의역 표절(문장을 바꾸었지만 원래의 아이디어를 출처 없이 사용), 아이디어 표절(다른 사람의 독창적 아이디어나 연구 설계를 차용) 등 다양한 형태가 있습니다.'
              : 'Plagiarism is appropriating another person\'s ideas, methods, results, or words without giving proper credit. It includes not only direct plagiarism (copying someone\'s text verbatim) but also paraphrasing plagiarism (rewording but using original ideas without citation), idea plagiarism (borrowing someone\'s original ideas or research designs), and other various forms.'}
          </p>
        </li>
      </ol>

      {/* --- QRP --- */}
      <h3>{isKo ? 'FFP vs. 의심스러운 연구 관행 (QRP)' : 'FFP vs. Questionable Research Practices (QRP)'}</h3>
      <p>
        {isKo
          ? 'FFP 외에도 과학적 무결성을 위협하는 "의심스러운 연구 관행(QRP: Questionable Research Practices)"이 있습니다. QRP는 명백한 부정행위에는 해당하지 않지만, 연구 결과의 신뢰성을 심각하게 훼손할 수 있는 관행들입니다:'
          : 'Beyond FFP, there are "Questionable Research Practices (QRP)" that threaten scientific integrity. While QRP may not constitute outright misconduct, they can seriously undermine the reliability of research results:'}
      </p>
      <ul>
        <li>
          <strong>p-hacking</strong>
          {' — '}
          {isKo
            ? '통계적으로 유의한 결과가 나올 때까지 다양한 분석 방법을 시도하거나, 데이터를 선택적으로 포함/제외하는 것. 예: 여러 종속변수를 분석한 후 유의한 결과만 보고'
            : 'Trying various analytical methods or selectively including/excluding data until statistically significant results emerge. Example: analyzing multiple dependent variables but reporting only significant findings.'}
        </li>
        <li>
          <strong>HARKing (Hypothesizing After Results are Known)</strong>
          {' — '}
          {isKo
            ? '결과를 확인한 후에 마치 사전에 설정한 것처럼 가설을 제시하는 것. 탐색적 분석의 결과를 확인적 분석인 것처럼 포장하여 보고'
            : 'Presenting hypotheses as if they were formulated before the data were analyzed, when in fact they were developed after seeing the results. Packaging exploratory findings as confirmatory analyses.'}
        </li>
        <li>
          <strong>{isKo ? '살라미 슬라이싱 (Salami Slicing)' : 'Salami Slicing'}</strong>
          {' — '}
          {isKo
            ? '하나의 연구를 여러 편의 논문으로 부적절하게 분할하여 출판하는 것. 업적 부풀리기의 일환으로 논문 수를 늘리기 위한 목적'
            : 'Inappropriately dividing a single study into multiple publications to inflate one\'s publication count as part of padding academic credentials.'}
        </li>
        <li>
          <strong>{isKo ? '선택적 보고 (Selective Reporting)' : 'Selective Reporting'}</strong>
          {' — '}
          {isKo
            ? '연구 가설을 지지하는 결과만 보고하고, 지지하지 않는 결과는 생략하는 것. 출판 편향(publication bias)의 주요 원인'
            : 'Reporting only results that support the research hypothesis while omitting non-supportive findings. A major cause of publication bias.'}
        </li>
      </ul>

      {/* --- Self-plagiarism --- */}
      <h3>{isKo ? '자기 표절과 중복 출판' : 'Self-Plagiarism and Duplicate Publication'}</h3>
      <p>
        {isKo
          ? '자기 표절(self-plagiarism)은 자신이 이전에 출판한 내용을 새로운 출판물에 적절한 인용 없이 재사용하는 것을 의미합니다. 중복 출판(duplicate publication)은 동일하거나 거의 동일한 원고를 두 곳 이상의 학술지에 투고하는 것입니다. 이러한 관행은 학술 문헌의 양을 인위적으로 부풀리고, 메타분석에서 연구 결과를 중복 반영시키며, 저작권 문제를 야기합니다. 단, 학위 논문을 학술지 논문으로 발전시키거나, 학회 발표 논문을 확장하는 것은 일반적으로 허용되지만, 사전에 편집자에게 알려야 합니다.'
          : 'Self-plagiarism refers to reusing previously published content in a new publication without proper citation. Duplicate publication involves submitting the same or nearly identical manuscript to two or more journals. These practices artificially inflate the volume of academic literature, cause double-counting in meta-analyses, and raise copyright issues. However, developing a dissertation into a journal article or expanding a conference paper is generally acceptable, though the editor should be informed in advance.'}
      </p>

      {/* --- Detection Methods --- */}
      <h3>{isKo ? '부정행위 탐지 방법' : 'Detection Methods'}</h3>
      <p>
        {isKo
          ? '연구부정행위를 탐지하기 위한 다양한 방법이 발전하고 있습니다:'
          : 'Various methods for detecting research misconduct are evolving:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '표절 검사 소프트웨어' : 'Plagiarism Detection Software'}</strong>
          {' — '}
          {isKo
            ? 'Turnitin, iThenticate, CopyKiller(한국) 등의 도구를 사용하여 텍스트 유사도를 검사합니다. 대부분의 학술지는 투고 시 자동으로 표절 검사를 수행합니다.'
            : 'Tools such as Turnitin, iThenticate, and CopyKiller (Korea) are used to check text similarity. Most journals automatically perform plagiarism checks upon submission.'}
        </li>
        <li>
          <strong>{isKo ? '통계적 이상 탐지' : 'Statistical Anomaly Detection'}</strong>
          {' — '}
          {isKo
            ? 'GRIM 테스트, SPRITE, Statcheck 등의 도구를 통해 보고된 통계치의 내적 일관성을 검증합니다. 예를 들어, 보고된 평균이 해당 표본 크기와 척도에서 수학적으로 가능한지 확인합니다.'
            : 'Tools such as the GRIM test, SPRITE, and Statcheck verify the internal consistency of reported statistics. For example, they check whether a reported mean is mathematically possible given the sample size and scale.'}
        </li>
        <li>
          <strong>{isKo ? '동료 심사 (Peer Review)' : 'Peer Review'}</strong>
          {' — '}
          {isKo
            ? '동료 심사자들이 연구 방법의 적절성, 결과의 일관성, 결론의 타당성을 검토하는 과정에서 부정행위의 징후를 발견하는 경우가 있습니다.'
            : 'Peer reviewers sometimes detect signs of misconduct while reviewing the appropriateness of methods, consistency of results, and validity of conclusions.'}
        </li>
        <li>
          <strong>{isKo ? '이미지 분석' : 'Image Analysis'}</strong>
          {' — '}
          {isKo
            ? '디지털 이미지 포렌식 도구를 사용하여 부적절하게 조작된 연구 이미지(현미경 사진, 겔 이미지 등)를 탐지합니다.'
            : 'Digital image forensic tools are used to detect inappropriately manipulated research images (micrographs, gel images, etc.).'}
        </li>
      </ul>

      {/* --- Reporting and Whistleblower --- */}
      <h3>{isKo ? '신고 체계와 내부고발자 보호' : 'Reporting Mechanisms and Whistleblower Protection'}</h3>
      <p>
        {isKo
          ? '연구부정행위를 목격하거나 의심하는 경우, 소속 기관의 연구진실성위원회(research integrity officer)나 관련 부서에 신고할 수 있습니다. 한국에서는 「국가연구개발혁신법」에 따라 연구부정행위 제보자(내부고발자)의 신분과 권리를 보호하며, 제보를 이유로 불이익을 주는 것은 법적으로 금지됩니다. 기관은 제보자의 신원을 비밀로 유지해야 하고, 보복 행위가 확인되면 해당 기관과 개인에게 제재가 가해집니다.'
          : 'When research misconduct is witnessed or suspected, it can be reported to the institution\'s research integrity officer or relevant department. In Korea, the National R&D Innovation Act protects the identity and rights of misconduct reporters (whistleblowers), and giving disadvantages because of reporting is legally prohibited. Institutions must maintain the confidentiality of the reporter\'s identity, and sanctions are imposed on institutions and individuals found to have engaged in retaliation.'}
      </p>

      <TipBox type="warning" title={isKo ? '연구자들이 흔히 간과하는 회색지대' : 'Gray Areas Researchers Often Overlook'}>
        <p>
          {isKo
            ? '다음은 명확한 부정행위는 아니지만 윤리적 문제를 야기할 수 있는 회색지대입니다: (1) 공동 연구자의 분석 결과를 충분히 검증하지 않고 신뢰하는 것, (2) 연구 노트를 체계적으로 기록하지 않아 나중에 재현이 어려운 경우, (3) 통계 분석에서 이상치(outlier) 제거의 기준이 모호한 경우, (4) 사전 등록(pre-registration) 없이 탐색적 분석을 확인적 분석으로 보고하는 경우, (5) AI 도구를 활용하여 생성된 텍스트의 출처와 사용 범위를 투명하게 밝히지 않는 경우. 이러한 관행들을 일상적으로 점검하는 습관을 가지세요.'
            : 'The following are gray areas that are not outright misconduct but can raise ethical concerns: (1) Trusting a co-researcher\'s analysis results without adequate verification, (2) Failing to maintain systematic research notes, making later replication difficult, (3) Using ambiguous criteria for outlier removal in statistical analyses, (4) Reporting exploratory analyses as confirmatory without pre-registration, (5) Failing to transparently disclose the source and extent of AI-generated text. Develop the habit of routinely checking for these practices.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 5 — Conflicts of Interest & Authorship                     */
/* ================================================================== */

function ConflictSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-handshake-angle" />
        {isKo ? ' 이해충돌과 저자권' : ' Conflicts of Interest & Authorship'}
      </h2>

      {/* --- Conflicts of Interest --- */}
      <h3>{isKo ? '이해충돌이란?' : 'What Are Conflicts of Interest?'}</h3>
      <p>
        {isKo
          ? '이해충돌(conflict of interest)은 연구자의 전문적 판단이나 행동이 부차적 이해관계에 의해 부당하게 영향을 받을 수 있는 상황을 의미합니다. 이해충돌 자체가 비윤리적인 것은 아니지만, 이를 인식하지 못하거나 적절히 관리하지 않으면 연구의 객관성과 신뢰성이 훼손될 수 있습니다. 이해충돌은 크게 세 가지 유형으로 구분됩니다:'
          : 'A conflict of interest occurs when a researcher\'s professional judgment or actions may be unduly influenced by secondary interests. Conflicts of interest are not inherently unethical, but failing to recognize or manage them can compromise the objectivity and credibility of research. They are broadly classified into three types:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '재정적 이해충돌' : 'Financial Conflicts of Interest'}</strong>
          {' — '}
          {isKo
            ? '연구비 지원, 컨설팅 보수, 주식 소유, 특허 로열티, 기업 자문료 등 연구 결과에 의해 영향을 받을 수 있는 재정적 이해관계. 가장 흔하고 가장 명확하게 규정되는 유형입니다.'
            : 'Financial interests that may be affected by research outcomes, including research funding, consulting fees, stock ownership, patent royalties, and corporate advisory fees. This is the most common and most clearly regulated type.'}
        </li>
        <li>
          <strong>{isKo ? '개인적 이해충돌' : 'Personal Conflicts of Interest'}</strong>
          {' — '}
          {isKo
            ? '연구자와 연구대상자, 동료 연구자, 또는 연구 관련 당사자 간의 개인적 관계(가족, 친구, 적대적 관계 등)에서 발생하는 이해충돌.'
            : 'Conflicts arising from personal relationships between researchers and participants, fellow researchers, or other parties involved in the research (family, friends, adversarial relationships, etc.).'}
        </li>
        <li>
          <strong>{isKo ? '학문적 이해충돌' : 'Academic Conflicts of Interest'}</strong>
          {' — '}
          {isKo
            ? '학문적 경쟁, 이론적 입장, 소속 학파에 대한 충성심 등에서 발생하는 이해충돌. 예를 들어, 자신의 이론을 지지하는 결과를 선호하거나, 경쟁 연구자의 연구를 공정하게 평가하지 못하는 경우.'
            : 'Conflicts arising from academic competition, theoretical positions, or loyalty to a school of thought. For example, favoring results that support one\'s own theory or failing to fairly evaluate a competitor\'s research.'}
        </li>
      </ul>

      {/* --- Disclosure --- */}
      <h3>{isKo ? '공개 의무' : 'Disclosure Requirements'}</h3>
      <p>
        {isKo
          ? '대부분의 학술지와 연구비 지원 기관은 잠재적 이해충돌의 공개를 의무화하고 있습니다. 논문 투고 시 모든 저자는 이해충돌 공개 양식(conflict of interest disclosure form)을 제출해야 하며, 출판된 논문에는 이해충돌 선언문이 포함됩니다. 한국연구재단(NRF)을 포함한 주요 연구비 지원 기관도 연구비 신청 및 보고 시 이해충돌 공개를 요구합니다.'
          : 'Most journals and funding agencies mandate the disclosure of potential conflicts of interest. All authors must submit a conflict of interest disclosure form when submitting a manuscript, and published papers include a conflict of interest statement. Major funding agencies, including the National Research Foundation of Korea (NRF), also require conflict of interest disclosure during grant applications and reporting.'}
      </p>

      {/* --- Funding Source Influence --- */}
      <h3>{isKo ? '연구비 출처의 영향' : 'Funding Source Influence on Research'}</h3>
      <p>
        {isKo
          ? '다수의 메타분석 연구에 따르면, 산업체 후원 연구는 독립적으로 수행된 연구에 비해 후원자에게 유리한 결과를 보고하는 경향이 있습니다. 이는 "후원자 효과(sponsorship effect)" 또는 "자금 효과(funding effect)"로 알려져 있습니다. 이 효과는 데이터 조작이 아니라 연구 질문 선택, 비교군 설정, 결과 측정 도구 선택, 결과 보고 방식 등에서의 미묘한 편향에 의해 발생할 수 있습니다. 따라서 연구비 출처를 투명하게 공개하고, 후원자와 연구의 독립성을 보장하는 계약을 체결하는 것이 중요합니다.'
          : 'Multiple meta-analyses have shown that industry-sponsored research tends to report results favorable to the sponsor compared to independently conducted research. This is known as the "sponsorship effect" or "funding effect." This effect may result not from data manipulation but from subtle biases in research question selection, comparator choices, outcome measures, and reporting methods. Therefore, it is important to transparently disclose funding sources and establish contracts that guarantee research independence from sponsors.'}
      </p>

      {/* --- Authorship Criteria --- */}
      <h3>{isKo ? '저자 기준: ICMJE 가이드라인' : 'Authorship Criteria: ICMJE Guidelines'}</h3>
      <p>
        {isKo
          ? '국제의학학술지편집인위원회(ICMJE)의 가이드라인은 의생명과학뿐만 아니라 사회과학 분야에서도 널리 참조되는 저자 기준을 제시합니다. ICMJE에 따르면, 저자로 인정받으려면 다음 네 가지 기준을 모두 충족해야 합니다:'
          : 'The International Committee of Medical Journal Editors (ICMJE) guidelines provide authorship criteria widely referenced not only in biomedical sciences but also in social sciences. According to ICMJE, all four of the following criteria must be met to qualify as an author:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '실질적 기여 (Substantial Contribution)' : 'Substantial Contribution'}</strong>
          {' — '}
          {isKo
            ? '연구의 구상 또는 설계, 또는 자료의 수집, 분석, 해석에 실질적으로 기여'
            : 'Substantial contributions to the conception or design of the work, or the acquisition, analysis, or interpretation of data'}
        </li>
        <li>
          <strong>{isKo ? '초고 작성 또는 수정 (Drafting or Revision)' : 'Drafting or Revision'}</strong>
          {' — '}
          {isKo
            ? '논문 초고를 작성하거나 중요한 학문적 내용에 대해 비평적으로 수정'
            : 'Drafting the work or revising it critically for important intellectual content'}
        </li>
        <li>
          <strong>{isKo ? '최종 승인 (Final Approval)' : 'Final Approval'}</strong>
          {' — '}
          {isKo
            ? '출판될 최종 버전을 승인'
            : 'Approval of the final version to be published'}
        </li>
        <li>
          <strong>{isKo ? '책임 (Accountability)' : 'Accountability'}</strong>
          {' — '}
          {isKo
            ? '연구의 모든 측면에 대해 정확성과 무결성에 관한 질문이 적절히 조사되고 해결되도록 보장하는 데 동의'
            : 'Agreement to be accountable for all aspects of the work, ensuring that questions related to the accuracy or integrity of any part are appropriately investigated and resolved'}
        </li>
      </ol>

      {/* --- Ghost & Gift Authorship --- */}
      <h3>{isKo ? '유령 저자와 선물/명예 저자' : 'Ghost Authorship and Gift/Honorary Authorship'}</h3>
      <p>
        {isKo
          ? '유령 저자(ghost authorship)는 저자 기준을 충족하는 기여를 했음에도 저자 목록에서 누락되는 경우입니다. 이는 주로 제약회사 등이 고용한 전문 작성자(medical writer)가 논문을 작성하지만 저자로 기재되지 않는 상황에서 발생합니다. 반대로 선물/명예 저자(gift/honorary authorship)는 실질적 기여 없이 지위, 관계, 소속 등의 이유로 저자 목록에 포함되는 경우입니다. 예를 들어, 연구실 책임자가 연구에 직접 기여하지 않았음에도 관행적으로 저자에 포함되는 것이 이에 해당합니다. 두 관행 모두 비윤리적이며, 연구의 책임 소재를 불분명하게 만듭니다.'
          : 'Ghost authorship occurs when someone who meets authorship criteria is omitted from the author list. This typically happens when professional writers (e.g., medical writers hired by pharmaceutical companies) draft the manuscript but are not listed as authors. Conversely, gift/honorary authorship is when someone is included in the author list without substantial contribution, based on position, relationship, or affiliation. For example, a laboratory director being routinely included as an author without direct contribution to the research. Both practices are unethical and obscure research accountability.'}
      </p>

      {/* --- Corresponding Author --- */}
      <h3>{isKo ? '교신저자의 책임' : 'Corresponding Author Responsibilities'}</h3>
      <p>
        {isKo
          ? '교신저자(corresponding author)는 논문의 투고, 심사, 출판 과정에서 학술지와의 소통을 담당하는 저자입니다. 교신저자의 주요 책임은 다음과 같습니다: (1) 모든 공동저자의 동의를 확인하고 저자 기여도를 정리, (2) 학술지 편집인 및 심사자와의 공식 소통 담당, (3) 출판 후 데이터 공유 요청이나 질의에 대응, (4) 저자 간 의견 조율, (5) 이해충돌 공개 사항의 취합 및 보고.'
          : 'The corresponding author is responsible for communication with the journal during the submission, review, and publication process. Key responsibilities include: (1) confirming all co-authors\' consent and organizing author contributions, (2) handling official communication with editors and reviewers, (3) responding to post-publication data sharing requests and inquiries, (4) coordinating among authors, and (5) compiling and reporting conflict of interest disclosures.'}
      </p>

      {/* --- Author Order --- */}
      <h3>{isKo ? '분야별 저자 순서 관행' : 'Author Order Conventions Across Disciplines'}</h3>
      <p>
        {isKo
          ? '저자 순서의 의미는 학문 분야에 따라 크게 다릅니다. 자연과학과 의학에서는 일반적으로 첫 번째 저자(first author)가 가장 많은 기여를 한 연구자이고, 마지막 저자(last/senior author)가 연구를 총괄한 책임 연구자입니다. 사회과학에서는 기여도 순서로 저자를 나열하는 것이 일반적이며, 일부 분야(경제학, 수학 등)에서는 알파벳 순서로 저자를 나열하여 동등한 기여를 암시합니다. 최근에는 공동 제1저자(co-first author)나 공동 교신저자(co-corresponding author)를 표시하는 관행도 증가하고 있습니다.'
          : 'The meaning of author order varies significantly across disciplines. In the natural sciences and medicine, the first author is generally the researcher who made the greatest contribution, while the last/senior author is the principal investigator who oversaw the research. In social sciences, authors are typically listed in order of contribution, and in some fields (economics, mathematics, etc.), alphabetical ordering is used to imply equal contribution. The practice of designating co-first authors or co-corresponding authors has been increasing recently.'}
      </p>

      <TipBox type="important" title={isKo ? '공정한 저자 관행' : 'Fair Authorship Practices'}>
        <p>
          {isKo
            ? '저자권 분쟁을 예방하기 위해 다음을 권장합니다: (1) 연구 시작 단계에서 모든 팀원과 저자 기준, 순서, 역할을 명확히 합의하세요. (2) 합의 내용을 문서화하고 정기적으로 업데이트하세요. (3) ICMJE 기준 또는 CRediT(Contributor Roles Taxonomy) 분류법을 활용하여 각 저자의 구체적 기여를 명시하세요. (4) 기여도가 변경되면 즉시 팀원들과 논의하세요. (5) 학생과 초기 경력 연구자의 기여가 적절히 인정받도록 특별히 주의하세요. 저자권은 연구자에게 가장 중요한 학술적 자산 중 하나이므로, 처음부터 투명하고 공정하게 관리하는 것이 핵심입니다.'
            : 'To prevent authorship disputes, the following is recommended: (1) Clearly agree on authorship criteria, order, and roles with all team members at the beginning of the study. (2) Document agreements and update them regularly. (3) Use ICMJE criteria or CRediT (Contributor Roles Taxonomy) to specify each author\'s concrete contributions. (4) Discuss changes in contributions with the team immediately. (5) Pay special attention to ensuring that students and early-career researchers receive proper credit for their contributions. Since authorship is one of the most important academic assets for researchers, transparent and fair management from the start is essential.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 6 — Research Ethics Guidelines                             */
/* ================================================================== */

function GuidelinesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-book-bookmark" />
        {isKo ? ' 연구윤리 가이드라인' : ' Research Ethics Guidelines'}
      </h2>

      {/* --- International Guidelines --- */}
      <h3>{isKo ? '국제 가이드라인' : 'International Guidelines'}</h3>
      <p>
        {isKo
          ? '연구윤리에 관한 주요 국제 가이드라인은 전 세계 연구자들이 준수해야 할 보편적 윤리 기준을 제시합니다:'
          : 'Major international guidelines on research ethics provide universal ethical standards that researchers worldwide should follow:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'WMA 헬싱키 선언 (Declaration of Helsinki)' : 'WMA Declaration of Helsinki'}</strong>
          {' — '}
          {isKo
            ? '세계의사회(WMA)가 1964년 채택하고 이후 여러 차례 개정한 의학 연구의 윤리적 원칙. 인간 대상 의학 연구의 윤리적 수행에 관한 가장 영향력 있는 국제 문서로, 동의, 위험 최소화, 취약 집단 보호, 연구 등록, 출판 윤리 등을 포괄합니다.'
            : 'Ethical principles for medical research adopted by the WMA in 1964 and revised multiple times. The most influential international document on ethical conduct of medical research involving human subjects, covering consent, risk minimization, protection of vulnerable groups, research registration, and publication ethics.'}
        </li>
        <li>
          <strong>{isKo ? 'CIOMS 국제윤리지침' : 'CIOMS International Ethical Guidelines'}</strong>
          {' — '}
          {isKo
            ? '국제의과학단체위원회(CIOMS)와 WHO가 공동으로 개발한 가이드라인으로, 특히 자원이 제한된 환경(resource-limited settings)에서의 연구윤리 적용에 관한 구체적 지침을 제공합니다. 사회적 가치, 과학적 타당성, 공정한 대상자 선정, 유리한 위험-이익 비율 등 8가지 윤리적 요건을 제시합니다.'
            : 'Guidelines jointly developed by CIOMS and WHO, providing specific guidance on applying research ethics particularly in resource-limited settings. They present eight ethical requirements including social value, scientific validity, fair subject selection, and favorable risk-benefit ratio.'}
        </li>
        <li>
          <strong>{isKo ? '싱가포르 선언 (Singapore Statement, 2010)' : 'Singapore Statement on Research Integrity (2010)'}</strong>
          {' — '}
          {isKo
            ? '제2차 세계연구진실성회의에서 채택된 성명으로, 연구진실성(research integrity)에 관한 4가지 원칙(정직성, 책임성, 전문가적 예의, 양호한 연구 관리)과 14가지 책임을 명시합니다. 이 선언은 연구윤리를 넘어 연구 수행 전반의 진실성을 강조한다는 점에서 의의가 있습니다.'
            : 'A statement adopted at the 2nd World Conference on Research Integrity, specifying four principles (honesty, accountability, professional courtesy, good stewardship) and 14 responsibilities related to research integrity. This declaration is significant for emphasizing integrity across the entire research process, beyond research ethics alone.'}
        </li>
      </ul>

      {/* --- Korean Guidelines --- */}
      <h3>{isKo ? '한국의 연구윤리 규정' : 'Korean Research Ethics Regulations'}</h3>
      <p>
        {isKo
          ? '한국은 법률과 행정 지침을 통해 연구윤리를 체계적으로 관리하고 있습니다:'
          : 'Korea systematically manages research ethics through legislation and administrative guidelines:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '국가연구개발혁신법' : 'National R&D Innovation Act'}</strong>
          {' — '}
          {isKo
            ? '국가 연구개발사업의 기획, 관리, 평가에 관한 기본 법률로, 연구부정행위의 정의, 조사 절차, 제재 조치를 규정합니다. 위조, 변조, 표절, 부당한 저자 표시, 부당한 중복 게재 등을 연구부정행위로 정의합니다.'
            : 'The basic law governing the planning, management, and evaluation of national R&D projects. It defines research misconduct, investigation procedures, and sanctions, including fabrication, falsification, plagiarism, improper authorship, and unwarranted duplicate publication.'}
        </li>
        <li>
          <strong>{isKo ? '연구윤리 확보를 위한 지침 (교육부)' : 'Guidelines for Securing Research Ethics (Ministry of Education)'}</strong>
          {' — '}
          {isKo
            ? '교육부가 고시한 행정 지침으로, 대학과 연구기관이 연구윤리를 확보하기 위해 갖추어야 할 체계와 절차를 규정합니다. 연구윤리위원회 설치, 연구부정행위 조사 절차, 검증 기준, 사후 조치 등을 포함합니다.'
            : 'Administrative guidelines issued by the Ministry of Education, specifying the systems and procedures that universities and research institutions must establish to ensure research ethics. They cover the establishment of research ethics committees, misconduct investigation procedures, verification standards, and follow-up measures.'}
        </li>
        <li>
          <strong>{isKo ? '생명윤리 및 안전에 관한 법률' : 'Bioethics and Safety Act'}</strong>
          {' — '}
          {isKo
            ? '인간 대상 연구, 인체유래물 연구, 배아 연구 등에 관한 윤리적 기준을 법률로 규정하며, 기관생명윤리위원회(IRB) 설치와 운영에 관한 사항을 명시합니다.'
            : 'Establishes ethical standards for human subjects research, human-derived material research, and embryo research by law, specifying matters related to the establishment and operation of Institutional Review Boards (IRBs).'}
        </li>
      </ul>

      {/* --- RCR Training --- */}
      <h3>{isKo ? '책임 있는 연구 수행 (RCR) 교육' : 'Responsible Conduct of Research (RCR) Training'}</h3>
      <p>
        {isKo
          ? '책임 있는 연구 수행(RCR: Responsible Conduct of Research) 교육은 연구자가 윤리적으로 연구를 수행하는 데 필요한 지식, 기술, 태도를 개발하는 것을 목적으로 합니다. 미국 NIH와 NSF는 연구비 지원을 받는 모든 연구자에게 RCR 교육 이수를 의무화하고 있으며, 한국에서도 국가연구개발혁신법에 따라 연구책임자는 연구윤리 교육을 이수해야 합니다. RCR 교육은 일반적으로 다음 주제를 포함합니다: 연구데이터 관리, 멘토링과 지도, 출판과 저자권, 동료 심사, 공동 연구, 이해충돌, 인간 대상 연구, 동물 연구, 연구부정행위.'
          : 'Responsible Conduct of Research (RCR) training aims to develop the knowledge, skills, and attitudes researchers need to conduct research ethically. The U.S. NIH and NSF mandate RCR training for all funded researchers, and in Korea, the National R&D Innovation Act requires principal investigators to complete research ethics training. RCR training typically covers: data management, mentoring, publication and authorship, peer review, collaborative research, conflicts of interest, human subjects research, animal research, and research misconduct.'}
      </p>

      {/* --- Data Management and Sharing --- */}
      <h3>{isKo ? '데이터 관리와 공유 정책' : 'Data Management and Sharing Policies'}</h3>
      <p>
        {isKo
          ? '연구 데이터의 체계적 관리와 공유는 연구의 투명성과 재현 가능성을 높이는 핵심 요소입니다. 점점 더 많은 학술지와 연구비 지원 기관이 데이터 관리 계획(DMP: Data Management Plan)의 제출을 요구하고 있습니다. DMP에는 데이터 수집 방법, 저장 형식, 보안 조치, 접근 권한, 공유 계획, 보존 기간 등이 포함됩니다. FAIR 원칙(Findable, Accessible, Interoperable, Reusable)은 연구 데이터 관리의 국제적 표준으로 자리잡고 있습니다.'
          : 'Systematic management and sharing of research data are key elements for enhancing research transparency and reproducibility. An increasing number of journals and funding agencies require the submission of Data Management Plans (DMPs). DMPs include data collection methods, storage formats, security measures, access permissions, sharing plans, and retention periods. The FAIR principles (Findable, Accessible, Interoperable, Reusable) have become the international standard for research data management.'}
      </p>

      {/* --- Open Science --- */}
      <h3>{isKo ? '오픈 사이언스와 재현 가능성' : 'Open Science and Reproducibility'}</h3>
      <p>
        {isKo
          ? '오픈 사이언스(open science) 운동은 연구의 모든 단계를 투명하게 공개하여 과학의 신뢰성과 효율성을 높이려는 패러다임 전환입니다. 주요 구성 요소로는 오픈 액세스(open access) 출판, 사전 등록(pre-registration), 등록 보고(registered reports), 오픈 데이터(open data), 오픈 소스 코드(open-source code), 오픈 피어 리뷰(open peer review) 등이 있습니다. 특히 사전 등록은 연구 시작 전에 가설, 방법, 분석 계획을 공개적으로 등록함으로써 HARKing과 p-hacking을 방지하는 효과적인 도구로 주목받고 있습니다. OSF(Open Science Framework), AsPredicted, ClinicalTrials.gov 등의 플랫폼을 통해 사전 등록을 할 수 있습니다.'
          : 'The open science movement represents a paradigm shift toward making all stages of research transparent to enhance the credibility and efficiency of science. Key components include open access publishing, pre-registration, registered reports, open data, open-source code, and open peer review. Pre-registration, in particular, has gained attention as an effective tool for preventing HARKing and p-hacking by publicly registering hypotheses, methods, and analysis plans before the study begins. Pre-registration can be done through platforms such as OSF (Open Science Framework), AsPredicted, and ClinicalTrials.gov.'}
      </p>

      {/* --- Ethics Education --- */}
      <h3>{isKo ? '연구윤리 교육 프로그램' : 'Research Ethics Education Programs'}</h3>
      <p>
        {isKo
          ? '체계적인 연구윤리 교육은 윤리적 연구 문화의 근간입니다. 국내외에서 활용할 수 있는 주요 교육 프로그램은 다음과 같습니다:'
          : 'Systematic research ethics education is the foundation of an ethical research culture. Key education programs available domestically and internationally include:'}
      </p>
      <ul>
        <li><strong>CITI Program</strong> — {isKo ? '온라인 기반의 국제적으로 가장 널리 사용되는 연구윤리 교육 프로그램. 인간 대상 연구, 동물 연구, RCR, GCP 등 다양한 모듈 제공' : 'The most widely used international online research ethics training program, offering modules on human subjects research, animal research, RCR, GCP, and more'}</li>
        <li><strong>{isKo ? '국가생명윤리정책원(NIBP) 교육' : 'NIBP Training'}</strong> — {isKo ? '한국의 IRB 위원, 연구자, 연구기관 종사자를 대상으로 하는 법정 교육 프로그램' : 'Legal training programs in Korea targeting IRB members, researchers, and research institution staff'}</li>
        <li><strong>{isKo ? '한국연구재단(NRF) 연구윤리 교육' : 'NRF Research Ethics Training'}</strong> — {isKo ? '국가 연구비를 지원받는 연구책임자가 이수해야 하는 온라인 교육' : 'Online training required for principal investigators receiving national research funding'}</li>
        <li><strong>{isKo ? '대학원 과정 내 연구윤리 교과목' : 'Graduate-level Research Ethics Courses'}</strong> — {isKo ? '많은 대학이 대학원 과정에서 연구윤리를 필수 교과목으로 운영' : 'Many universities offer research ethics as a required course in graduate programs'}</li>
      </ul>

      {/* --- Ethical Research Culture --- */}
      <h3>{isKo ? '윤리적 연구 문화 만들기' : 'Building an Ethical Research Culture'}</h3>
      <p>
        {isKo
          ? '윤리적 연구 문화는 개인의 노력만으로는 충분하지 않으며, 기관과 학계 전체의 체계적인 지원이 필요합니다. 연구 지도자(PI)가 솔선수범하여 윤리적 행동의 모범을 보이는 것이 중요하며, 연구실 내에서 윤리적 문제를 자유롭게 논의할 수 있는 분위기를 조성해야 합니다. 기관 차원에서는 연구윤리 교육을 정기적으로 제공하고, 부정행위 신고 체계를 강화하며, 양보다 질을 중시하는 평가 제도를 마련해야 합니다.'
          : 'An ethical research culture requires more than individual effort — it needs systematic support from institutions and the academic community as a whole. It is important for research leaders (PIs) to lead by example in ethical behavior and create an atmosphere where ethical issues can be freely discussed within the lab. At the institutional level, regular research ethics training should be provided, misconduct reporting systems strengthened, and evaluation systems that prioritize quality over quantity established.'}
      </p>

      {/* --- Practical Checklist --- */}
      <h3>{isKo ? '윤리적 연구 수행을 위한 실천 체크리스트' : 'Practical Checklist for Ethical Research Conduct'}</h3>
      <p>
        {isKo
          ? '다음은 연구 수행 전반에서 활용할 수 있는 윤리적 점검 목록입니다:'
          : 'The following is an ethical checklist applicable throughout the research process:'}
      </p>
      <ul>
        <li>{isKo ? '연구 시작 전 IRB 승인 또는 면제 확인을 받았는가?' : 'Have you obtained IRB approval or exemption determination before starting research?'}</li>
        <li>{isKo ? '모든 참여자로부터 적절한 동의를 받았는가?' : 'Have you obtained proper consent from all participants?'}</li>
        <li>{isKo ? '연구 데이터를 정직하고 정확하게 기록하고 있는가?' : 'Are you recording research data honestly and accurately?'}</li>
        <li>{isKo ? '연구 노트와 원자료를 체계적으로 보관하고 있는가?' : 'Are you systematically maintaining research notes and raw data?'}</li>
        <li>{isKo ? '참여자의 개인정보와 비밀을 적절히 보호하고 있는가?' : 'Are you adequately protecting participant privacy and confidentiality?'}</li>
        <li>{isKo ? '모든 출처를 정확하게 인용하고 있는가?' : 'Are you accurately citing all sources?'}</li>
        <li>{isKo ? '저자권을 공정하게 배분하고 있는가?' : 'Is authorship being fairly distributed?'}</li>
        <li>{isKo ? '잠재적 이해충돌을 적절히 공개하고 있는가?' : 'Are you appropriately disclosing potential conflicts of interest?'}</li>
        <li>{isKo ? '부정적 결과(negative results)도 정직하게 보고하고 있는가?' : 'Are you honestly reporting negative results?'}</li>
        <li>{isKo ? '연구 프로토콜 변경 시 IRB에 수정 심의를 요청했는가?' : 'Have you requested IRB amendment review when changing the research protocol?'}</li>
        <li>{isKo ? '연구비를 연구 목적에 맞게 적절히 사용하고 있는가?' : 'Are you using research funds appropriately for their intended purpose?'}</li>
        <li>{isKo ? '연구 종료 후 데이터 보관 및 폐기 계획을 준수하고 있는가?' : 'Are you following data retention and disposal plans after study completion?'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? '지속적인 윤리 교육 자원' : 'Resources for Ongoing Ethics Education'}>
        <p>
          {isKo
            ? '연구윤리는 한 번 배우고 끝나는 것이 아니라, 연구자로서의 경력 전반에 걸쳐 지속적으로 학습해야 하는 영역입니다. 다음 자원을 활용하여 최신 동향과 사례를 지속적으로 파악하세요: (1) CITI Program (citiprogram.org) — 체계적인 온라인 교육 모듈, (2) ORI (Office of Research Integrity, ori.hhs.gov) — 미국 연구진실성국의 사례 분석과 교육 자료, (3) COPE (Committee on Publication Ethics, publicationethics.org) — 출판 윤리에 관한 지침과 사례 연구, (4) Retraction Watch (retractionwatch.com) — 논문 철회 사례 추적과 분석, (5) 국가생명윤리정책원 (nibp.kr) — 한국의 생명윤리 정책과 교육 자료. 연구실 세미나에서 윤리 사례를 정기적으로 논의하는 것도 매우 효과적인 학습 방법입니다.'
            : 'Research ethics is not something you learn once and forget — it is a field that requires continuous learning throughout your research career. Use the following resources to stay current with the latest trends and cases: (1) CITI Program (citiprogram.org) — systematic online training modules, (2) ORI (Office of Research Integrity, ori.hhs.gov) — case analyses and educational materials from the U.S. Office of Research Integrity, (3) COPE (Committee on Publication Ethics, publicationethics.org) — guidelines and case studies on publication ethics, (4) Retraction Watch (retractionwatch.com) — tracking and analysis of paper retractions, (5) National Institute of Bioethics Policy (nibp.kr) — Korean bioethics policies and educational materials. Regularly discussing ethics cases in lab seminars is also a highly effective learning method.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 7 — References                                             */
/* ================================================================== */

function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '연구윤리 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of research ethics.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>National Commission for the Protection of Human Subjects (1979). <em>The Belmont Report: Ethical Principles and Guidelines for the Protection of Human Subjects of Research</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>World Medical Association (2013). Declaration of Helsinki: Ethical principles for medical research involving human subjects. <em>JAMA</em>, 310(20), 2191-2194.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Resnik, D. B. (2020). <em>The Ethics of Research with Human Subjects: Protecting People, Advancing Science, Promoting Trust</em>. Springer.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>ICMJE (2023). Recommendations for the Conduct, Reporting, Editing, and Publication of Scholarly Work in Medical Journals.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Steneck, N. H. (2007). <em>ORI Introduction to the Responsible Conduct of Research</em>. U.S. Government Printing Office.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>한국연구재단 (2015). <em>연구윤리 확보를 위한 지침 해설서</em>.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>이인재 (2015). <em>연구윤리의 이해와 실천</em>. 동문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Wilkinson, M. D., et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. <em>Scientific Data</em>, 3, 160018.</li>
        </ul>
      </div>
    </>
  );
}

/* ================================================================== */
/*  Main page component                                                */
/* ================================================================== */

export default function Ethics(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('importance');
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? '연구윤리 | Research Master' : 'Research Ethics | Research Master'}
        description={
          isKo
            ? 'IRB 심의, 연구대상자 보호, 연구부정행위 방지 등 연구윤리를 체계적으로 학습합니다.'
            : 'Learn research ethics including IRB review, participant protection, and preventing research misconduct.'
        }
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* ---------- Sidebar navigation ---------- */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* ---------- Main content ---------- */}
          <main className="guide-content">
            {activeSection === 'importance' && <ImportanceSection isKo={isKo} />}
            {activeSection === 'irb' && <IrbSection isKo={isKo} />}
            {activeSection === 'protection' && <ProtectionSection isKo={isKo} />}
            {activeSection === 'misconduct' && <MisconductSection isKo={isKo} />}
            {activeSection === 'conflict' && <ConflictSection isKo={isKo} />}
            {activeSection === 'guidelines' && <GuidelinesSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            {/* ---------- Section navigation ---------- */}
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? isKo
                      ? SECTIONS[currentIndex - 1].ko
                      : SECTIONS[currentIndex - 1].en
                    : isKo
                      ? '이전'
                      : 'Previous'}
                </span>
              </button>
              <button
                className="guide-nav-btn next"
                onClick={handleNext}
                disabled={currentIndex === SECTIONS.length - 1}
              >
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? isKo
                      ? SECTIONS[currentIndex + 1].ko
                      : SECTIONS[currentIndex + 1].en
                    : isKo
                      ? '다음'
                      : 'Next'}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
