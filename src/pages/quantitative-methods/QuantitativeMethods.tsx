import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ---------- sidebar nav sections ---------- */
const SECTIONS = [
  { id: 'overview', icon: 'fa-square-poll-vertical', ko: '양적연구 개요', en: 'Overview of Quantitative Research' },
  { id: 'experimental-design', icon: 'fa-flask', ko: '실험설계', en: 'Experimental Design' },
  { id: 'survey-method', icon: 'fa-clipboard-list', ko: '설문조사방법', en: 'Survey Methods' },
  { id: 'sampling', icon: 'fa-users', ko: '표본추출과 표본크기', en: 'Sampling and Sample Size' },
  { id: 'data-analysis', icon: 'fa-chart-bar', ko: '양적자료분석', en: 'Quantitative Data Analysis' },
  { id: 'paper-writing', icon: 'fa-pen-to-square', ko: '양적연구 논문작성', en: 'Writing Quantitative Papers' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* =================================================================
   Section 1 -- Overview of Quantitative Research
   ================================================================= */
function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-square-poll-vertical" />
        {isKo ? '양적연구 개요' : 'Overview of Quantitative Research'}
      </h2>

      {/* What is quantitative research */}
      <h3>{isKo ? '양적연구란 무엇인가?' : 'What Is Quantitative Research?'}</h3>
      <p>
        {isKo
          ? '양적연구(Quantitative Research)는 수량적 데이터를 체계적으로 수집하고 통계적 방법을 통해 분석하여 변인 간의 관계를 규명하거나 가설을 검증하는 연구 방법론입니다. 양적연구는 객관성, 일반화 가능성, 재현 가능성을 핵심 가치로 추구하며, 사회과학, 자연과학, 교육학, 경영학 등 다양한 분야에서 광범위하게 활용됩니다.'
          : 'Quantitative research is a research methodology that systematically collects numerical data and analyzes it through statistical methods to identify relationships between variables or to test hypotheses. It prioritizes objectivity, generalizability, and replicability, and is widely used across diverse fields including the social sciences, natural sciences, education, and business administration.'}
      </p>
      <p>
        {isKo
          ? '양적연구의 핵심 목적은 이론에서 도출된 가설을 경험적 데이터로 검증하는 것입니다. 연구자는 측정 가능한 변인(variable)을 정의하고, 표준화된 도구를 사용하여 데이터를 수집하며, 통계적 분석을 통해 결과를 도출합니다. 이러한 과정은 연구의 객관성을 보장하고, 다른 연구자가 동일한 절차로 연구를 반복할 수 있게 합니다.'
          : 'The core purpose of quantitative research is to test hypotheses derived from theory using empirical data. Researchers define measurable variables, collect data using standardized instruments, and derive results through statistical analysis. This process ensures objectivity and allows other researchers to replicate the study using the same procedures.'}
      </p>

      {/* Positivism paradigm */}
      <h3>{isKo ? '실증주의 패러다임' : 'The Positivist Paradigm'}</h3>
      <p>
        {isKo
          ? '양적연구는 실증주의(Positivism) 패러다임에 철학적 기반을 두고 있습니다. 실증주의는 Auguste Comte에 의해 체계화된 철학적 전통으로, 관찰 가능하고 측정 가능한 현상만이 과학적 지식의 대상이 될 수 있다고 봅니다. 이 관점에서 사회적 현실은 자연 현상과 마찬가지로 객관적 법칙에 의해 지배되며, 과학적 방법을 통해 이러한 법칙을 발견할 수 있다고 가정합니다.'
          : 'Quantitative research is philosophically grounded in the positivist paradigm. Positivism, systematized by Auguste Comte, holds that only observable and measurable phenomena can be the subject of scientific knowledge. From this perspective, social reality, like natural phenomena, is governed by objective laws, and these laws can be discovered through the scientific method.'}
      </p>
      <p>
        {isKo
          ? '후기 실증주의(Post-positivism)는 Karl Popper의 반증주의(Falsificationism)에 영향을 받아, 절대적 진리의 발견보다는 가설의 반증(falsification)을 통한 지식의 점진적 발전을 강조합니다. 현대 양적연구의 대부분은 이 후기 실증주의적 입장에 기반합니다.'
          : 'Post-positivism, influenced by Karl Popper\'s falsificationism, emphasizes the gradual advancement of knowledge through the falsification of hypotheses rather than the discovery of absolute truth. Most modern quantitative research is grounded in this post-positivist stance.'}
      </p>

      {/* Deductive approach */}
      <h3>{isKo ? '연역적 접근법' : 'The Deductive Approach'}</h3>
      <p>
        {isKo
          ? '양적연구는 연역적 접근법(Deductive Approach)을 따릅니다. 이는 일반적 이론에서 출발하여 구체적인 가설을 도출하고, 경험적 데이터를 통해 이 가설을 검증하는 "위에서 아래로(top-down)" 논리입니다. 연역적 과정은 다음과 같은 단계를 거칩니다: (1) 이론 검토 → (2) 가설 설정 → (3) 자료 수집 → (4) 통계적 분석 → (5) 가설 지지 또는 기각 → (6) 이론의 수정 또는 확인.'
          : 'Quantitative research follows a deductive approach. This is a "top-down" logic that begins with general theory, derives specific hypotheses, and tests those hypotheses through empirical data. The deductive process proceeds through these stages: (1) Theory review → (2) Hypothesis formulation → (3) Data collection → (4) Statistical analysis → (5) Hypothesis supported or rejected → (6) Theory revised or confirmed.'}
      </p>

      {/* Quantitative vs qualitative comparison */}
      <h3>{isKo ? '양적연구 vs 질적연구 비교' : 'Quantitative vs. Qualitative Research'}</h3>
      <p>
        {isKo
          ? '양적연구와 질적연구는 서로 다른 철학적 가정, 목적, 방법론을 가지고 있습니다. 두 접근법은 상호 배타적이 아니라 상호 보완적이며, 연구 질문의 성격에 따라 적절한 방법을 선택해야 합니다.'
          : 'Quantitative and qualitative research have different philosophical assumptions, purposes, and methodologies. The two approaches are not mutually exclusive but complementary, and the appropriate method should be selected based on the nature of the research question.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '차원' : 'Dimension'}</th>
              <th>{isKo ? '양적연구' : 'Quantitative'}</th>
              <th>{isKo ? '질적연구' : 'Qualitative'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '패러다임' : 'Paradigm'}</td>
              <td>{isKo ? '실증주의 / 후기 실증주의' : 'Positivism / Post-positivism'}</td>
              <td>{isKo ? '해석주의 / 구성주의' : 'Interpretivism / Constructivism'}</td>
            </tr>
            <tr>
              <td>{isKo ? '접근법' : 'Approach'}</td>
              <td>{isKo ? '연역적 (가설 검증)' : 'Deductive (hypothesis testing)'}</td>
              <td>{isKo ? '귀납적 (이론 생성)' : 'Inductive (theory generation)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '데이터 유형' : 'Data Type'}</td>
              <td>{isKo ? '수치 데이터 (숫자)' : 'Numerical data (numbers)'}</td>
              <td>{isKo ? '텍스트, 이미지, 음성 등' : 'Text, images, audio, etc.'}</td>
            </tr>
            <tr>
              <td>{isKo ? '분석 방법' : 'Analysis'}</td>
              <td>{isKo ? '통계적 분석' : 'Statistical analysis'}</td>
              <td>{isKo ? '주제 분석, 코딩 등' : 'Thematic analysis, coding, etc.'}</td>
            </tr>
            <tr>
              <td>{isKo ? '표본 크기' : 'Sample Size'}</td>
              <td>{isKo ? '대규모 (통계적 검정력 확보)' : 'Large (to ensure statistical power)'}</td>
              <td>{isKo ? '소규모 (깊이 있는 탐구)' : 'Small (for in-depth exploration)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '일반화' : 'Generalization'}</td>
              <td>{isKo ? '통계적 일반화 가능' : 'Statistical generalization possible'}</td>
              <td>{isKo ? '전이가능성(Transferability)' : 'Transferability'}</td>
            </tr>
            <tr>
              <td>{isKo ? '연구자 역할' : 'Researcher Role'}</td>
              <td>{isKo ? '객관적 관찰자' : 'Objective observer'}</td>
              <td>{isKo ? '능동적 참여자 / 해석자' : 'Active participant / Interpreter'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key characteristics */}
      <h3>{isKo ? '양적연구의 핵심 특성' : 'Key Characteristics of Quantitative Research'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '객관성 (Objectivity)' : 'Objectivity'}</strong>{' '}
          {isKo
            ? '– 연구자의 주관적 판단을 최소화하고, 표준화된 측정 도구와 절차를 통해 데이터를 수집합니다.'
            : '– Minimizes subjective judgment by collecting data through standardized instruments and procedures.'}
        </li>
        <li>
          <strong>{isKo ? '측정 가능성 (Measurability)' : 'Measurability'}</strong>{' '}
          {isKo
            ? '– 연구 대상을 측정 가능한 변인으로 조작적으로 정의(Operational Definition)합니다.'
            : '– Research subjects are operationally defined as measurable variables.'}
        </li>
        <li>
          <strong>{isKo ? '일반화 가능성 (Generalizability)' : 'Generalizability'}</strong>{' '}
          {isKo
            ? '– 적절한 표본추출을 통해 연구 결과를 모집단 전체에 일반화할 수 있습니다.'
            : '– Through appropriate sampling, research findings can be generalized to the entire population.'}
        </li>
        <li>
          <strong>{isKo ? '재현 가능성 (Replicability)' : 'Replicability'}</strong>{' '}
          {isKo
            ? '– 동일한 방법과 절차를 사용하여 다른 연구자가 연구를 반복할 수 있습니다.'
            : '– Other researchers can replicate the study using the same methods and procedures.'}
        </li>
        <li>
          <strong>{isKo ? '인과관계 규명' : 'Causal Inference'}</strong>{' '}
          {isKo
            ? '– 실험설계를 통해 독립변인과 종속변인 간의 인과관계를 검증할 수 있습니다.'
            : '– Through experimental design, causal relationships between independent and dependent variables can be tested.'}
        </li>
      </ul>

      {/* Research process flow */}
      <h3>{isKo ? '양적연구 과정' : 'The Quantitative Research Process'}</h3>
      <p>
        {isKo
          ? '양적연구는 일반적으로 다음과 같은 체계적인 과정을 따릅니다. 각 단계는 순차적으로 진행되며, 연구의 엄밀성을 보장하기 위해 각 단계에서 엄격한 기준이 적용됩니다.'
          : 'Quantitative research typically follows the systematic process outlined below. Each stage proceeds sequentially, and rigorous standards are applied at every step to ensure research integrity.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '연구 문제 정의' : 'Define the Research Problem'}</strong>{' '}
          {isKo
            ? '– 기존 문헌을 검토하여 연구 공백(Research Gap)을 파악하고, 명확한 연구 질문을 수립합니다.'
            : '– Review existing literature to identify a research gap and formulate a clear research question.'}
        </li>
        <li>
          <strong>{isKo ? '문헌 검토' : 'Literature Review'}</strong>{' '}
          {isKo
            ? '– 관련 이론과 선행연구를 체계적으로 검토하여 이론적 틀을 구축합니다.'
            : '– Systematically review relevant theories and prior studies to build a theoretical framework.'}
        </li>
        <li>
          <strong>{isKo ? '가설 설정' : 'Hypothesis Formulation'}</strong>{' '}
          {isKo
            ? '– 이론적 근거에 기반하여 검증 가능한 가설(Research Hypothesis)을 설정합니다.'
            : '– Formulate testable hypotheses based on theoretical foundations.'}
        </li>
        <li>
          <strong>{isKo ? '연구 설계' : 'Research Design'}</strong>{' '}
          {isKo
            ? '– 실험, 조사, 상관연구 등 적절한 연구 설계를 선택합니다.'
            : '– Select an appropriate design such as experimental, survey, or correlational research.'}
        </li>
        <li>
          <strong>{isKo ? '표본 추출 및 자료 수집' : 'Sampling and Data Collection'}</strong>{' '}
          {isKo
            ? '– 모집단에서 대표성 있는 표본을 추출하고, 표준화된 도구로 데이터를 수집합니다.'
            : '– Draw a representative sample from the population and collect data using standardized instruments.'}
        </li>
        <li>
          <strong>{isKo ? '자료 분석' : 'Data Analysis'}</strong>{' '}
          {isKo
            ? '– 기술통계와 추론통계를 사용하여 데이터를 분석하고 가설을 검증합니다.'
            : '– Analyze data using descriptive and inferential statistics and test hypotheses.'}
        </li>
        <li>
          <strong>{isKo ? '결과 해석 및 보고' : 'Interpretation and Reporting'}</strong>{' '}
          {isKo
            ? '– 분석 결과를 해석하고, 학술적 형식에 맞추어 연구 보고서를 작성합니다.'
            : '– Interpret the results and write a research report in academic format.'}
        </li>
      </ol>

      <TipBox type="important" title={isKo ? '양적연구의 핵심 원칙' : 'Core Principles of Quantitative Research'}>
        <p>
          {isKo
            ? '양적연구에서 가장 중요한 것은 "측정의 타당성"과 "통계적 결론의 건전성"입니다. 아무리 정교한 통계 기법을 사용하더라도, 측정 도구가 타당하지 않거나 표본이 편향되어 있다면 연구 결과를 신뢰할 수 없습니다. 연구자는 항상 "내가 측정하고자 하는 것을 정확히 측정하고 있는가?"라는 질문을 스스로에게 해야 합니다.'
            : 'The most important aspects of quantitative research are "measurement validity" and "soundness of statistical conclusions." No matter how sophisticated the statistical technique, results cannot be trusted if the measurement instrument lacks validity or if the sample is biased. Researchers must always ask themselves: "Am I accurately measuring what I intend to measure?"'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 2 -- Experimental Design
   ================================================================= */
function ExperimentalDesignSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-flask" />
        {isKo ? '실험설계' : 'Experimental Design'}
      </h2>

      {/* What is experimental design */}
      <h3>{isKo ? '실험설계란?' : 'What Is Experimental Design?'}</h3>
      <p>
        {isKo
          ? '실험설계(Experimental Design)는 독립변인(Independent Variable)을 체계적으로 조작(manipulation)하여 종속변인(Dependent Variable)에 미치는 효과를 검증하는 연구 방법입니다. 실험의 핵심 목적은 변인 간의 인과관계(Causal Relationship)를 규명하는 것이며, 이를 위해 외생변인(Extraneous Variable)을 통제하는 것이 필수적입니다.'
          : 'Experimental design is a research method that systematically manipulates an independent variable to test its effect on a dependent variable. The core purpose of an experiment is to establish causal relationships between variables, and controlling extraneous variables is essential to achieve this.'}
      </p>
      <p>
        {isKo
          ? '실험설계의 세 가지 핵심 요소는 (1) 독립변인의 조작, (2) 무작위 배정(Random Assignment), (3) 외생변인의 통제입니다. 이 세 요소가 모두 충족될 때 순수실험(True Experiment)이라고 부르며, 가장 강력한 인과적 추론이 가능합니다.'
          : 'The three key elements of experimental design are (1) manipulation of the independent variable, (2) random assignment, and (3) control of extraneous variables. When all three are present, the design is called a true experiment, enabling the strongest causal inferences.'}
      </p>

      {/* Types of experimental designs */}
      <h3>{isKo ? '실험설계의 유형' : 'Types of Experimental Designs'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '유형' : 'Type'}</th>
              <th>{isKo ? '특징' : 'Characteristics'}</th>
              <th>{isKo ? '예시' : 'Example'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '순수실험 (True Experiment)' : 'True Experiment'}</strong></td>
              <td>{isKo ? '무작위 배정 + 통제집단 + 독립변인 조작' : 'Random assignment + Control group + IV manipulation'}</td>
              <td>{isKo ? '무작위 통제 시험(RCT): 신약 효과 검증' : 'Randomized Controlled Trial (RCT): Testing drug efficacy'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '준실험 (Quasi-Experiment)' : 'Quasi-Experiment'}</strong></td>
              <td>{isKo ? '무작위 배정 없이 독립변인 조작 + 비교집단 사용' : 'IV manipulation without random assignment + Comparison group'}</td>
              <td>{isKo ? '교육 프로그램 효과를 기존 학급 간 비교' : 'Comparing education program effects across existing classes'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '원시실험 (Pre-Experiment)' : 'Pre-Experiment'}</strong></td>
              <td>{isKo ? '무작위 배정 없음, 통제집단 부재 또는 불완전' : 'No random assignment, absent or incomplete control group'}</td>
              <td>{isKo ? '단일 집단 사전-사후 검사 설계' : 'One-group pretest-posttest design'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* True experimental designs */}
      <h3>{isKo ? '순수실험설계의 주요 유형' : 'Major True Experimental Designs'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '사전-사후 통제집단 설계 (Pretest-Posttest Control Group Design)' : 'Pretest-Posttest Control Group Design'}</strong>{' '}
          {isKo
            ? '– 실험집단과 통제집단 모두에 사전검사와 사후검사를 실시합니다. 무작위 배정으로 집단 동질성을 확보하고, 사전검사로 기초선을 확인합니다.'
            : '– Both experimental and control groups receive pretest and posttest. Random assignment ensures group equivalence, and the pretest establishes a baseline.'}
        </li>
        <li>
          <strong>{isKo ? '사후 통제집단 설계 (Posttest-Only Control Group Design)' : 'Posttest-Only Control Group Design'}</strong>{' '}
          {isKo
            ? '– 사전검사 없이 사후검사만 실시합니다. 사전검사의 민감화 효과(Testing Effect)를 방지할 수 있으며, 무작위 배정이 집단 동질성을 보장합니다.'
            : '– Only a posttest is administered without a pretest. This prevents testing effects (sensitization), and random assignment guarantees group equivalence.'}
        </li>
        <li>
          <strong>{isKo ? '솔로몬 4집단 설계 (Solomon Four-Group Design)' : 'Solomon Four-Group Design'}</strong>{' '}
          {isKo
            ? '– 사전검사의 효과를 체계적으로 통제할 수 있는 가장 엄격한 실험설계입니다. 4개 집단(사전검사 유/무 × 처치 유/무)을 사용합니다.'
            : '– The most rigorous experimental design that systematically controls for pretest effects. It uses four groups (pretest yes/no × treatment yes/no).'}
        </li>
      </ul>

      {/* Between vs within subjects */}
      <h3>{isKo ? '피험자 간 설계 vs 피험자 내 설계' : 'Between-Subjects vs. Within-Subjects Design'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '구분' : 'Feature'}</th>
              <th>{isKo ? '피험자 간 설계 (Between-Subjects)' : 'Between-Subjects'}</th>
              <th>{isKo ? '피험자 내 설계 (Within-Subjects)' : 'Within-Subjects'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '배정' : 'Assignment'}</td>
              <td>{isKo ? '각 참여자가 하나의 조건에만 참여' : 'Each participant in only one condition'}</td>
              <td>{isKo ? '각 참여자가 모든 조건에 참여' : 'Each participant in all conditions'}</td>
            </tr>
            <tr>
              <td>{isKo ? '장점' : 'Advantage'}</td>
              <td>{isKo ? '이월효과(Carryover Effect) 없음' : 'No carryover effects'}</td>
              <td>{isKo ? '개인차 통제, 적은 표본 필요' : 'Controls individual differences, fewer participants needed'}</td>
            </tr>
            <tr>
              <td>{isKo ? '단점' : 'Disadvantage'}</td>
              <td>{isKo ? '많은 참여자 필요, 개인차 문제' : 'More participants needed, individual difference issues'}</td>
              <td>{isKo ? '순서효과, 학습효과, 피로효과' : 'Order effects, learning effects, fatigue effects'}</td>
            </tr>
            <tr>
              <td>{isKo ? '통제 방법' : 'Control Method'}</td>
              <td>{isKo ? '무작위 배정' : 'Random assignment'}</td>
              <td>{isKo ? '역균형화(Counterbalancing)' : 'Counterbalancing'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Internal and external validity */}
      <h3>{isKo ? '내적 타당도와 외적 타당도' : 'Internal and External Validity'}</h3>
      <p>
        {isKo
          ? '실험연구의 질은 내적 타당도(Internal Validity)와 외적 타당도(External Validity)로 평가됩니다. 내적 타당도는 관찰된 효과가 실제로 독립변인에 의한 것인지를 나타내며, 외적 타당도는 연구 결과가 다른 상황, 집단, 시간에도 적용 가능한지를 나타냅니다.'
          : 'The quality of experimental research is evaluated by internal validity and external validity. Internal validity indicates whether the observed effect is truly caused by the independent variable, while external validity indicates whether the findings can be applied to other settings, populations, and times.'}
      </p>
      <p>
        <strong>{isKo ? '내적 타당도의 위협 요인 (Campbell & Stanley, 1963):' : 'Threats to Internal Validity (Campbell & Stanley, 1963):'}</strong>
      </p>
      <ul>
        <li><strong>{isKo ? '역사 (History)' : 'History'}</strong> – {isKo ? '실험 기간 중 외부 사건이 결과에 영향' : 'External events during the experiment affect results'}</li>
        <li><strong>{isKo ? '성숙 (Maturation)' : 'Maturation'}</strong> – {isKo ? '시간 경과에 따른 참여자의 자연적 변화' : 'Natural changes in participants over time'}</li>
        <li><strong>{isKo ? '검사 (Testing)' : 'Testing'}</strong> – {isKo ? '사전검사가 사후검사 결과에 영향' : 'Pretest influences posttest performance'}</li>
        <li><strong>{isKo ? '도구 (Instrumentation)' : 'Instrumentation'}</strong> – {isKo ? '측정 도구의 변화가 결과에 영향' : 'Changes in the measurement instrument affect results'}</li>
        <li><strong>{isKo ? '통계적 회귀 (Statistical Regression)' : 'Statistical Regression'}</strong> – {isKo ? '극단값이 평균으로 회귀하는 현상' : 'Extreme scores regress toward the mean'}</li>
        <li><strong>{isKo ? '선발 (Selection)' : 'Selection'}</strong> – {isKo ? '집단 간 체계적 차이로 인한 편향' : 'Bias due to systematic differences between groups'}</li>
        <li><strong>{isKo ? '탈락 (Mortality/Attrition)' : 'Mortality/Attrition'}</strong> – {isKo ? '참여자의 중도 탈락이 결과에 영향' : 'Participant dropout affects results'}</li>
      </ul>
      <p>
        <strong>{isKo ? '외적 타당도의 위협 요인:' : 'Threats to External Validity:'}</strong>
      </p>
      <ul>
        <li><strong>{isKo ? '표본의 대표성 부족' : 'Lack of Sample Representativeness'}</strong> – {isKo ? '표본이 모집단을 적절히 대표하지 못함' : 'Sample does not adequately represent the population'}</li>
        <li><strong>{isKo ? '실험 환경의 인위성' : 'Artificiality of Experimental Setting'}</strong> – {isKo ? '실험실 환경이 실제 상황과 다름' : 'Laboratory conditions differ from real-world situations'}</li>
        <li><strong>{isKo ? '호손 효과 (Hawthorne Effect)' : 'Hawthorne Effect'}</strong> – {isKo ? '관찰되고 있다는 인식이 행동을 변화시킴' : 'Awareness of being observed changes behavior'}</li>
        <li><strong>{isKo ? '시대적 민감성' : 'Temporal Sensitivity'}</strong> – {isKo ? '연구 결과가 특정 시점에만 해당될 수 있음' : 'Findings may only apply to a specific time period'}</li>
      </ul>

      {/* Control techniques */}
      <h3>{isKo ? '외생변인 통제 기법' : 'Extraneous Variable Control Techniques'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '무작위 배정 (Random Assignment)' : 'Random Assignment'}</strong>{' '}
          {isKo
            ? '– 참여자를 실험집단과 통제집단에 무작위로 배정하여 집단 간 체계적 차이를 제거합니다. 가장 강력한 통제 방법입니다.'
            : '– Randomly assigns participants to experimental and control groups to eliminate systematic differences. The most powerful control method.'}
        </li>
        <li>
          <strong>{isKo ? '매칭 (Matching)' : 'Matching'}</strong>{' '}
          {isKo
            ? '– 특정 변인(예: 성별, 나이)에서 동질적인 참여자를 쌍으로 묶어 각각 다른 집단에 배정합니다.'
            : '– Pairs participants who are homogeneous on specific variables (e.g., gender, age) and assigns each to a different group.'}
        </li>
        <li>
          <strong>{isKo ? '블라인드 절차 (Blinding)' : 'Blinding'}</strong>{' '}
          {isKo
            ? '– 단일맹검(Single-blind): 참여자가 자신의 집단을 모름. 이중맹검(Double-blind): 참여자와 연구자 모두 집단 배정을 모름.'
            : '– Single-blind: Participants are unaware of their group. Double-blind: Both participants and researchers are unaware of group assignment.'}
        </li>
        <li>
          <strong>{isKo ? '통계적 통제 (Statistical Control)' : 'Statistical Control'}</strong>{' '}
          {isKo
            ? '– 공변량 분석(ANCOVA) 등을 사용하여 외생변인의 효과를 통계적으로 제거합니다.'
            : '– Uses techniques such as ANCOVA to statistically remove the effects of extraneous variables.'}
        </li>
      </ol>

      <TipBox type="tip" title={isKo ? '실험설계 선택 가이드' : 'Guide to Choosing an Experimental Design'}>
        <p>
          {isKo
            ? '무작위 배정이 가능하면 순수실험설계를, 윤리적/현실적 이유로 무작위 배정이 불가능하면 준실험설계를 선택하세요. 준실험에서는 내적 타당도의 위협을 최소화하기 위해 다중시계열설계(Multiple Time-Series Design)나 회귀불연속설계(Regression Discontinuity Design) 등의 강화된 설계를 고려하세요.'
            : 'Choose a true experimental design when random assignment is possible. When random assignment is not feasible for ethical or practical reasons, opt for a quasi-experimental design. In quasi-experiments, consider enhanced designs such as multiple time-series or regression discontinuity designs to minimize threats to internal validity.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 3 -- Survey Methods
   ================================================================= */
function SurveyMethodSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-clipboard-list" />
        {isKo ? '설문조사방법' : 'Survey Methods'}
      </h2>

      {/* Survey overview */}
      <h3>{isKo ? '설문조사의 개요' : 'Overview of Survey Research'}</h3>
      <p>
        {isKo
          ? '설문조사(Survey Research)는 양적연구에서 가장 널리 사용되는 자료 수집 방법입니다. 표준화된 설문지(Questionnaire)를 사용하여 대규모 표본에서 데이터를 수집하며, 태도, 의견, 행동, 인구통계학적 특성 등을 파악하는 데 효과적입니다. 설문조사는 비교적 짧은 시간에 많은 응답을 수집할 수 있어 비용 효율적이며, 통계적 일반화에 유리합니다.'
          : 'Survey research is the most widely used data collection method in quantitative research. Using standardized questionnaires, it collects data from large samples and is effective for assessing attitudes, opinions, behaviors, and demographic characteristics. Surveys are cost-effective because they can collect many responses in a relatively short time and are advantageous for statistical generalization.'}
      </p>

      {/* Survey types */}
      <h3>{isKo ? '설문조사의 유형' : 'Types of Surveys'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '유형' : 'Type'}</th>
              <th>{isKo ? '장점' : 'Advantages'}</th>
              <th>{isKo ? '단점' : 'Disadvantages'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '온라인 설문 (Online Survey)' : 'Online Survey'}</strong></td>
              <td>{isKo ? '비용 절감, 빠른 배포, 자동 데이터 입력, 광범위한 접근성' : 'Cost savings, rapid distribution, automatic data entry, wide accessibility'}</td>
              <td>{isKo ? '낮은 응답률, 표본 편향(디지털 접근성), 불성실 응답' : 'Low response rate, sample bias (digital access), careless responding'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '우편 설문 (Mail Survey)' : 'Mail Survey'}</strong></td>
              <td>{isKo ? '익명성 보장, 응답자 편의, 지리적 제약 적음' : 'Anonymity ensured, respondent convenience, fewer geographic constraints'}</td>
              <td>{isKo ? '낮은 응답률, 긴 소요 시간, 우편 비용' : 'Low response rate, long turnaround, postal costs'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '전화 설문 (Phone Survey)' : 'Phone Survey'}</strong></td>
              <td>{isKo ? '빠른 데이터 수집, 명확화 질문 가능, 중간 수준의 응답률' : 'Rapid data collection, clarification possible, moderate response rate'}</td>
              <td>{isKo ? '응답 거부 증가 추세, 복잡한 질문 어려움, 비언어적 단서 부재' : 'Increasing refusal rates, complex questions difficult, no nonverbal cues'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '대면 설문 (Face-to-Face)' : 'Face-to-Face Survey'}</strong></td>
              <td>{isKo ? '높은 응답률, 복잡한 질문 가능, 비언어적 단서 관찰' : 'High response rate, complex questions possible, nonverbal cue observation'}</td>
              <td>{isKo ? '높은 비용, 면접자 효과(Interviewer Effect), 시간 소요' : 'High cost, interviewer effect, time-consuming'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Questionnaire design */}
      <h3>{isKo ? '설문지 설계 원칙' : 'Questionnaire Design Principles'}</h3>
      <p>
        {isKo
          ? '좋은 설문지는 연구 목적에 부합하면서도 응답자가 쉽게 이해하고 정확하게 답할 수 있도록 설계되어야 합니다. 다음은 설문지 설계의 핵심 원칙입니다.'
          : 'A good questionnaire should align with the research purpose while being easy for respondents to understand and answer accurately. Below are the core principles of questionnaire design.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '명확하고 간결한 문항 작성' : 'Write Clear and Concise Items'}</strong>{' '}
          {isKo
            ? '– 이중 부정, 전문 용어, 모호한 표현을 피하고, 하나의 문항에 하나의 개념만 포함합니다(이중 질문 Double-Barreled Question 금지).'
            : '– Avoid double negatives, jargon, and ambiguous expressions. Include only one concept per item (no double-barreled questions).'}
        </li>
        <li>
          <strong>{isKo ? '유도 질문 회피' : 'Avoid Leading Questions'}</strong>{' '}
          {isKo
            ? '– 특정 방향의 응답을 유도하는 문항을 피합니다. 예: "대부분의 전문가들이 동의하는 X에 대해 어떻게 생각하십니까?"'
            : '– Avoid items that steer respondents toward a particular answer. Example: "What do you think about X, which most experts agree on?"'}
        </li>
        <li>
          <strong>{isKo ? '적절한 응답 척도 선택' : 'Choose Appropriate Response Scales'}</strong>{' '}
          {isKo
            ? '– 연구 목적에 맞는 척도(리커트, 의미분별 등)를 선택하고, 척도의 수준(명목, 서열, 등간, 비율)을 명확히 합니다.'
            : '– Select scales (Likert, semantic differential, etc.) appropriate for the research purpose and clarify the level of measurement (nominal, ordinal, interval, ratio).'}
        </li>
        <li>
          <strong>{isKo ? '논리적 문항 배열' : 'Logical Item Sequencing'}</strong>{' '}
          {isKo
            ? '– 쉬운 문항에서 어려운 문항으로, 일반적 문항에서 구체적 문항으로 배열합니다. 민감한 질문은 후반부에 배치합니다.'
            : '– Arrange items from easy to difficult, general to specific. Place sensitive questions toward the end.'}
        </li>
        <li>
          <strong>{isKo ? '적절한 설문 길이 유지' : 'Maintain Appropriate Survey Length'}</strong>{' '}
          {isKo
            ? '– 너무 긴 설문은 응답 피로와 불성실 응답을 유발합니다. 일반적으로 15-20분 이내의 완료 시간을 목표로 합니다.'
            : '– Excessively long surveys cause response fatigue and careless responding. Aim for completion within 15-20 minutes.'}
        </li>
      </ol>

      {/* Likert scale */}
      <h3>{isKo ? '리커트 척도 (Likert Scale)' : 'The Likert Scale'}</h3>
      <p>
        {isKo
          ? '리커트 척도는 Rensis Likert(1932)가 개발한 가장 대표적인 태도 측정 척도입니다. 응답자가 특정 진술에 대한 동의 정도를 표시하는 방식으로, 일반적으로 5점 또는 7점 척도가 사용됩니다.'
          : 'The Likert scale, developed by Rensis Likert (1932), is the most widely used attitude measurement scale. Respondents indicate their degree of agreement with a statement, typically on a 5-point or 7-point scale.'}
      </p>
      <p>
        {isKo
          ? '5점 리커트 척도 예시: ① 전혀 동의하지 않음 – ② 동의하지 않음 – ③ 보통 – ④ 동의함 – ⑤ 매우 동의함. 리커트 척도를 사용할 때는 다음 사항에 유의합니다: (1) 긍정 문항과 부정 문항(역코딩 문항)을 혼합하여 응답 편향을 줄입니다, (2) 중립 선택지("보통") 포함 여부를 검토합니다, (3) 척도 점수의 수준(서열 vs 등간)에 대한 학술적 논쟁을 인식합니다.'
          : '5-point Likert scale example: (1) Strongly Disagree – (2) Disagree – (3) Neutral – (4) Agree – (5) Strongly Agree. When using a Likert scale, note the following: (1) mix positively and negatively worded items (reverse-coded items) to reduce response bias, (2) consider whether to include a neutral option, (3) be aware of the academic debate about the measurement level (ordinal vs. interval) of scale scores.'}
      </p>

      {/* Semantic differential */}
      <h3>{isKo ? '의미분별 척도 (Semantic Differential Scale)' : 'Semantic Differential Scale'}</h3>
      <p>
        {isKo
          ? '의미분별 척도는 Osgood 등(1957)이 개발한 척도로, 양극단에 반대되는 형용사를 배치하여 응답자가 해당 개념에 대한 인식을 표시하는 방식입니다. 예를 들어, "이 서비스는..." 좋은 ___:___:___:___:___ 나쁜, 빠른 ___:___:___:___:___ 느린. 의미분별 척도는 브랜드 이미지, 제품 평가, 조직 분위기 측정 등에 효과적으로 활용됩니다.'
          : 'The semantic differential scale, developed by Osgood et al. (1957), places opposite adjectives at each end of a continuum and asks respondents to indicate their perception of a concept. For example, "This service is..." Good ___:___:___:___:___ Bad, Fast ___:___:___:___:___ Slow. The semantic differential is effectively used for brand image, product evaluation, and organizational climate measurement.'}
      </p>

      {/* Pilot testing */}
      <h3>{isKo ? '예비조사 (Pilot Testing)' : 'Pilot Testing'}</h3>
      <p>
        {isKo
          ? '본조사 실시 전에 반드시 예비조사(Pilot Test)를 수행해야 합니다. 예비조사는 소규모 표본(일반적으로 30-50명)을 대상으로 설문지의 문제점을 사전에 파악하고 수정하는 과정입니다.'
          : 'A pilot test must be conducted before the main survey. The pilot test is a process of identifying and correcting problems with the questionnaire using a small sample (typically 30-50 participants).'}
      </p>
      <ul>
        <li>{isKo ? '문항의 이해 가능성 및 모호성 확인' : 'Check item clarity and ambiguity'}</li>
        <li>{isKo ? '설문 완료 소요 시간 측정' : 'Measure time required for completion'}</li>
        <li>{isKo ? '척도의 신뢰도(Cronbach\'s Alpha) 예비 분석' : 'Preliminary reliability analysis (Cronbach\'s Alpha)'}</li>
        <li>{isKo ? '응답 분포의 정상성 및 천장/바닥 효과 확인' : 'Check normality of response distribution and ceiling/floor effects'}</li>
        <li>{isKo ? '설문 흐름과 논리적 일관성 검증' : 'Verify survey flow and logical consistency'}</li>
      </ul>

      <TipBox type="important" title={isKo ? '응답률 향상 전략' : 'Strategies to Improve Response Rate'}>
        <p>
          {isKo
            ? '설문조사의 응답률은 연구 결과의 대표성과 직결됩니다. 응답률을 높이기 위해: (1) 설문 목적과 소요 시간을 명확히 안내합니다, (2) 익명성과 비밀보장을 강조합니다, (3) 적절한 인센티브를 제공합니다, (4) 후속 알림(Follow-up Reminder)을 보냅니다, (5) 모바일 친화적 설문 플랫폼을 사용합니다. Dillman(2014)의 Tailored Design Method는 체계적인 응답률 향상 전략을 제시합니다.'
            : 'The response rate of a survey is directly related to the representativeness of the results. To increase the response rate: (1) clearly communicate the survey purpose and expected duration, (2) emphasize anonymity and confidentiality, (3) provide appropriate incentives, (4) send follow-up reminders, (5) use a mobile-friendly survey platform. Dillman\'s (2014) Tailored Design Method provides a systematic strategy for improving response rates.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 4 -- Sampling and Sample Size
   ================================================================= */
function SamplingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-users" />
        {isKo ? '표본추출과 표본크기' : 'Sampling and Sample Size'}
      </h2>

      {/* Sampling overview */}
      <h3>{isKo ? '표본추출의 개념' : 'The Concept of Sampling'}</h3>
      <p>
        {isKo
          ? '표본추출(Sampling)은 연구 대상인 모집단(Population)에서 일부를 선택하여 표본(Sample)을 구성하는 과정입니다. 모집단 전체를 조사하는 전수조사(Census)는 비용과 시간의 제약으로 대부분의 연구에서 현실적으로 불가능하므로, 모집단을 대표할 수 있는 표본을 추출하여 연구를 수행합니다. 표본의 대표성(Representativeness)이 확보되면, 표본에서 얻은 결과를 모집단에 일반화할 수 있습니다.'
          : 'Sampling is the process of selecting a subset from the target population to form a sample. Since a census surveying the entire population is impractical for most studies due to cost and time constraints, research is conducted by drawing a sample that can represent the population. When sample representativeness is secured, results obtained from the sample can be generalized to the population.'}
      </p>

      {/* Probability sampling */}
      <h3>{isKo ? '확률 표본추출 (Probability Sampling)' : 'Probability Sampling'}</h3>
      <p>
        {isKo
          ? '확률 표본추출은 모집단의 모든 구성원이 표본에 선택될 확률이 알려져 있고 0보다 큰 표본추출 방법입니다. 통계적 일반화를 가능하게 하는 유일한 방법이며, 양적연구에서 이상적인 표본추출 방식으로 간주됩니다.'
          : 'Probability sampling is a method in which every member of the population has a known, non-zero chance of being selected. It is the only approach that enables statistical generalization and is considered the ideal sampling method in quantitative research.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '단순무작위 표본추출 (Simple Random Sampling)' : 'Simple Random Sampling'}</strong>{' '}
          {isKo
            ? '– 모집단의 모든 구성원이 동일한 확률로 선택됩니다. 난수표나 컴퓨터 프로그램을 사용하여 무작위로 추출합니다. 모집단 목록(Sampling Frame)이 필요하며, 대규모 모집단에서 비효율적일 수 있습니다.'
            : '– Every member of the population has an equal probability of being selected. Selection is made randomly using random number tables or computer programs. Requires a sampling frame, and may be inefficient for large populations.'}
        </li>
        <li>
          <strong>{isKo ? '체계적 표본추출 (Systematic Sampling)' : 'Systematic Sampling'}</strong>{' '}
          {isKo
            ? '– 모집단 목록에서 일정 간격(k번째)으로 표본을 추출합니다. 표본추출 간격(k) = 모집단 크기(N) / 표본 크기(n). 실행이 간단하지만, 목록에 주기적 패턴이 있으면 편향이 발생할 수 있습니다.'
            : '– Selects every k-th element from the population list. Sampling interval (k) = Population size (N) / Sample size (n). Simple to implement, but bias can occur if the list has periodic patterns.'}
        </li>
        <li>
          <strong>{isKo ? '층화 표본추출 (Stratified Sampling)' : 'Stratified Sampling'}</strong>{' '}
          {isKo
            ? '– 모집단을 동질적인 하위집단(층, Stratum)으로 나눈 후, 각 층에서 표본을 추출합니다. 비례층화(각 층의 비율에 비례하여 추출)와 불비례층화(소수 집단을 과대 추출)가 있습니다. 하위집단 간 비교가 필요할 때 유용합니다.'
            : '– Divides the population into homogeneous subgroups (strata) and draws samples from each. Includes proportionate stratification (sampling proportional to stratum size) and disproportionate stratification (oversampling minority groups). Useful when comparisons between subgroups are needed.'}
        </li>
        <li>
          <strong>{isKo ? '군집 표본추출 (Cluster Sampling)' : 'Cluster Sampling'}</strong>{' '}
          {isKo
            ? '– 모집단을 자연적으로 형성된 군집(학교, 지역, 조직 등)으로 나누고, 무작위로 군집을 선택한 후 해당 군집의 전체 또는 일부를 조사합니다. 다단계 군집 표본추출(Multi-stage Cluster Sampling)은 여러 단계에 걸쳐 추출하는 방식입니다. 표본추출 프레임이 없을 때 유용하지만, 표본추출 오차가 클 수 있습니다.'
            : '– Divides the population into naturally occurring clusters (schools, regions, organizations) and randomly selects clusters, then surveys all or some members within the selected clusters. Multi-stage cluster sampling extracts at multiple stages. Useful when a sampling frame is unavailable, but sampling error may be larger.'}
        </li>
      </ul>

      {/* Non-probability sampling */}
      <h3>{isKo ? '비확률 표본추출 (Non-Probability Sampling)' : 'Non-Probability Sampling'}</h3>
      <p>
        {isKo
          ? '비확률 표본추출은 모집단 구성원의 선택 확률이 알려지지 않은 방법입니다. 확률 표본추출보다 편리하고 경제적이지만, 표본의 대표성을 보장할 수 없으므로 통계적 일반화에 제한이 있습니다.'
          : 'Non-probability sampling is a method where the selection probability of population members is unknown. While more convenient and economical than probability sampling, it cannot guarantee sample representativeness, limiting statistical generalization.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '편의 표본추출 (Convenience Sampling)' : 'Convenience Sampling'}</strong>{' '}
          {isKo
            ? '– 접근이 용이한 대상을 표본으로 선택합니다. 가장 간편하지만 편향 위험이 큽니다. 탐색적 연구나 예비조사에서 주로 사용됩니다.'
            : '– Selects readily accessible subjects. The easiest method but carries the highest risk of bias. Primarily used in exploratory research or pilot studies.'}
        </li>
        <li>
          <strong>{isKo ? '목적적 표본추출 (Purposive Sampling)' : 'Purposive Sampling'}</strong>{' '}
          {isKo
            ? '– 연구자의 판단에 따라 특정 기준을 충족하는 대상을 의도적으로 선택합니다. 전문가 조사나 특정 집단 연구에 유용합니다.'
            : '– The researcher intentionally selects subjects who meet specific criteria based on judgment. Useful for expert surveys or studies of specific groups.'}
        </li>
        <li>
          <strong>{isKo ? '눈덩이 표본추출 (Snowball Sampling)' : 'Snowball Sampling'}</strong>{' '}
          {isKo
            ? '– 초기 참여자가 다른 잠재적 참여자를 소개하는 방식으로 표본을 확대합니다. 접근하기 어려운 모집단(은폐 집단)을 연구할 때 유용합니다.'
            : '– Initial participants refer other potential participants, expanding the sample. Useful when studying hard-to-reach (hidden) populations.'}
        </li>
        <li>
          <strong>{isKo ? '할당 표본추출 (Quota Sampling)' : 'Quota Sampling'}</strong>{' '}
          {isKo
            ? '– 모집단의 특성(성별, 연령 등) 비율에 맞추어 할당량을 정한 후, 비확률적 방법으로 표본을 채웁니다. 층화표본추출의 비확률적 대안입니다.'
            : '– Sets quotas based on population characteristics (gender, age, etc.) and fills them using non-probability methods. A non-probability alternative to stratified sampling.'}
        </li>
      </ul>

      {/* Sample size determination */}
      <h3>{isKo ? '표본크기 결정' : 'Sample Size Determination'}</h3>
      <p>
        {isKo
          ? '적절한 표본크기는 연구의 통계적 검정력(Statistical Power)과 직결됩니다. 표본이 너무 작으면 실제 존재하는 효과를 발견하지 못하고(제2종 오류), 너무 크면 자원이 낭비되고 사소한 차이도 통계적으로 유의하게 나타날 수 있습니다.'
          : 'Appropriate sample size is directly tied to the statistical power of the study. If the sample is too small, real effects may go undetected (Type II error); if too large, resources are wasted and trivial differences may appear statistically significant.'}
      </p>
      <p>
        {isKo
          ? '표본크기 결정에 영향을 미치는 주요 요인은 다음과 같습니다: (1) 유의수준(Alpha, 일반적으로 .05), (2) 통계적 검정력(Power, 일반적으로 .80), (3) 효과크기(Effect Size: 작은 효과 d=0.2, 중간 효과 d=0.5, 큰 효과 d=0.8), (4) 분석 방법의 종류.'
          : 'Key factors affecting sample size determination include: (1) significance level (Alpha, typically .05), (2) statistical power (typically .80), (3) effect size (small d=0.2, medium d=0.5, large d=0.8), and (4) type of analysis method.'}
      </p>
      <p>
        <strong>{isKo ? 'G*Power를 활용한 표본크기 계산:' : 'Sample Size Calculation Using G*Power:'}</strong>{' '}
        {isKo
          ? 'G*Power는 Heinrich Heine University에서 개발한 무료 통계적 검정력 분석 소프트웨어입니다. 다양한 통계 기법(t-test, ANOVA, 회귀분석, 카이제곱 등)에 대해 사전 검정력 분석(a priori power analysis)을 수행하여 필요한 최소 표본크기를 산출할 수 있습니다.'
          : 'G*Power is free statistical power analysis software developed by Heinrich Heine University. It can perform a priori power analysis for various statistical techniques (t-test, ANOVA, regression, chi-square, etc.) to calculate the minimum required sample size.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '분석 방법' : 'Analysis Method'}</th>
              <th>{isKo ? '효과크기(중간)' : 'Effect Size (Medium)'}</th>
              <th>{isKo ? '권장 최소 표본크기' : 'Recommended Min. Sample'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '독립 t-검정' : 'Independent t-test'}</td>
              <td>d = 0.5</td>
              <td>{isKo ? '집단당 약 64명 (총 128명)' : 'About 64 per group (128 total)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '일원분산분석 (3집단)' : 'One-way ANOVA (3 groups)'}</td>
              <td>f = 0.25</td>
              <td>{isKo ? '집단당 약 53명 (총 159명)' : 'About 53 per group (159 total)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '다중회귀분석 (5개 예측변인)' : 'Multiple Regression (5 predictors)'}</td>
              <td>f{'\u00B2'} = 0.15</td>
              <td>{isKo ? '약 92명' : 'About 92'}</td>
            </tr>
            <tr>
              <td>{isKo ? '카이제곱 검정 (2×2)' : 'Chi-square test (2×2)'}</td>
              <td>w = 0.3</td>
              <td>{isKo ? '약 88명' : 'About 88'}</td>
            </tr>
            <tr>
              <td>{isKo ? '구조방정식 모형 (SEM)' : 'SEM'}</td>
              <td>–</td>
              <td>{isKo ? '최소 200명 이상 권장' : 'At least 200 recommended'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Sampling error */}
      <h3>{isKo ? '표본추출 오차' : 'Sampling Error'}</h3>
      <p>
        {isKo
          ? '표본추출 오차(Sampling Error)는 표본 통계치와 모집단 모수 사이의 차이를 의미합니다. 표본추출 오차는 불가피하지만, 표본크기를 늘리고 적절한 표본추출 방법을 사용하여 최소화할 수 있습니다. 표본추출 오차와 구별해야 하는 것이 비표본추출 오차(Non-sampling Error)로, 이는 측정 도구의 문제, 응답자의 불성실 응답, 데이터 입력 오류, 무응답 편향 등에서 발생합니다.'
          : 'Sampling error is the difference between a sample statistic and the population parameter. While sampling error is inevitable, it can be minimized by increasing sample size and using appropriate sampling methods. Distinct from sampling error is non-sampling error, which arises from measurement instrument problems, careless responding, data entry errors, and non-response bias.'}
      </p>

      <TipBox type="tip" title={isKo ? '표본크기 결정 실무 팁' : 'Practical Tips for Sample Size Determination'}>
        <p>
          {isKo
            ? '실제 연구에서는 계산된 최소 표본크기에 10-20%의 여유분을 추가하는 것이 좋습니다. 이는 불성실 응답, 결측값, 예상보다 낮은 응답률에 대비하기 위함입니다. 또한 구조방정식 모형(SEM)이나 요인분석을 계획하는 경우, 문항 수의 5-10배에 해당하는 표본크기를 확보하는 것이 일반적인 가이드라인입니다.'
            : 'In practice, add a 10-20% buffer to the calculated minimum sample size. This accounts for careless responses, missing data, and lower-than-expected response rates. Additionally, for SEM or factor analysis, a common guideline is to secure a sample size 5-10 times the number of items.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 5 -- Quantitative Data Analysis
   ================================================================= */
function DataAnalysisSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-chart-bar" />
        {isKo ? '양적자료분석' : 'Quantitative Data Analysis'}
      </h2>

      {/* Descriptive statistics */}
      <h3>{isKo ? '기술통계 (Descriptive Statistics)' : 'Descriptive Statistics'}</h3>
      <p>
        {isKo
          ? '기술통계는 수집된 데이터의 특성을 요약하고 기술하는 통계 방법입니다. 데이터의 전반적인 경향과 분포를 파악하는 데 사용되며, 추론통계 분석에 앞서 반드시 수행해야 합니다.'
          : 'Descriptive statistics are statistical methods that summarize and describe the characteristics of collected data. They are used to understand overall tendencies and distributions and must be conducted before inferential statistical analysis.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '중심경향 측도' : 'Measures of Central Tendency'}</strong>{' '}
          {isKo
            ? '– 평균(Mean), 중앙값(Median), 최빈값(Mode). 평균은 정규분포 데이터에, 중앙값은 극단값이 있는 편향된 분포에 적합합니다.'
            : '– Mean, Median, Mode. The mean is suitable for normally distributed data, and the median is preferred for skewed distributions with extreme values.'}
        </li>
        <li>
          <strong>{isKo ? '산포도 측도' : 'Measures of Dispersion'}</strong>{' '}
          {isKo
            ? '– 범위(Range), 분산(Variance), 표준편차(Standard Deviation). 데이터의 흩어진 정도를 나타냅니다. 표준편차가 작을수록 데이터가 평균에 가까이 모여 있습니다.'
            : '– Range, Variance, Standard Deviation. These indicate the degree to which data are spread out. A smaller standard deviation means data points are closer to the mean.'}
        </li>
        <li>
          <strong>{isKo ? '분포 형태' : 'Distribution Shape'}</strong>{' '}
          {isKo
            ? '– 왜도(Skewness): 분포의 비대칭 정도. 첨도(Kurtosis): 분포의 뾰족한 정도. 정규성 검정(Shapiro-Wilk, Kolmogorov-Smirnov)으로 확인합니다.'
            : '– Skewness: degree of asymmetry. Kurtosis: degree of peakedness. Verified through normality tests (Shapiro-Wilk, Kolmogorov-Smirnov).'}
        </li>
      </ul>

      {/* Inferential statistics */}
      <h3>{isKo ? '추론통계 (Inferential Statistics)' : 'Inferential Statistics'}</h3>
      <p>
        {isKo
          ? '추론통계는 표본 데이터를 기반으로 모집단에 대한 추론을 수행하는 통계 방법입니다. 가설 검정(Hypothesis Testing)과 신뢰구간 추정(Confidence Interval Estimation)이 핵심 기법이며, 연구 가설의 지지 여부를 통계적으로 판단합니다.'
          : 'Inferential statistics are statistical methods that draw inferences about the population based on sample data. Hypothesis testing and confidence interval estimation are the core techniques, used to statistically determine whether research hypotheses are supported.'}
      </p>

      {/* t-test */}
      <h3>{isKo ? 't-검정 (t-test)' : 't-test'}</h3>
      <p>
        {isKo
          ? 't-검정은 두 집단의 평균 차이를 검정하는 데 사용되는 가장 기본적인 추론통계 기법입니다.'
          : 'The t-test is the most fundamental inferential statistical technique used to test the difference between two group means.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '독립표본 t-검정 (Independent-Samples t-test)' : 'Independent-Samples t-test'}</strong>{' '}
          {isKo
            ? '– 서로 다른 두 집단의 평균을 비교합니다. 예: 남성과 여성의 직무만족도 차이 비교. 가정: 정규성, 등분산성.'
            : '– Compares the means of two different groups. Example: comparing job satisfaction between men and women. Assumptions: normality, homogeneity of variances.'}
        </li>
        <li>
          <strong>{isKo ? '대응표본 t-검정 (Paired-Samples t-test)' : 'Paired-Samples t-test'}</strong>{' '}
          {isKo
            ? '– 동일한 집단의 사전-사후 평균을 비교합니다. 예: 교육 프로그램 참여 전후의 지식 수준 변화. 가정: 차이 점수의 정규성.'
            : '– Compares pre- and post-treatment means of the same group. Example: change in knowledge levels before and after a training program. Assumption: normality of difference scores.'}
        </li>
        <li>
          <strong>{isKo ? '단일표본 t-검정 (One-Sample t-test)' : 'One-Sample t-test'}</strong>{' '}
          {isKo
            ? '– 하나의 표본 평균을 특정 기준값(모집단 평균)과 비교합니다. 예: 학생들의 평균 점수가 70점과 다른지 검정.'
            : '– Compares a single sample mean to a specific criterion value (population mean). Example: testing whether student average scores differ from 70.'}
        </li>
      </ul>

      {/* ANOVA */}
      <h3>{isKo ? '분산분석 (ANOVA)' : 'Analysis of Variance (ANOVA)'}</h3>
      <p>
        {isKo
          ? 'ANOVA(Analysis of Variance)는 세 개 이상의 집단 평균을 동시에 비교하는 기법입니다. 전체적으로 집단 간 차이가 유의한지를 먼저 검정(Omnibus F-test)한 후, 유의하면 사후검정(Post-hoc Test)으로 어떤 집단 간에 차이가 있는지를 확인합니다.'
          : 'ANOVA (Analysis of Variance) is a technique for simultaneously comparing the means of three or more groups. It first tests whether there is an overall significant difference between groups (Omnibus F-test), then if significant, post-hoc tests identify which specific groups differ.'}
      </p>
      <ul>
        <li><strong>{isKo ? '일원분산분석 (One-way ANOVA)' : 'One-way ANOVA'}</strong> – {isKo ? '하나의 독립변인, 세 개 이상의 수준' : 'One independent variable with three or more levels'}</li>
        <li><strong>{isKo ? '이원분산분석 (Two-way ANOVA)' : 'Two-way ANOVA'}</strong> – {isKo ? '두 개의 독립변인, 주효과와 상호작용효과 검정' : 'Two independent variables, tests main effects and interaction effects'}</li>
        <li><strong>{isKo ? '반복측정 분산분석 (Repeated Measures ANOVA)' : 'Repeated Measures ANOVA'}</strong> – {isKo ? '동일한 참여자를 여러 시점에서 반복 측정' : 'The same participants measured at multiple time points'}</li>
        <li><strong>{isKo ? '공분산분석 (ANCOVA)' : 'ANCOVA'}</strong> – {isKo ? '공변량(Covariate)의 효과를 통제한 후 집단 간 차이 비교' : 'Compares group differences after controlling for the effect of a covariate'}</li>
      </ul>
      <p>
        {isKo
          ? '주요 사후검정 방법: Tukey HSD (집단 크기가 동일할 때), Scheffé (집단 크기가 다를 때), Bonferroni (보수적 교정), Games-Howell (등분산 가정 위반 시).'
          : 'Major post-hoc methods: Tukey HSD (equal group sizes), Scheffé (unequal group sizes), Bonferroni (conservative correction), Games-Howell (when homogeneity of variance is violated).'}
      </p>

      {/* Chi-square */}
      <h3>{isKo ? '카이제곱 검정 (Chi-Square Test)' : 'Chi-Square Test'}</h3>
      <p>
        {isKo
          ? '카이제곱 검정은 범주형 변인(명목 또는 서열 척도) 간의 관계를 검정하는 비모수적 방법입니다. 관찰빈도와 기대빈도 간의 차이를 비교하여 변인 간의 독립성 또는 적합도를 판단합니다.'
          : 'The chi-square test is a non-parametric method for testing relationships between categorical variables (nominal or ordinal scales). It compares observed frequencies with expected frequencies to assess independence or goodness of fit between variables.'}
      </p>
      <ul>
        <li><strong>{isKo ? '독립성 검정 (Test of Independence)' : 'Test of Independence'}</strong> – {isKo ? '두 범주형 변인 간의 관련성 검정. 예: 성별과 구매 선호도 간의 관계' : 'Tests the association between two categorical variables. Example: relationship between gender and purchase preference'}</li>
        <li><strong>{isKo ? '적합도 검정 (Goodness-of-Fit Test)' : 'Goodness-of-Fit Test'}</strong> – {isKo ? '관찰된 분포가 이론적 기대 분포와 일치하는지 검정' : 'Tests whether an observed distribution matches a theoretical expected distribution'}</li>
      </ul>

      {/* Correlation and Regression */}
      <h3>{isKo ? '상관분석과 회귀분석' : 'Correlation and Regression Analysis'}</h3>
      <p>
        {isKo
          ? '상관분석(Correlation Analysis)은 두 연속형 변인 간의 선형적 관계의 강도와 방향을 측정합니다. Pearson 상관계수(r)는 -1에서 +1 사이의 값을 가지며, |r| < 0.3은 약한 상관, 0.3 ≤ |r| < 0.7은 중간 상관, |r| ≥ 0.7은 강한 상관으로 해석됩니다. 주의할 점은 상관관계가 인과관계를 의미하지 않는다는 것입니다.'
          : 'Correlation analysis measures the strength and direction of the linear relationship between two continuous variables. The Pearson correlation coefficient (r) ranges from -1 to +1, with |r| < 0.3 interpreted as weak, 0.3 ≤ |r| < 0.7 as moderate, and |r| ≥ 0.7 as strong correlation. Importantly, correlation does not imply causation.'}
      </p>
      <p>
        {isKo
          ? '회귀분석(Regression Analysis)은 하나 이상의 독립변인이 종속변인에 미치는 영향을 분석하는 기법입니다. 단순회귀분석(Simple Regression)은 하나의 독립변인, 다중회귀분석(Multiple Regression)은 두 개 이상의 독립변인을 사용합니다. 다중회귀분석에서는 다중공선성(Multicollinearity), VIF(분산팽창계수 < 10), Durbin-Watson 통계량(잔차의 독립성) 등을 반드시 확인해야 합니다.'
          : 'Regression analysis is a technique for analyzing the effect of one or more independent variables on a dependent variable. Simple regression uses one independent variable, and multiple regression uses two or more. In multiple regression, multicollinearity, VIF (Variance Inflation Factor < 10), and the Durbin-Watson statistic (residual independence) must be checked.'}
      </p>

      {/* Factor analysis */}
      <h3>{isKo ? '요인분석 (Factor Analysis)' : 'Factor Analysis'}</h3>
      <p>
        {isKo
          ? '요인분석은 많은 수의 관측 변인들 속에 잠재하는 소수의 공통 요인(Factor)을 추출하는 통계 기법입니다. 측정 도구의 구성타당도(Construct Validity)를 검증하고, 변인의 차원을 축소하는 데 사용됩니다.'
          : 'Factor analysis is a statistical technique that extracts a small number of latent common factors from a large number of observed variables. It is used to verify the construct validity of measurement instruments and to reduce variable dimensions.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '탐색적 요인분석 (EFA)' : 'Exploratory Factor Analysis (EFA)'}</strong>{' '}
          {isKo
            ? '– 변인들의 요인 구조를 탐색적으로 파악합니다. KMO(Kaiser-Meyer-Olkin) 값 > 0.6, Bartlett 구형성 검정 유의, 고유값(Eigenvalue) > 1, 요인적재량(Factor Loading) > 0.4를 기준으로 합니다.'
            : '– Explores the factor structure of variables. Criteria include KMO > 0.6, significant Bartlett\'s test of sphericity, eigenvalue > 1, and factor loadings > 0.4.'}
        </li>
        <li>
          <strong>{isKo ? '확인적 요인분석 (CFA)' : 'Confirmatory Factor Analysis (CFA)'}</strong>{' '}
          {isKo
            ? '– 이론적으로 설정된 요인 구조를 데이터가 지지하는지 검증합니다. 모형적합도 지수(CFI > 0.9, RMSEA < 0.08, SRMR < 0.08)를 확인합니다.'
            : '– Tests whether data support a theoretically specified factor structure. Model fit indices are checked (CFI > 0.9, RMSEA < 0.08, SRMR < 0.08).'}
        </li>
      </ul>

      {/* SEM */}
      <h3>{isKo ? '구조방정식 모형 (SEM) 개요' : 'Structural Equation Modeling (SEM) Overview'}</h3>
      <p>
        {isKo
          ? '구조방정식 모형(Structural Equation Modeling, SEM)은 측정모형(CFA)과 구조모형(회귀/경로분석)을 동시에 추정하는 고급 통계 기법입니다. 잠재변인(Latent Variable) 간의 인과관계를 검증하며, 관측변인의 측정오차를 고려한다는 장점이 있습니다. 주요 소프트웨어로는 AMOS, LISREL, Mplus, lavaan(R 패키지) 등이 있습니다.'
          : 'Structural Equation Modeling (SEM) is an advanced statistical technique that simultaneously estimates measurement models (CFA) and structural models (regression/path analysis). It tests causal relationships among latent variables and accounts for measurement error in observed variables. Key software includes AMOS, LISREL, Mplus, and lavaan (R package).'}
      </p>

      {/* SPSS and R */}
      <h3>{isKo ? '주요 분석 도구: SPSS와 R' : 'Key Analysis Tools: SPSS and R'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '특성' : 'Feature'}</th>
              <th>SPSS</th>
              <th>R</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '인터페이스' : 'Interface'}</td>
              <td>{isKo ? 'GUI 기반 (메뉴 방식)' : 'GUI-based (menu-driven)'}</td>
              <td>{isKo ? '코드 기반 (스크립트)' : 'Code-based (scripting)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '비용' : 'Cost'}</td>
              <td>{isKo ? '유료 라이선스' : 'Paid license'}</td>
              <td>{isKo ? '무료 오픈소스' : 'Free open-source'}</td>
            </tr>
            <tr>
              <td>{isKo ? '학습 곡선' : 'Learning Curve'}</td>
              <td>{isKo ? '상대적으로 낮음' : 'Relatively low'}</td>
              <td>{isKo ? '상대적으로 높음' : 'Relatively high'}</td>
            </tr>
            <tr>
              <td>{isKo ? '확장성' : 'Extensibility'}</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td>{isKo ? '패키지를 통해 무한 확장 가능' : 'Infinitely extensible via packages'}</td>
            </tr>
            <tr>
              <td>{isKo ? '재현성' : 'Reproducibility'}</td>
              <td>{isKo ? 'Syntax 파일 사용 시 가능' : 'Possible using syntax files'}</td>
              <td>{isKo ? '코드 기반으로 재현성 우수' : 'Excellent due to code-based approach'}</td>
            </tr>
            <tr>
              <td>{isKo ? '주요 사용처' : 'Primary Use'}</td>
              <td>{isKo ? '사회과학, 경영학' : 'Social sciences, business'}</td>
              <td>{isKo ? '통계학, 데이터 사이언스, 생명과학' : 'Statistics, data science, life sciences'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important" title={isKo ? '통계 분석 선택 가이드' : 'Guide to Choosing Statistical Analysis'}>
        <p>
          {isKo
            ? '적절한 통계 분석 방법을 선택하려면 다음을 고려하세요: (1) 연구 질문의 유형(차이 검정 vs 관계 분석), (2) 독립변인과 종속변인의 수와 측정 수준(명목, 서열, 등간, 비율), (3) 정규성, 등분산성 등 통계적 가정의 충족 여부, (4) 표본크기의 적절성. 통계적 유의성(p-value)만이 아니라 효과크기(Effect Size)와 신뢰구간도 반드시 보고해야 합니다.'
            : 'To choose the appropriate statistical analysis, consider: (1) type of research question (difference testing vs. relationship analysis), (2) number and measurement level of independent and dependent variables (nominal, ordinal, interval, ratio), (3) whether statistical assumptions such as normality and homogeneity of variance are met, (4) adequacy of sample size. Report not only statistical significance (p-value) but also effect size and confidence intervals.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 6 -- Writing Quantitative Papers
   ================================================================= */
function PaperWritingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-pen-to-square" />
        {isKo ? '양적연구 논문작성' : 'Writing Quantitative Papers'}
      </h2>

      {/* Paper structure */}
      <h3>{isKo ? '양적연구 논문의 구조' : 'Structure of a Quantitative Research Paper'}</h3>
      <p>
        {isKo
          ? '양적연구 논문은 일반적으로 IMRaD(Introduction, Methods, Results, and Discussion) 구조를 따릅니다. 이 구조는 연구의 논리적 흐름을 체계적으로 제시하며, 대부분의 학술지에서 채택하고 있는 표준적인 형식입니다.'
          : 'Quantitative research papers generally follow the IMRaD (Introduction, Methods, Results, and Discussion) structure. This structure systematically presents the logical flow of research and is the standard format adopted by most academic journals.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '구성 요소' : 'Component'}</th>
              <th>{isKo ? '주요 내용' : 'Key Content'}</th>
              <th>{isKo ? '대략적 비중' : 'Approx. Proportion'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '서론 (Introduction)' : 'Introduction'}</strong></td>
              <td>{isKo ? '연구 배경, 연구 문제, 연구 목적, 연구 질문/가설' : 'Research background, problem, purpose, questions/hypotheses'}</td>
              <td>15-20%</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '문헌검토 (Literature Review)' : 'Literature Review'}</strong></td>
              <td>{isKo ? '이론적 틀, 선행연구 검토, 연구 모형, 가설 도출' : 'Theoretical framework, prior research review, research model, hypothesis derivation'}</td>
              <td>20-25%</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '연구방법 (Methodology)' : 'Methodology'}</strong></td>
              <td>{isKo ? '연구설계, 표본, 측정도구, 자료수집 절차, 분석 방법' : 'Research design, sample, instruments, data collection procedures, analysis methods'}</td>
              <td>15-20%</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '연구결과 (Results)' : 'Results'}</strong></td>
              <td>{isKo ? '기술통계, 측정모형 검증, 가설 검정 결과' : 'Descriptive statistics, measurement model validation, hypothesis test results'}</td>
              <td>20-25%</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '논의 및 결론 (Discussion)' : 'Discussion & Conclusion'}</strong></td>
              <td>{isKo ? '결과 해석, 이론적/실무적 시사점, 연구 한계, 향후 연구 제언' : 'Interpretation, theoretical/practical implications, limitations, future research suggestions'}</td>
              <td>15-20%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Introduction */}
      <h3>{isKo ? '서론 작성법' : 'How to Write the Introduction'}</h3>
      <p>
        {isKo
          ? '서론은 독자의 관심을 끌고 연구의 필요성을 설득력 있게 제시하는 부분입니다. 효과적인 서론은 "깔대기(Funnel)" 구조를 따릅니다: (1) 넓은 맥락에서 연구 주제를 소개하고, (2) 점차 범위를 좁혀 구체적인 연구 공백(Research Gap)을 제시하며, (3) 이 공백을 채우기 위한 본 연구의 목적과 연구 질문을 명시합니다.'
          : 'The introduction captures the reader\'s attention and persuasively presents the need for the study. An effective introduction follows a "funnel" structure: (1) introduce the research topic in a broad context, (2) gradually narrow to a specific research gap, and (3) state the purpose of the study and research questions to address the gap.'}
      </p>

      {/* Hypothesis writing */}
      <h3>{isKo ? '가설 작성법' : 'How to Write Hypotheses'}</h3>
      <p>
        {isKo
          ? '양적연구에서 가설(Hypothesis)은 변인 간의 예측된 관계를 진술한 것입니다. 좋은 가설은 다음 조건을 충족해야 합니다: (1) 검증 가능해야 합니다, (2) 변인 간의 관계를 명확하게 진술해야 합니다, (3) 이론적 근거에 기반해야 합니다.'
          : 'In quantitative research, a hypothesis is a statement of the predicted relationship between variables. A good hypothesis must: (1) be testable, (2) clearly state the relationship between variables, (3) be grounded in theoretical rationale.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '방향성 가설 (Directional Hypothesis)' : 'Directional Hypothesis'}</strong>{' '}
          {isKo
            ? '– 관계의 방향을 구체적으로 예측합니다. 예: "변혁적 리더십은 직무만족에 정(+)의 영향을 미칠 것이다."'
            : '– Predicts the specific direction of the relationship. Example: "Transformational leadership will have a positive (+) effect on job satisfaction."'}
        </li>
        <li>
          <strong>{isKo ? '비방향성 가설 (Non-directional Hypothesis)' : 'Non-directional Hypothesis'}</strong>{' '}
          {isKo
            ? '– 관계의 존재만 예측하고 방향은 명시하지 않습니다. 예: "성별에 따라 직무만족에 유의한 차이가 있을 것이다."'
            : '– Predicts the existence of a relationship without specifying direction. Example: "There will be a significant difference in job satisfaction by gender."'}
        </li>
        <li>
          <strong>{isKo ? '영가설 (Null Hypothesis, H₀)' : 'Null Hypothesis (H₀)'}</strong>{' '}
          {isKo
            ? '– 변인 간의 관계가 없다는 진술. 통계적 검정의 기각 대상이 됩니다. 예: "변혁적 리더십과 직무만족 간에는 유의한 관계가 없다."'
            : '– A statement that there is no relationship between variables. It is the target for statistical rejection. Example: "There is no significant relationship between transformational leadership and job satisfaction."'}
        </li>
      </ul>

      {/* APA format */}
      <h3>{isKo ? 'APA 형식 요약' : 'APA Format Summary'}</h3>
      <p>
        {isKo
          ? '사회과학 분야의 양적연구 논문은 주로 APA(American Psychological Association) 형식을 따릅니다. APA 7판(2020)의 주요 규정은 다음과 같습니다.'
          : 'Quantitative research papers in the social sciences primarily follow APA (American Psychological Association) format. Key rules from APA 7th edition (2020) include:'}
      </p>
      <ul>
        <li>{isKo ? '본문 내 인용: 저자-연도 방식. (Kim, 2020) 또는 Kim(2020)에 따르면...' : 'In-text citation: Author-date style. (Kim, 2020) or According to Kim (2020)...'}</li>
        <li>{isKo ? '참고문헌: 알파벳순 정렬, DOI 포함, Hanging indent 사용' : 'References: Alphabetical order, include DOI, use hanging indent'}</li>
        <li>{isKo ? '표: 표 번호(Table 1), 이탤릭 제목, 테두리 최소화(상단, 하단, 제목행 아래 3개 선만)' : 'Tables: Table number (Table 1), italicized title, minimal borders (only 3 lines: top, bottom, below header)'}</li>
        <li>{isKo ? '그림: Figure 번호, 이탤릭 제목, 축 레이블 포함' : 'Figures: Figure number, italicized title, axis labels included'}</li>
        <li>{isKo ? '통계 기호: 이탤릭체로 표기 (M, SD, t, F, p, r, R², β 등)' : 'Statistical symbols: italicized (M, SD, t, F, p, r, R², β, etc.)'}</li>
      </ul>

      {/* Table and figure presentation */}
      <h3>{isKo ? '표와 그림 작성법' : 'Presenting Tables and Figures'}</h3>
      <p>
        {isKo
          ? '표(Table)와 그림(Figure)은 연구 결과를 효과적으로 전달하는 핵심 수단입니다. 다음 원칙을 따르세요.'
          : 'Tables and figures are key tools for communicating research results effectively. Follow these principles:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '자족성 (Self-Containment)' : 'Self-Containment'}</strong>{' '}
          {isKo
            ? '– 표/그림만으로도 내용을 이해할 수 있어야 합니다. 필요한 정보를 주석(Note)으로 제공합니다.'
            : '– The table/figure should be understandable on its own. Provide necessary information in notes.'}
        </li>
        <li>
          <strong>{isKo ? '본문과의 연계' : 'Connection to Text'}</strong>{' '}
          {isKo
            ? '– 본문에서 반드시 표/그림을 언급하고 주요 결과를 해석합니다. 단, 표의 모든 숫자를 반복하지 않습니다.'
            : '– Always reference the table/figure in the text and interpret key results. However, do not repeat every number from the table.'}
        </li>
        <li>
          <strong>{isKo ? '간결성' : 'Conciseness'}</strong>{' '}
          {isKo
            ? '– 불필요한 장식(3D 효과, 과도한 색상)을 피하고, 정보 전달에 집중합니다.'
            : '– Avoid unnecessary decoration (3D effects, excessive colors) and focus on conveying information.'}
        </li>
        <li>
          <strong>{isKo ? '소수점 정렬' : 'Decimal Alignment'}</strong>{' '}
          {isKo
            ? '– 통계값은 소수점 2-3자리까지 일관되게 보고하고, p값은 .001 미만일 때 "p < .001"로 표기합니다.'
            : '– Report statistics consistently to 2-3 decimal places, and express p-values below .001 as "p < .001".'}
        </li>
      </ol>

      {/* Common mistakes */}
      <h3>{isKo ? '양적연구 논문의 흔한 실수' : 'Common Mistakes in Quantitative Papers'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '가설과 분석 방법의 불일치' : 'Mismatch Between Hypotheses and Analysis'}</strong>{' '}
          {isKo
            ? '– 설정된 가설을 검증하기에 부적절한 통계 기법을 사용하는 경우. 예: 매개효과 가설을 단순회귀로 분석.'
            : '– Using a statistical technique inappropriate for testing the stated hypothesis. Example: analyzing a mediation hypothesis with simple regression.'}
        </li>
        <li>
          <strong>{isKo ? '통계적 가정 미확인' : 'Unchecked Statistical Assumptions'}</strong>{' '}
          {isKo
            ? '– 정규성, 등분산성, 선형성, 독립성 등의 가정을 확인하지 않고 분석을 진행하는 경우.'
            : '– Proceeding with analysis without checking assumptions such as normality, homogeneity of variance, linearity, and independence.'}
        </li>
        <li>
          <strong>{isKo ? 'p-value에 대한 과잉 의존' : 'Over-reliance on p-values'}</strong>{' '}
          {isKo
            ? '– p-value만으로 결과의 중요성을 판단하고, 효과크기와 신뢰구간을 보고하지 않는 경우.'
            : '– Judging the importance of results solely by p-values without reporting effect sizes and confidence intervals.'}
        </li>
        <li>
          <strong>{isKo ? '상관관계를 인과관계로 해석' : 'Interpreting Correlation as Causation'}</strong>{' '}
          {isKo
            ? '– 횡단적 설문조사에서 나온 상관관계를 인과적 언어("영향을 미친다", "초래한다")로 기술하는 경우.'
            : '– Describing correlations from cross-sectional surveys using causal language ("affects," "causes").'}
        </li>
        <li>
          <strong>{isKo ? '결과의 과잉 일반화' : 'Over-generalization of Results'}</strong>{' '}
          {isKo
            ? '– 편의 표본에서 얻은 결과를 제한 없이 일반화하는 경우. 연구 한계에서 표본의 제한점을 반드시 언급해야 합니다.'
            : '– Generalizing results from a convenience sample without limitation. Sampling limitations must be mentioned in the limitations section.'}
        </li>
        <li>
          <strong>{isKo ? '측정도구의 타당도/신뢰도 미보고' : 'Unreported Instrument Validity/Reliability'}</strong>{' '}
          {isKo
            ? '– 사용된 측정도구의 Cronbach\'s Alpha, 요인분석 결과 등을 보고하지 않는 경우.'
            : '– Not reporting Cronbach\'s Alpha, factor analysis results, etc. for the instruments used.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '논문 작성 체크리스트' : 'Paper Writing Checklist'}>
        <p>
          {isKo
            ? '제출 전 확인 사항: (1) 연구 질문과 가설이 명확하게 진술되었는가? (2) 표본추출 방법과 표본크기의 근거가 설명되었는가? (3) 측정도구의 타당도와 신뢰도가 보고되었는가? (4) 통계적 가정이 확인되고 보고되었는가? (5) 효과크기와 신뢰구간이 p-value와 함께 보고되었는가? (6) 연구의 한계점이 솔직하게 기술되었는가? (7) APA 형식이 정확하게 적용되었는가?'
            : 'Pre-submission checklist: (1) Are research questions and hypotheses clearly stated? (2) Are sampling methods and sample size justifications explained? (3) Are instrument validity and reliability reported? (4) Are statistical assumptions checked and reported? (5) Are effect sizes and confidence intervals reported alongside p-values? (6) Are study limitations honestly described? (7) Is APA formatting accurately applied?'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 7 -- References
   ================================================================= */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '양적연구 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of quantitative research methods.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Creswell, J. W., & Creswell, J. D. (2018). <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (5th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Bryman, A. (2016). <em>Social Research Methods</em> (5th ed.). Oxford University Press.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Field, A. (2018). <em>Discovering Statistics Using IBM SPSS Statistics</em> (5th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Babbie, E. R. (2021). <em>The Practice of Social Research</em> (15th ed.). Cengage Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2019). <em>Multivariate Data Analysis</em> (8th ed.). Cengage Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Campbell, D. T., & Stanley, J. C. (1963). <em>Experimental and Quasi-Experimental Designs for Research</em>. Houghton Mifflin.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). <em>Experimental and Quasi-Experimental Designs for Generalized Causal Inference</em>. Wadsworth Cengage Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Cohen, J. (1988). <em>Statistical Power Analysis for the Behavioral Sciences</em> (2nd ed.). Lawrence Erlbaum Associates.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). <em>Internet, Phone, Mail, and Mixed-Mode Surveys: The Tailored Design Method</em> (4th ed.). Wiley.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Tabachnick, B. G., & Fidell, L. S. (2019). <em>Using Multivariate Statistics</em> (7th ed.). Pearson.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Kline, R. B. (2016). <em>Principles and Practice of Structural Equation Modeling</em> (4th ed.). Guilford Press.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>American Psychological Association. (2020). <em>Publication Manual of the American Psychological Association</em> (7th ed.). APA.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Faul, F., Erdfelder, E., Lang, A.-G., & Buchner, A. (2007). G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences. <em>Behavior Research Methods</em>, 39(2), 175-191.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>성태제 (2019). <em>현대 기초통계학: 이해와 적용</em> (8판). 학지사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>남궁근 (2017). <em>행정조사방법론</em> (5판). 법문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>배병렬 (2017). <em>Amos 24 구조방정식 모델링: 원리와 실제</em>. 청람.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>이학식, 임지훈 (2018). <em>SPSS 24 매뉴얼</em>. 집현재.</li>
        </ul>
      </div>
    </>
  );
}

/* =================================================================
   Main component
   ================================================================= */
export default function QuantitativeMethods(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
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
        title={isKo ? '양적연구방법 | Research Master' : 'Quantitative Research Methods | Research Master'}
        description={
          isKo
            ? '실험설계, 설문조사, 표본추출, 양적자료분석 등 양적연구 방법론을 체계적으로 학습합니다.'
            : 'Learn quantitative research methods including experimental design, surveys, sampling, and data analysis.'
        }
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* ---------- sidebar ---------- */}
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

          {/* ---------- main content ---------- */}
          <main className="guide-content">
            {activeSection === 'overview' && <OverviewSection isKo={isKo} />}
            {activeSection === 'experimental-design' && <ExperimentalDesignSection isKo={isKo} />}
            {activeSection === 'survey-method' && <SurveyMethodSection isKo={isKo} />}
            {activeSection === 'sampling' && <SamplingSection isKo={isKo} />}
            {activeSection === 'data-analysis' && <DataAnalysisSection isKo={isKo} />}
            {activeSection === 'paper-writing' && <PaperWritingSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            {/* ---------- prev / next ---------- */}
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
