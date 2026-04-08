import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'foundations', icon: 'fa-book-open', ko: '연구의 기초', en: 'Foundations of Research' },
  { id: 'problem-hypothesis', icon: 'fa-question-circle', ko: '연구 문제와 가설', en: 'Research Problems & Hypotheses' },
  { id: 'types', icon: 'fa-sitemap', ko: '연구 유형', en: 'Types of Research' },
  { id: 'causality', icon: 'fa-arrows-turn-right', ko: '인과관계와 변수', en: 'Causality & Variables' },
  { id: 'model', icon: 'fa-diagram-project', ko: '연구모형 설계', en: 'Research Model Design' },
  { id: 'proposal', icon: 'fa-file-lines', ko: '연구계획서 작성', en: 'Writing Research Proposals' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 – Foundations of Research                                */
/* ------------------------------------------------------------------ */
function FoundationsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구의 기초' : 'Foundations of Research'}</h2>

      {/* What is research? */}
      <h3>{isKo ? '연구란 무엇인가?' : 'What Is Research?'}</h3>
      <p>
        {isKo
          ? '연구(Research)란 체계적이고 조직적인 탐구 과정을 통해 새로운 지식을 발견하거나, 기존 지식을 확인·수정·확장하는 활동입니다. 단순한 정보 수집과 달리, 연구는 명확한 목적, 체계적인 방법론, 그리고 논리적인 분석 과정을 필요로 합니다. 사회과학에서 연구는 인간 행동과 사회 현상을 이해하고 설명하며 예측하는 것을 목표로 합니다.'
          : 'Research is a systematic and organized process of inquiry aimed at discovering new knowledge or verifying, revising, and expanding existing knowledge. Unlike simple information gathering, research requires a clear purpose, systematic methodology, and logical analytical processes. In the social sciences, research aims to understand, explain, and predict human behavior and social phenomena.'}
      </p>
      <p>
        {isKo
          ? '좋은 연구는 객관성, 체계성, 재현 가능성, 그리고 윤리성이라는 네 가지 핵심 속성을 갖추고 있어야 합니다. 객관성이란 연구자의 개인적 편견이 결과에 영향을 미치지 않도록 하는 것을 의미하며, 체계성은 논리적으로 구조화된 절차를 따르는 것을 뜻합니다.'
          : 'Good research possesses four core attributes: objectivity, systematicity, reproducibility, and ethics. Objectivity means ensuring that the researcher\'s personal biases do not influence the results, while systematicity refers to following logically structured procedures.'}
      </p>

      {/* Scientific Method */}
      <h3>{isKo ? '과학적 방법(Scientific Method)' : 'The Scientific Method'}</h3>
      <p>
        {isKo
          ? '과학적 방법은 현상을 이해하기 위한 체계적 절차로, 관찰에서 시작하여 이론 형성과 검증을 반복하는 순환적 과정입니다. 이 방법은 경험적 증거에 기반한 지식의 축적을 가능하게 하며, 사회과학 연구의 근본적인 토대를 형성합니다.'
          : 'The scientific method is a systematic procedure for understanding phenomena. It is a cyclical process that begins with observation and repeats theory formation and testing. This method enables the accumulation of knowledge based on empirical evidence and forms the fundamental foundation of social science research.'}
      </p>
      <ol>
        <li>{isKo ? '관찰 및 문제 인식: 현상에 대한 체계적 관찰을 통해 연구 문제를 발견합니다.' : 'Observation & Problem Recognition: Discover research problems through systematic observation of phenomena.'}</li>
        <li>{isKo ? '가설 설정: 관찰된 현상에 대한 잠정적 설명(가설)을 수립합니다.' : 'Hypothesis Formulation: Establish tentative explanations (hypotheses) for observed phenomena.'}</li>
        <li>{isKo ? '연구 설계: 가설을 검증하기 위한 체계적인 방법과 절차를 계획합니다.' : 'Research Design: Plan systematic methods and procedures to test hypotheses.'}</li>
        <li>{isKo ? '자료 수집: 설계에 따라 경험적 자료를 체계적으로 수집합니다.' : 'Data Collection: Systematically collect empirical data according to the design.'}</li>
        <li>{isKo ? '분석 및 해석: 수집된 자료를 통계적 혹은 질적으로 분석합니다.' : 'Analysis & Interpretation: Analyze collected data statistically or qualitatively.'}</li>
        <li>{isKo ? '결론 도출 및 보고: 분석 결과를 해석하고 학술적으로 보고합니다.' : 'Conclusion & Reporting: Interpret analysis results and report them academically.'}</li>
      </ol>

      {/* Empiricism and Positivism */}
      <h3>{isKo ? '경험주의와 실증주의' : 'Empiricism and Positivism'}</h3>
      <p>
        {isKo
          ? '경험주의(Empiricism)는 모든 지식의 근원이 감각 경험에 있다고 보는 인식론적 입장입니다. 연구에서 경험주의는 관찰 가능한 현상만을 연구 대상으로 삼아야 한다는 원칙으로 이어집니다. 반면, 실증주의(Positivism)는 자연과학의 방법론을 사회과학에도 동일하게 적용할 수 있다는 철학적 관점으로, Auguste Comte에 의해 체계화되었습니다.'
          : 'Empiricism is an epistemological position that holds that the source of all knowledge lies in sensory experience. In research, empiricism leads to the principle that only observable phenomena should be studied. Positivism, on the other hand, is a philosophical perspective—systematized by Auguste Comte—that the methodology of natural sciences can be equally applied to the social sciences.'}
      </p>
      <p>
        {isKo
          ? '현대 사회과학에서는 순수 실증주의에서 벗어나 후기실증주의(Post-positivism), 해석주의(Interpretivism), 비판이론(Critical Theory) 등 다양한 인식론적 입장이 공존하고 있습니다. 후기실증주의는 완벽한 객관성이 불가능함을 인정하면서도 객관적 현실에 최대한 접근하려는 입장을 취합니다.'
          : 'In contemporary social science, various epistemological positions coexist beyond pure positivism, including post-positivism, interpretivism, and critical theory. Post-positivism acknowledges that perfect objectivity is impossible while still striving to approximate objective reality.'}
      </p>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구를 시작할 때 자신의 인식론적 입장(패러다임)을 먼저 명확히 하세요. 이것이 연구 질문의 형태, 방법론 선택, 자료 해석 방식 등 연구의 모든 측면에 영향을 미칩니다.'
            : 'Before starting your research, clarify your epistemological stance (paradigm). This influences every aspect of your research—from the form of research questions to methodology selection and data interpretation.'}
        </p>
      </TipBox>

      {/* Research Process Overview */}
      <h3>{isKo ? '연구 과정 개요' : 'Research Process Overview'}</h3>
      <p>
        {isKo
          ? '사회과학 연구는 일반적으로 다음과 같은 단계를 거칩니다. 이 과정은 선형적이기보다는 반복적이며, 각 단계에서 이전 단계로 돌아가 수정하는 것이 일반적입니다.'
          : 'Social science research generally follows the stages below. This process is iterative rather than linear, and it is common to return to and revise previous stages at each step.'}
      </p>
      <ul>
        <li><strong>{isKo ? '문제 인식 (Problem Identification)' : 'Problem Identification'}</strong>: {isKo ? '연구할 가치가 있는 문제를 발견하고 구체화합니다.' : 'Discover and specify a problem worth researching.'}</li>
        <li><strong>{isKo ? '문헌 검토 (Literature Review)' : 'Literature Review'}</strong>: {isKo ? '선행연구를 분석하여 연구의 이론적 기반을 마련합니다.' : 'Analyze prior research to establish the theoretical foundation.'}</li>
        <li><strong>{isKo ? '연구 설계 (Research Design)' : 'Research Design'}</strong>: {isKo ? '연구 방법, 표본, 측정 도구 등을 결정합니다.' : 'Determine research methods, samples, measurement instruments, etc.'}</li>
        <li><strong>{isKo ? '자료 수집 (Data Collection)' : 'Data Collection'}</strong>: {isKo ? '설문조사, 실험, 인터뷰 등을 통해 자료를 수집합니다.' : 'Collect data through surveys, experiments, interviews, etc.'}</li>
        <li><strong>{isKo ? '자료 분석 (Data Analysis)' : 'Data Analysis'}</strong>: {isKo ? '수집된 자료를 통계적 또는 질적으로 분석합니다.' : 'Analyze collected data statistically or qualitatively.'}</li>
        <li><strong>{isKo ? '결과 보고 (Reporting)' : 'Reporting'}</strong>: {isKo ? '연구 결과를 학술 논문, 보고서 등의 형태로 작성합니다.' : 'Write up research findings in the form of academic papers or reports.'}</li>
      </ul>

      {/* Basic vs Applied Research */}
      <h3>{isKo ? '기초 연구 vs 응용 연구' : 'Basic vs. Applied Research'}</h3>
      <p>
        {isKo
          ? '기초 연구(Basic Research)는 특정한 실용적 목적 없이 순수하게 지식의 확장을 목표로 하는 연구입니다. 이론을 개발하거나 검증하는 데 초점을 맞추며, 연구 결과의 즉각적인 응용 가능성보다는 현상에 대한 근본적인 이해를 추구합니다. 예를 들어, 인간의 의사결정 과정에 영향을 미치는 인지적 편향의 메커니즘을 탐구하는 것이 기초 연구에 해당합니다.'
          : 'Basic research aims purely at expanding knowledge without a specific practical purpose. It focuses on developing or testing theories and pursues a fundamental understanding of phenomena rather than immediate applicability. For example, exploring the mechanisms of cognitive biases that influence human decision-making processes constitutes basic research.'}
      </p>
      <p>
        {isKo
          ? '반면 응용 연구(Applied Research)는 현실 세계의 특정 문제를 해결하기 위한 실용적 지식을 생산하는 것을 목표로 합니다. 기초 연구의 이론적 성과를 실제 문제 해결에 적용하며, 정책 개발, 프로그램 평가, 조직 개선 등에 직접적으로 활용됩니다. 두 유형은 상호 보완적이며, 기초 연구의 발견이 응용 연구의 토대가 되는 경우가 많습니다.'
          : 'Applied research, in contrast, aims to produce practical knowledge for solving specific real-world problems. It applies the theoretical achievements of basic research to actual problem-solving and is directly used in policy development, program evaluation, organizational improvement, etc. The two types are complementary, and findings from basic research often form the foundation for applied research.'}
      </p>

      {/* Quantitative vs Qualitative */}
      <h3>{isKo ? '양적 연구 vs 질적 연구 패러다임' : 'Quantitative vs. Qualitative Paradigms'}</h3>
      <p>
        {isKo
          ? '양적 연구(Quantitative Research)는 수치 데이터를 수집·분석하여 현상을 객관적으로 측정하고, 변수 간의 관계를 통계적으로 검증하는 연구 접근법입니다. 가설을 설정한 후 이를 경험적 자료로 검증하는 연역적 방법을 주로 사용하며, 대규모 표본을 대상으로 일반화 가능한 결론을 도출합니다.'
          : 'Quantitative research is an approach that collects and analyzes numerical data to objectively measure phenomena and statistically test relationships between variables. It primarily uses deductive methods—setting hypotheses and testing them with empirical data—and draws generalizable conclusions from large samples.'}
      </p>
      <p>
        {isKo
          ? '질적 연구(Qualitative Research)는 연구 참여자의 경험, 인식, 의미 부여 과정을 심층적으로 이해하는 것을 목표로 합니다. 인터뷰, 관찰, 문서 분석 등을 통해 텍스트 기반의 자료를 수집하며, 귀납적 방법을 통해 이론이나 패턴을 도출합니다. 최근에는 양적·질적 방법을 결합한 혼합연구(Mixed Methods)도 활발히 활용되고 있습니다.'
          : 'Qualitative research aims to deeply understand the experiences, perceptions, and meaning-making processes of research participants. It collects text-based data through interviews, observations, and document analysis, and derives theories or patterns through inductive methods. Recently, mixed methods research that combines quantitative and qualitative approaches has also become widely used.'}
      </p>

      <TipBox type="important">
        <p>
          {isKo
            ? '양적 연구와 질적 연구는 우열 관계가 아닙니다. 연구 질문의 성격에 따라 적합한 접근법이 다릅니다. "얼마나 많은가?" "어떤 관계가 있는가?"라는 질문에는 양적 연구가, "왜 그런가?" "어떤 경험을 하는가?"라는 질문에는 질적 연구가 더 적합합니다.'
            : 'Quantitative and qualitative research are not in a hierarchy. The appropriate approach varies depending on the nature of the research question. Quantitative research is more suitable for questions like "How much?" and "What relationship exists?", while qualitative research is better for "Why?" and "What experiences occur?"'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 – Research Problems & Hypotheses                        */
/* ------------------------------------------------------------------ */
function ProblemHypothesisSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구 문제와 가설' : 'Research Problems & Hypotheses'}</h2>

      {/* Formulating Research Questions */}
      <h3>{isKo ? '연구 질문 수립' : 'Formulating Research Questions'}</h3>
      <p>
        {isKo
          ? '좋은 연구는 좋은 질문에서 시작됩니다. 연구 질문(Research Question)은 연구 전체의 방향을 결정하는 나침반 역할을 하며, 연구의 범위, 방법론, 분석 전략에 직접적인 영향을 미칩니다. 잘 구성된 연구 질문은 구체적이고, 측정 가능하며, 이론적·실무적으로 의미가 있어야 합니다.'
          : 'Good research begins with good questions. A research question serves as a compass that determines the direction of the entire study, directly influencing the scope, methodology, and analytical strategy. A well-formulated research question should be specific, measurable, and theoretically or practically significant.'}
      </p>
      <p>
        {isKo
          ? '연구 질문은 일반적으로 기존 이론의 간극(gap), 현실 문제에 대한 관찰, 또는 선행연구에서 제시된 향후 연구 방향에서 도출됩니다. 연구 질문을 수립할 때는 FINER 기준(Feasible, Interesting, Novel, Ethical, Relevant)을 고려하는 것이 유용합니다.'
          : 'Research questions are typically derived from gaps in existing theory, observations of real-world problems, or future research directions suggested in prior studies. When formulating research questions, it is useful to consider the FINER criteria: Feasible, Interesting, Novel, Ethical, and Relevant.'}
      </p>

      <h3>{isKo ? '좋은 연구 질문 vs 나쁜 연구 질문' : 'Good vs. Bad Research Questions'}</h3>
      <p><strong>{isKo ? '좋은 연구 질문의 예시:' : 'Examples of good research questions:'}</strong></p>
      <ul>
        <li>{isKo ? '"원격근무가 직원의 직무 만족도와 조직 몰입에 미치는 영향은 어떠한가?"' : '"What is the effect of remote work on employee job satisfaction and organizational commitment?"'}</li>
        <li>{isKo ? '"소셜 미디어 사용 빈도와 대학생의 자아 존중감 사이에는 어떤 관계가 있는가?"' : '"What is the relationship between social media usage frequency and college students\' self-esteem?"'}</li>
        <li>{isKo ? '"교육 수준이 정치 참여에 미치는 영향에서 시민의식의 매개효과는 어떠한가?"' : '"What is the mediating effect of civic awareness on the relationship between education level and political participation?"'}</li>
      </ul>
      <p><strong>{isKo ? '나쁜 연구 질문의 예시:' : 'Examples of bad research questions:'}</strong></p>
      <ul>
        <li>{isKo ? '"사회는 왜 불공정한가?" — 너무 광범위하고 측정 불가능' : '"Why is society unfair?" — Too broad and unmeasurable'}</li>
        <li>{isKo ? '"SNS는 좋은가 나쁜가?" — 이분법적이며 학술적 구체성 부족' : '"Is social media good or bad?" — Dichotomous and lacks academic specificity'}</li>
        <li>{isKo ? '"내일 날씨는 어떤가?" — 사회과학의 연구 범위에 해당하지 않음' : '"What will the weather be tomorrow?" — Outside the scope of social science research'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구 질문을 수립할 때 "So What?" 테스트를 해보세요. 이 질문에 대한 답이 학계나 실무에 어떤 기여를 할 수 있는지 명확히 설명할 수 없다면, 질문을 재구성해야 합니다.'
            : 'When formulating your research question, try the "So What?" test. If you cannot clearly explain what contribution the answer would make to academia or practice, you need to reformulate the question.'}
        </p>
      </TipBox>

      {/* Hypothesis Types */}
      <h3>{isKo ? '가설의 유형' : 'Types of Hypotheses'}</h3>
      <p>
        {isKo
          ? '가설(Hypothesis)은 두 개 이상의 변수 사이의 관계에 대한 잠정적인 진술(statement)로, 경험적 검증이 가능해야 합니다. 가설은 연구 질문을 검증 가능한 형태로 변환한 것이며, 양적 연구에서 핵심적인 역할을 합니다.'
          : 'A hypothesis is a tentative statement about the relationship between two or more variables that must be empirically testable. It is a research question transformed into a testable form and plays a central role in quantitative research.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '연구가설 (Research Hypothesis, H₁)' : 'Research Hypothesis (H₁)'}</strong>:
          {isKo ? ' 연구자가 이론이나 선행연구에 기반하여 예측하는 변수 간의 관계입니다. 예: "리더의 변혁적 리더십은 팀 성과에 정(+)의 영향을 미칠 것이다."' : ' The relationship between variables predicted by the researcher based on theory or prior research. Example: "Transformational leadership will have a positive effect on team performance."'}
        </li>
        <li>
          <strong>{isKo ? '귀무가설 (Null Hypothesis, H₀)' : 'Null Hypothesis (H₀)'}</strong>:
          {isKo ? ' 변수 간에 유의미한 관계가 없다는 진술입니다. 통계적 검정은 귀무가설을 기각하는 방식으로 이루어집니다. 예: "리더의 변혁적 리더십은 팀 성과에 영향을 미치지 않을 것이다."' : ' A statement that there is no significant relationship between variables. Statistical testing works by rejecting the null hypothesis. Example: "Transformational leadership will have no effect on team performance."'}
        </li>
        <li>
          <strong>{isKo ? '방향적 가설 (Directional Hypothesis)' : 'Directional Hypothesis'}</strong>:
          {isKo ? ' 관계의 방향을 명시합니다. 예: "교육 투자가 증가하면 학업 성취도가 높아질 것이다."' : ' Specifies the direction of the relationship. Example: "As educational investment increases, academic achievement will increase."'}
        </li>
        <li>
          <strong>{isKo ? '비방향적 가설 (Non-directional Hypothesis)' : 'Non-directional Hypothesis'}</strong>:
          {isKo ? ' 관계의 존재는 예측하되 방향은 명시하지 않습니다. 예: "교육 투자와 학업 성취도 사이에는 유의미한 관계가 있을 것이다."' : ' Predicts the existence of a relationship without specifying the direction. Example: "There will be a significant relationship between educational investment and academic achievement."'}
        </li>
      </ul>

      {/* Operationalization */}
      <h3>{isKo ? '개념의 조작적 정의' : 'Operationalization of Concepts'}</h3>
      <p>
        {isKo
          ? '조작적 정의(Operational Definition)란 추상적 개념을 경험적으로 측정 가능한 형태로 구체화하는 과정입니다. 예를 들어, "직무 만족도"라는 추상적 개념을 "Minnesota Satisfaction Questionnaire(MSQ)의 20개 문항에 대한 5점 리커트 척도 평균 점수"로 정의하는 것이 조작적 정의입니다.'
          : 'Operational definition is the process of concretizing abstract concepts into empirically measurable forms. For example, defining the abstract concept of "job satisfaction" as "the mean score on a 5-point Likert scale across 20 items of the Minnesota Satisfaction Questionnaire (MSQ)" is an operational definition.'}
      </p>
      <p>
        {isKo
          ? '조작적 정의는 연구의 타당도(Validity)와 신뢰도(Reliability)에 직결되므로 매우 신중하게 이루어져야 합니다. 기존에 검증된 측정 도구를 활용하거나, 새로운 척도를 개발하는 경우 예비조사(Pilot Test)를 통한 검증이 필수적입니다.'
          : 'Operational definitions are directly linked to research validity and reliability, so they must be made very carefully. It is essential to use previously validated measurement instruments or, when developing new scales, to validate them through pilot testing.'}
      </p>

      {/* Literature Review */}
      <h3>{isKo ? '문헌 검토 방법' : 'Literature Review Methods'}</h3>
      <p>
        {isKo
          ? '문헌 검토(Literature Review)는 연구 주제와 관련된 선행연구를 체계적으로 탐색, 분석, 종합하는 과정입니다. 단순히 관련 연구를 나열하는 것이 아니라, 연구의 흐름과 경향을 파악하고, 기존 연구의 한계와 간극을 식별하여 자신의 연구가 기여할 수 있는 지점을 찾는 것이 핵심입니다.'
          : 'A literature review is the process of systematically searching, analyzing, and synthesizing prior research related to the research topic. The key is not simply listing related studies, but understanding research trends and currents, identifying limitations and gaps in existing research, and finding where your study can contribute.'}
      </p>
      <ul>
        <li>{isKo ? 'Google Scholar, RISS, DBpia, Web of Science, Scopus 등의 학술 데이터베이스를 활용하세요.' : 'Utilize academic databases such as Google Scholar, RISS, DBpia, Web of Science, and Scopus.'}</li>
        <li>{isKo ? '핵심 키워드와 동의어, 관련 용어를 조합하여 체계적으로 검색하세요.' : 'Search systematically by combining key terms, synonyms, and related vocabulary.'}</li>
        <li>{isKo ? '최근 연구부터 역순으로 검토하되, 주요 이론의 원전도 반드시 확인하세요.' : 'Review from the most recent research backward, but be sure to check the original sources of major theories.'}</li>
        <li>{isKo ? '문헌 관리 도구(Zotero, Mendeley, EndNote)를 활용하여 체계적으로 정리하세요.' : 'Organize systematically using reference management tools (Zotero, Mendeley, EndNote).'}</li>
      </ul>

      {/* Conceptual Framework */}
      <h3>{isKo ? '개념적 틀의 개발' : 'Developing a Conceptual Framework'}</h3>
      <p>
        {isKo
          ? '개념적 틀(Conceptual Framework)은 연구에서 다루는 주요 개념(변수)들과 그 관계를 시각적으로 표현한 것입니다. 문헌 검토를 통해 확인된 이론적 관계를 바탕으로 구성되며, 연구의 전체적인 논리 구조를 제시합니다. 이는 연구자와 독자 모두에게 연구의 범위와 초점을 명확히 전달하는 역할을 합니다.'
          : 'A conceptual framework is a visual representation of the key concepts (variables) in a study and their relationships. It is constructed based on theoretical relationships identified through the literature review and presents the overall logical structure of the research. It serves to clearly communicate the scope and focus of the study to both researchers and readers.'}
      </p>

      <TipBox type="important">
        <p>
          {isKo
            ? '개념적 틀은 연구 초기에 한 번 설정하고 끝나는 것이 아닙니다. 문헌 검토가 진행됨에 따라 지속적으로 수정·보완해야 합니다. 특히 석·박사 논문에서는 개념적 틀의 완성도가 논문의 질을 결정하는 핵심 요소입니다.'
            : 'A conceptual framework is not something you set once at the beginning of your research and forget. It should be continuously revised and refined as your literature review progresses. Especially in master\'s and doctoral theses, the completeness of the conceptual framework is a key factor determining the quality of the dissertation.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 – Types of Research                                     */
/* ------------------------------------------------------------------ */
function TypesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구 유형' : 'Types of Research'}</h2>

      {/* Exploratory Research */}
      <h3>{isKo ? '탐색적 연구 (Exploratory Research)' : 'Exploratory Research'}</h3>
      <p>
        {isKo
          ? '탐색적 연구는 아직 충분히 연구되지 않은 현상이나 주제에 대한 초기 이해를 목표로 하는 연구입니다. 명확한 가설 검증보다는 현상의 본질을 탐색하고, 향후 연구를 위한 기초 정보를 제공하는 데 초점을 맞춥니다. 탐색적 연구는 새로운 연구 영역을 개척하거나, 기존 현상에 대한 새로운 시각을 제시할 때 특히 유용합니다.'
          : 'Exploratory research aims to develop an initial understanding of phenomena or topics that have not yet been sufficiently studied. Rather than testing clear hypotheses, it focuses on exploring the nature of phenomena and providing foundational information for future research. Exploratory research is especially useful when pioneering new research areas or presenting new perspectives on existing phenomena.'}
      </p>
      <ul>
        <li>{isKo ? '주요 방법: 심층 인터뷰, 포커스 그룹, 문헌 분석, 사례 연구' : 'Key methods: In-depth interviews, focus groups, literature analysis, case studies'}</li>
        <li>{isKo ? '장점: 유연한 연구 설계, 새로운 발견의 가능성, 후속 연구를 위한 가설 생성' : 'Advantages: Flexible research design, potential for new discoveries, hypothesis generation for follow-up studies'}</li>
        <li>{isKo ? '한계: 일반화 어려움, 연구자 주관성 개입 가능성' : 'Limitations: Difficulty generalizing, potential for researcher subjectivity'}</li>
      </ul>

      {/* Descriptive Research */}
      <h3>{isKo ? '기술적 연구 (Descriptive Research)' : 'Descriptive Research'}</h3>
      <p>
        {isKo
          ? '기술적 연구는 현상의 특성, 분포, 빈도 등을 체계적으로 기술(describe)하는 것을 목표로 합니다. "무엇이 일어나고 있는가?" "현재 상태는 어떠한가?"에 답하며, 인과관계보다는 현상의 정확한 묘사에 초점을 맞춥니다. 설문조사 연구의 상당수가 기술적 연구에 해당합니다.'
          : 'Descriptive research aims to systematically describe the characteristics, distributions, and frequencies of phenomena. It answers "What is happening?" and "What is the current state?", focusing on accurate depiction of phenomena rather than causal relationships. A significant portion of survey research falls into this category.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, "한국 대학생의 정신건강 실태 조사"나 "COVID-19 이후 원격근무 현황 분석" 같은 연구가 기술적 연구에 해당합니다. 기술적 연구는 정책 수립이나 현황 파악에 중요한 기초자료를 제공합니다.'
          : 'For example, studies like "Survey of mental health status of Korean university students" or "Analysis of remote work status after COVID-19" fall under descriptive research. Descriptive research provides important foundational data for policy formulation and status assessment.'}
      </p>

      {/* Explanatory/Causal Research */}
      <h3>{isKo ? '설명적/인과적 연구 (Explanatory/Causal Research)' : 'Explanatory / Causal Research'}</h3>
      <p>
        {isKo
          ? '설명적 연구는 현상 간의 인과관계를 규명하는 것을 목표로 하며, "왜 그런 현상이 발생하는가?"에 답합니다. 이 유형의 연구는 독립변수가 종속변수에 미치는 영향을 검증하며, 실험 연구가 가장 엄격한 형태의 설명적 연구로 간주됩니다.'
          : 'Explanatory research aims to identify causal relationships between phenomena and answers "Why does this phenomenon occur?" This type of research tests the effect of independent variables on dependent variables, with experimental research considered the most rigorous form of explanatory research.'}
      </p>
      <p>
        {isKo
          ? '사회과학에서 순수한 실험 연구가 어려운 경우가 많기 때문에, 준실험설계(Quasi-experimental Design)나 통계적 통제를 통한 인과 추론이 널리 사용됩니다. 최근에는 도구변수법(Instrumental Variables), 이중차분법(Difference-in-Differences), 회귀불연속설계(Regression Discontinuity) 등 고급 인과추론 기법도 활발히 활용되고 있습니다.'
          : 'Because pure experimental research is often difficult in the social sciences, quasi-experimental designs and causal inference through statistical control are widely used. Recently, advanced causal inference techniques such as Instrumental Variables (IV), Difference-in-Differences (DiD), and Regression Discontinuity Design (RDD) have also been actively utilized.'}
      </p>

      {/* Comparison Table */}
      <h3>{isKo ? '연구 유형 비교표' : 'Research Type Comparison Table'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '구분' : 'Category'}</th>
              <th>{isKo ? '탐색적 연구' : 'Exploratory'}</th>
              <th>{isKo ? '기술적 연구' : 'Descriptive'}</th>
              <th>{isKo ? '설명적 연구' : 'Explanatory'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '목적' : 'Purpose'}</strong></td>
              <td>{isKo ? '현상 탐색 및 발견' : 'Explore & discover phenomena'}</td>
              <td>{isKo ? '현상의 특성 기술' : 'Describe characteristics'}</td>
              <td>{isKo ? '인과관계 규명' : 'Establish causality'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '연구 질문' : 'Research Question'}</strong></td>
              <td>{isKo ? '무엇이 있는가?' : 'What exists?'}</td>
              <td>{isKo ? '무엇이 일어나는가?' : 'What is happening?'}</td>
              <td>{isKo ? '왜 일어나는가?' : 'Why does it happen?'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '가설' : 'Hypothesis'}</strong></td>
              <td>{isKo ? '없음 또는 느슨한 형태' : 'None or loosely formed'}</td>
              <td>{isKo ? '서술적 가설 가능' : 'Descriptive hypotheses possible'}</td>
              <td>{isKo ? '명확한 인과 가설' : 'Clear causal hypotheses'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '주요 방법' : 'Main Methods'}</strong></td>
              <td>{isKo ? '인터뷰, 관찰' : 'Interviews, observation'}</td>
              <td>{isKo ? '설문조사, 2차 자료' : 'Surveys, secondary data'}</td>
              <td>{isKo ? '실험, 준실험' : 'Experiments, quasi-experiments'}</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '표본 크기' : 'Sample Size'}</strong></td>
              <td>{isKo ? '소규모' : 'Small'}</td>
              <td>{isKo ? '대규모' : 'Large'}</td>
              <td>{isKo ? '중간~대규모' : 'Medium to large'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cross-sectional vs Longitudinal */}
      <h3>{isKo ? '횡단 연구 vs 종단 연구' : 'Cross-Sectional vs. Longitudinal Research'}</h3>
      <p>
        {isKo
          ? '횡단 연구(Cross-sectional Study)는 특정 시점에서 자료를 수집하여 분석하는 연구로, 비용과 시간이 적게 들지만 시간에 따른 변화를 추적할 수 없습니다. 대부분의 설문조사 연구가 이에 해당합니다.'
          : 'A cross-sectional study collects and analyzes data at a single point in time. It requires less cost and time but cannot track changes over time. Most survey research falls into this category.'}
      </p>
      <p>
        {isKo
          ? '종단 연구(Longitudinal Study)는 동일한 대상을 일정 기간에 걸쳐 반복적으로 관찰·측정하는 연구입니다. 패널 연구(Panel Study), 코호트 연구(Cohort Study), 추세 연구(Trend Study) 등이 있으며, 인과관계 추론에 더 강력한 근거를 제공하지만, 시간·비용·표본 이탈(attrition) 등의 문제가 있습니다.'
          : 'A longitudinal study repeatedly observes and measures the same subjects over a period of time. Types include panel studies, cohort studies, and trend studies. While they provide stronger evidence for causal inference, they have challenges with time, cost, and sample attrition.'}
      </p>

      {/* Case Studies & Comparative Research */}
      <h3>{isKo ? '사례 연구와 비교 연구' : 'Case Studies & Comparative Research'}</h3>
      <p>
        {isKo
          ? '사례 연구(Case Study)는 하나 또는 소수의 사례를 심층적으로 분석하는 연구 방법입니다. Robert Yin에 의하면, 사례 연구는 "현실 맥락 속에서 현상을 탐구할 때, 현상과 맥락의 경계가 명확하지 않은 경우"에 적합합니다. 단일 사례 연구와 다중 사례 연구로 구분되며, 질적·양적 자료를 모두 활용할 수 있습니다.'
          : 'A case study is a research method that deeply analyzes one or a few cases. According to Robert Yin, case studies are appropriate "when investigating a phenomenon within its real-world context, when the boundaries between phenomenon and context are unclear." They are divided into single-case and multiple-case designs and can use both qualitative and quantitative data.'}
      </p>
      <p>
        {isKo
          ? '비교 연구(Comparative Research)는 둘 이상의 집단, 조직, 국가 등을 체계적으로 비교하여 유사점과 차이점을 분석합니다. 비교 연구는 특정 변수의 효과를 다양한 맥락에서 확인할 수 있게 해주며, 이론의 일반화 가능성을 평가하는 데 유용합니다.'
          : 'Comparative research systematically compares two or more groups, organizations, or countries to analyze similarities and differences. Comparative research allows the effects of specific variables to be confirmed across various contexts and is useful for evaluating the generalizability of theories.'}
      </p>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구 유형은 상호 배타적이지 않습니다. 하나의 연구에서 탐색적 단계와 설명적 단계를 결합하는 순차적 혼합 설계(Sequential Mixed Design)도 가능합니다. 연구 질문에 가장 적합한 유형을 선택하되, 필요에 따라 유연하게 결합하세요.'
            : 'Research types are not mutually exclusive. A sequential mixed design that combines exploratory and explanatory stages in one study is possible. Choose the type most appropriate for your research question, but combine them flexibly as needed.'}
        </p>
      </TipBox>

      <TipBox type="warning">
        <p>
          {isKo
            ? '횡단 연구에서 인과관계를 주장하는 것은 가장 흔한 방법론적 오류 중 하나입니다. 상관관계는 인과관계가 아닙니다(Correlation does not imply causation). 횡단 연구 결과는 "관련이 있다(associated with)" 또는 "관계가 있다(related to)"로 표현해야 하며, "영향을 미친다(affects)" 또는 "원인이 된다(causes)"로 표현하면 안 됩니다.'
            : 'Claiming causality from cross-sectional studies is one of the most common methodological errors. Correlation does not imply causation. Cross-sectional findings should be expressed as "associated with" or "related to," not "affects" or "causes."'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 – Causality & Variables                                 */
/* ------------------------------------------------------------------ */
function CausalitySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '인과관계와 변수' : 'Causality & Variables'}</h2>

      {/* Types of Variables */}
      <h3>{isKo ? '변수의 유형' : 'Types of Variables'}</h3>
      <p>
        {isKo
          ? '변수(Variable)란 둘 이상의 값을 취할 수 있는 개념이나 속성으로, 연구에서 측정·조작·통제의 대상이 됩니다. 연구모형에서의 역할에 따라 다양한 유형으로 분류됩니다.'
          : 'A variable is a concept or attribute that can take on two or more values and is subject to measurement, manipulation, or control in research. Variables are classified into various types based on their role in the research model.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '독립변수 (Independent Variable, IV)' : 'Independent Variable (IV)'}</strong>:
          {isKo ? ' 다른 변수에 영향을 미치는 원인 변수입니다. 실험 연구에서는 연구자가 직접 조작하며, 비실험 연구에서는 이론적으로 원인으로 가정되는 변수입니다. 예: 리더십 유형, 교육 방법, 마케팅 전략.' : ' The causal variable that influences other variables. In experimental research, it is directly manipulated by the researcher; in non-experimental research, it is theoretically assumed to be the cause. Examples: leadership style, teaching method, marketing strategy.'}
        </li>
        <li>
          <strong>{isKo ? '종속변수 (Dependent Variable, DV)' : 'Dependent Variable (DV)'}</strong>:
          {isKo ? ' 독립변수의 영향을 받는 결과 변수입니다. 연구에서 측정하고자 하는 주된 관심 대상으로, 독립변수의 변화에 따라 달라지는 것으로 가정됩니다. 예: 직무 만족도, 학업 성취도, 구매 의도.' : ' The outcome variable influenced by the independent variable. It is the main object of measurement in research, assumed to change as the independent variable changes. Examples: job satisfaction, academic achievement, purchase intention.'}
        </li>
        <li>
          <strong>{isKo ? '통제변수 (Control Variable)' : 'Control Variable'}</strong>:
          {isKo ? ' 독립변수와 종속변수의 관계에 영향을 미칠 수 있는 외부 변수로, 연구 결과의 정확성을 위해 그 영향을 통계적으로 제거하거나 연구 설계에서 일정하게 유지하는 변수입니다. 예: 성별, 연령, 경력, 기업 규모.' : ' An external variable that may influence the IV-DV relationship. Its effects are statistically removed or held constant in the research design to ensure accuracy. Examples: gender, age, tenure, firm size.'}
        </li>
        <li>
          <strong>{isKo ? '조절변수 (Moderating Variable)' : 'Moderating Variable'}</strong>:
          {isKo ? ' 독립변수와 종속변수 사이의 관계 강도나 방향을 변화시키는 변수입니다. "언제" 또는 "어떤 조건에서" 관계가 달라지는지를 설명합니다. 예: "변혁적 리더십이 직무 만족도에 미치는 영향은 조직 규모에 따라 달라진다."' : ' A variable that changes the strength or direction of the relationship between IV and DV. It explains "when" or "under what conditions" the relationship differs. Example: "The effect of transformational leadership on job satisfaction varies by organization size."'}
        </li>
        <li>
          <strong>{isKo ? '매개변수 (Mediating Variable)' : 'Mediating Variable'}</strong>:
          {isKo ? ' 독립변수가 종속변수에 영향을 미치는 메커니즘(과정)을 설명하는 변수입니다. "어떻게" 또는 "왜" 영향이 발생하는지를 밝힙니다. 예: "변혁적 리더십은 심리적 임파워먼트를 통해 직무 만족도에 영향을 미친다."' : ' A variable that explains the mechanism (process) through which the IV influences the DV. It reveals "how" or "why" the effect occurs. Example: "Transformational leadership affects job satisfaction through psychological empowerment."'}
        </li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '조절변수와 매개변수를 혼동하지 마세요! 조절변수는 관계의 "조건"을 다루고(상호작용 효과), 매개변수는 관계의 "메커니즘"을 다룹니다(간접 효과). 최근에는 조절된 매개(Moderated Mediation)와 매개된 조절(Mediated Moderation) 같은 복합 모형도 활발히 사용됩니다.'
            : 'Do not confuse moderating and mediating variables! Moderating variables address the "conditions" of a relationship (interaction effects), while mediating variables address the "mechanism" (indirect effects). Recently, complex models like moderated mediation and mediated moderation are also actively used.'}
        </p>
      </TipBox>

      {/* Conditions for Causality */}
      <h3>{isKo ? '인과관계의 조건' : 'Conditions for Causality'}</h3>
      <p>
        {isKo
          ? '두 변수 사이에 인과관계를 주장하기 위해서는 다음 세 가지 조건이 반드시 충족되어야 합니다. 이는 John Stuart Mill이 제시한 고전적 인과관계 기준으로, 현대 사회과학에서도 여전히 핵심적인 판단 기준으로 사용됩니다.'
          : 'To claim a causal relationship between two variables, the following three conditions must be satisfied. These are the classical causality criteria proposed by John Stuart Mill and remain essential in modern social science.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '시간적 선행성 (Temporal Precedence)' : 'Temporal Precedence'}</strong>:
          {isKo ? ' 원인(독립변수)이 결과(종속변수)보다 시간적으로 먼저 발생해야 합니다. 횡단 연구에서는 이 조건을 충족하기 어렵기 때문에, 종단 연구나 실험 연구가 인과관계 추론에 더 적합합니다.' : ' The cause (independent variable) must occur before the effect (dependent variable) in time. Since this condition is difficult to satisfy in cross-sectional studies, longitudinal or experimental studies are more suitable for causal inference.'}
        </li>
        <li>
          <strong>{isKo ? '공변성 (Covariation)' : 'Covariation'}</strong>:
          {isKo ? ' 원인 변수의 변화에 따라 결과 변수도 함께 변해야 합니다. 즉, 두 변수 사이에 통계적으로 유의미한 상관관계가 존재해야 합니다.' : ' The outcome variable must change as the causal variable changes. That is, a statistically significant correlation must exist between the two variables.'}
        </li>
        <li>
          <strong>{isKo ? '비허위적 관계 (No Spurious Correlation)' : 'No Spurious Correlation'}</strong>:
          {isKo ? ' 관찰된 관계가 제3의 변수(혼란변수)에 의한 허위 관계가 아닌 진정한 인과관계임을 입증해야 합니다. 실험 연구에서는 무작위 배정으로, 비실험 연구에서는 통계적 통제로 이 조건을 충족시킵니다.' : ' The observed relationship must be a genuine causal relationship, not a spurious one caused by a third variable (confound). In experiments this is achieved through random assignment; in non-experiments, through statistical control.'}
        </li>
      </ol>

      {/* Internal & External Validity */}
      <h3>{isKo ? '내적 타당도와 외적 타당도' : 'Internal and External Validity'}</h3>
      <p>
        {isKo
          ? '내적 타당도(Internal Validity)는 연구 결과가 실제로 독립변수의 효과를 정확하게 반영하고 있는지에 대한 확신의 정도를 말합니다. 즉, 관찰된 변화가 독립변수 이외의 다른 요인에 의한 것이 아니라는 보장을 의미합니다.'
          : 'Internal validity refers to the degree of confidence that the research results accurately reflect the effect of the independent variable. It means assurance that the observed changes are not caused by factors other than the independent variable.'}
      </p>
      <p>
        {isKo
          ? '내적 타당도에 대한 주요 위협 요인으로는 다음이 있습니다:'
          : 'Major threats to internal validity include:'}
      </p>
      <ul>
        <li><strong>{isKo ? '역사 효과 (History)' : 'History Effect'}</strong>: {isKo ? '연구 진행 중 외부 사건이 결과에 영향을 미치는 경우' : 'External events during the study influencing results'}</li>
        <li><strong>{isKo ? '성숙 효과 (Maturation)' : 'Maturation Effect'}</strong>: {isKo ? '시간 경과에 따른 참여자의 자연적 변화' : 'Natural changes in participants over time'}</li>
        <li><strong>{isKo ? '검사 효과 (Testing)' : 'Testing Effect'}</strong>: {isKo ? '사전 검사가 사후 검사 결과에 영향을 미치는 경우' : 'Pretest influencing posttest results'}</li>
        <li><strong>{isKo ? '도구 효과 (Instrumentation)' : 'Instrumentation Effect'}</strong>: {isKo ? '측정 도구의 변화가 결과에 영향을 미치는 경우' : 'Changes in measurement instruments affecting results'}</li>
        <li><strong>{isKo ? '통계적 회귀 (Statistical Regression)' : 'Statistical Regression'}</strong>: {isKo ? '극단적 점수가 평균 방향으로 회귀하는 현상' : 'Extreme scores regressing toward the mean'}</li>
        <li><strong>{isKo ? '선택 편향 (Selection Bias)' : 'Selection Bias'}</strong>: {isKo ? '실험군과 통제군의 체계적 차이' : 'Systematic differences between experimental and control groups'}</li>
        <li><strong>{isKo ? '표본 이탈 (Attrition)' : 'Attrition'}</strong>: {isKo ? '특정 유형의 참여자가 체계적으로 탈락하는 경우' : 'Systematic dropout of certain types of participants'}</li>
      </ul>

      <p>
        {isKo
          ? '외적 타당도(External Validity)는 연구 결과를 다른 사람, 장소, 시간 등에 일반화할 수 있는 정도를 말합니다. 내적 타당도와 외적 타당도는 종종 상충(trade-off) 관계에 있으며, 엄격하게 통제된 실험실 연구는 내적 타당도는 높지만 현실 적용 가능성(외적 타당도)이 낮을 수 있습니다.'
          : 'External validity refers to the degree to which research results can be generalized to other people, settings, and times. Internal and external validity are often in a trade-off relationship: tightly controlled laboratory studies may have high internal validity but low real-world applicability (external validity).'}
      </p>

      <TipBox type="warning">
        <p>
          {isKo
            ? '혼란변수(Confounding Variable)를 무시하면 연구 결과 전체가 무효화될 수 있습니다. 예를 들어, "아이스크림 판매량이 증가하면 익사 사고도 증가한다"는 상관관계가 있지만, 이는 "기온"이라는 혼란변수 때문입니다. 연구 설계 단계에서 잠재적 혼란변수를 철저히 식별하고 통제 방안을 마련하세요.'
            : 'Ignoring confounding variables can invalidate your entire study. For example, there is a correlation between "ice cream sales increase and drowning incidents increase," but this is due to the confounding variable of "temperature." Thoroughly identify potential confounders and plan control measures at the research design stage.'}
        </p>
      </TipBox>

      {/* Confounding Variables */}
      <h3>{isKo ? '혼란변수의 통제' : 'Controlling Confounding Variables'}</h3>
      <p>
        {isKo
          ? '혼란변수를 통제하는 방법은 연구 설계 방법과 통계적 방법으로 나눌 수 있습니다:'
          : 'Methods for controlling confounding variables can be divided into design-based and statistical approaches:'}
      </p>
      <ul>
        <li><strong>{isKo ? '무작위 배정 (Random Assignment)' : 'Random Assignment'}</strong>: {isKo ? '참여자를 무작위로 실험군과 통제군에 배정하여 혼란변수의 영향을 균등하게 분배합니다. 인과 추론의 가장 강력한 방법입니다.' : 'Randomly assign participants to experimental and control groups to evenly distribute the influence of confounders. This is the most powerful method for causal inference.'}</li>
        <li><strong>{isKo ? '매칭 (Matching)' : 'Matching'}</strong>: {isKo ? '혼란변수의 값이 유사한 참여자들을 짝지어 비교군을 구성합니다.' : 'Pair participants with similar confounder values to form comparison groups.'}</li>
        <li><strong>{isKo ? '통계적 통제 (Statistical Control)' : 'Statistical Control'}</strong>: {isKo ? '회귀분석에서 혼란변수를 공변량(covariate)으로 포함하여 그 영향을 통계적으로 제거합니다.' : 'Include confounders as covariates in regression analysis to statistically remove their influence.'}</li>
        <li><strong>{isKo ? '성향점수 매칭 (Propensity Score Matching)' : 'Propensity Score Matching (PSM)'}</strong>: {isKo ? '처치를 받을 확률(성향점수)이 유사한 대상끼리 매칭하여 선택 편향을 줄입니다.' : 'Match subjects with similar probabilities of receiving treatment (propensity scores) to reduce selection bias.'}</li>
      </ul>

      <TipBox type="important">
        <p>
          {isKo
            ? '변수의 유형을 정확히 파악하는 것은 적절한 통계 분석 기법을 선택하는 데 필수적입니다. 독립변수와 종속변수의 측정 수준(명목, 서열, 등간, 비율)에 따라 t-검정, 분산분석(ANOVA), 회귀분석, 카이제곱 검정 등 적용할 수 있는 통계 기법이 달라집니다.'
            : 'Accurately identifying variable types is essential for selecting appropriate statistical analysis techniques. Depending on the measurement level (nominal, ordinal, interval, ratio) of independent and dependent variables, the applicable statistical techniques—such as t-tests, ANOVA, regression, or chi-square tests—will differ.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 – Research Model Design                                 */
/* ------------------------------------------------------------------ */
function ModelSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구모형 설계' : 'Research Model Design'}</h2>

      {/* Conceptual Model vs Theoretical Framework */}
      <h3>{isKo ? '개념적 모형 vs 이론적 틀' : 'Conceptual Model vs. Theoretical Framework'}</h3>
      <p>
        {isKo
          ? '개념적 모형(Conceptual Model)과 이론적 틀(Theoretical Framework)은 자주 혼용되지만, 엄밀히 구분됩니다. 이론적 틀은 기존의 확립된 이론(예: 계획행동이론, 기술수용모형, 사회교환이론)을 연구의 기반으로 사용하는 것입니다. 반면, 개념적 모형은 연구자가 문헌 검토를 통해 도출한 변수들 간의 관계를 자신만의 논리적 체계로 구성한 것입니다.'
          : 'A conceptual model and a theoretical framework are often used interchangeably, but they are strictly distinct. A theoretical framework uses established theories (e.g., Theory of Planned Behavior, Technology Acceptance Model, Social Exchange Theory) as the foundation of research. A conceptual model, on the other hand, is the researcher\'s own logical framework of relationships between variables derived from the literature review.'}
      </p>
      <p>
        {isKo
          ? '좋은 연구모형은 단순히 변수를 나열하는 것이 아니라, 각 변수 간의 관계에 대한 이론적 근거를 명확히 제시해야 합니다. "왜 이 변수가 이 변수에 영향을 미치는가?"에 대한 논리적 설명이 뒷받침되어야 합니다.'
          : 'A good research model does not simply list variables but must clearly present the theoretical basis for each relationship between variables. Logical explanations for "why does this variable influence that variable?" must be supported.'}
      </p>

      {/* Path Diagrams */}
      <h3>{isKo ? '경로 다이어그램 (Path Diagrams)' : 'Path Diagrams'}</h3>
      <p>
        {isKo
          ? '경로 다이어그램(Path Diagram)은 연구모형에서 변수들 간의 관계를 시각적으로 표현하는 도구입니다. 다음과 같은 표준적인 표기법을 따릅니다:'
          : 'A path diagram is a visual tool that represents the relationships among variables in a research model. It follows standard notation conventions:'}
      </p>
      <ul>
        <li>{isKo ? '직사각형(□): 관측 변수(직접 측정 가능한 변수)를 나타냅니다.' : 'Rectangles (boxes): Represent observed variables (directly measurable variables).'}</li>
        <li>{isKo ? '원/타원(○): 잠재 변수(직접 관측되지 않는 구성개념)를 나타냅니다.' : 'Circles/Ovals: Represent latent variables (unobserved constructs).'}</li>
        <li>{isKo ? '단방향 화살표(→): 인과적 영향의 방향을 나타냅니다.' : 'Single-headed arrows: Indicate the direction of causal influence.'}</li>
        <li>{isKo ? '양방향 화살표(↔): 상관관계(공분산)를 나타냅니다.' : 'Double-headed arrows: Indicate correlations (covariance).'}</li>
      </ul>
      <p>
        {isKo
          ? '경로 다이어그램을 그릴 때는 일반적으로 독립변수를 왼쪽에, 종속변수를 오른쪽에 배치하여 인과적 흐름이 왼쪽에서 오른쪽으로 진행되도록 합니다. 매개변수는 독립변수와 종속변수 사이에, 조절변수는 조절하는 경로 위에 배치합니다.'
          : 'When drawing path diagrams, it is conventional to place independent variables on the left and dependent variables on the right so that causal flow proceeds from left to right. Mediating variables are placed between the IV and DV, and moderating variables are placed above the path they moderate.'}
      </p>

      {/* SEM Basics */}
      <h3>{isKo ? '구조방정식 모형의 기초' : 'Basics of Structural Equation Modeling (SEM)'}</h3>
      <p>
        {isKo
          ? '구조방정식 모형(Structural Equation Modeling, SEM)은 잠재 변수들 간의 복잡한 관계를 동시에 분석할 수 있는 고급 통계 기법입니다. SEM은 크게 두 부분으로 구성됩니다:'
          : 'Structural Equation Modeling (SEM) is an advanced statistical technique that can simultaneously analyze complex relationships among latent variables. SEM consists of two main parts:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '측정모형 (Measurement Model)' : 'Measurement Model'}</strong>:
          {isKo ? ' 잠재 변수와 관측 변수(측정 문항) 간의 관계를 정의합니다. 확인적 요인분석(CFA)을 통해 측정의 타당도와 신뢰도를 검증합니다.' : ' Defines the relationships between latent variables and observed variables (measurement items). Validates measurement validity and reliability through Confirmatory Factor Analysis (CFA).'}
        </li>
        <li>
          <strong>{isKo ? '구조모형 (Structural Model)' : 'Structural Model'}</strong>:
          {isKo ? ' 잠재 변수들 간의 인과적 관계를 정의합니다. 경로계수(path coefficient)를 통해 변수 간 관계의 강도와 방향을 추정합니다.' : ' Defines the causal relationships among latent variables. Estimates the strength and direction of relationships through path coefficients.'}
        </li>
      </ol>
      <p>
        {isKo
          ? 'SEM의 주요 장점은 측정 오차를 명시적으로 모형에 포함하여 보다 정확한 추정이 가능하다는 점, 그리고 여러 종속변수를 동시에 분석할 수 있다는 점입니다. AMOS, LISREL, Mplus, SmartPLS, lavaan(R) 등의 소프트웨어가 SEM 분석에 사용됩니다.'
          : 'Key advantages of SEM include the ability to explicitly incorporate measurement error into the model for more accurate estimation, and the ability to analyze multiple dependent variables simultaneously. Software such as AMOS, LISREL, Mplus, SmartPLS, and lavaan (R) are used for SEM analysis.'}
      </p>

      <TipBox type="important">
        <p>
          {isKo
            ? 'SEM은 최소 200개 이상의 표본이 권장되며, 모형의 복잡도에 따라 더 큰 표본이 필요할 수 있습니다. 일반적인 경험 규칙으로, 추정할 모수(parameter) 하나당 최소 10~15개의 관측치가 필요합니다. 표본이 부족하면 모형 적합도가 불안정해질 수 있습니다.'
            : 'SEM generally recommends a minimum sample size of 200 or more; larger samples may be needed depending on model complexity. A common rule of thumb is at least 10-15 observations per parameter to be estimated. Insufficient samples can lead to unstable model fit.'}
        </p>
      </TipBox>

      {/* Hypothesis Mapping */}
      <h3>{isKo ? '가설 매핑 (Hypothesis Mapping)' : 'Hypothesis Mapping'}</h3>
      <p>
        {isKo
          ? '가설 매핑이란 연구모형의 각 경로(화살표)에 해당하는 가설을 체계적으로 번호를 부여하고 정리하는 과정입니다. 이를 통해 연구모형과 가설 간의 일대일 대응을 명확히 할 수 있습니다.'
          : 'Hypothesis mapping is the process of systematically numbering and organizing the hypotheses corresponding to each path (arrow) in the research model. This clarifies the one-to-one correspondence between the research model and hypotheses.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, 독립변수 A가 매개변수 B를 통해 종속변수 C에 영향을 미치는 모형이라면:' : 'For example, if the model shows independent variable A influencing dependent variable C through mediator B:'}
      </p>
      <ul>
        <li><strong>H1</strong>: {isKo ? 'A는 C에 정(+)의 영향을 미칠 것이다. (직접효과)' : 'A will have a positive effect on C. (Direct effect)'}</li>
        <li><strong>H2</strong>: {isKo ? 'A는 B에 정(+)의 영향을 미칠 것이다.' : 'A will have a positive effect on B.'}</li>
        <li><strong>H3</strong>: {isKo ? 'B는 C에 정(+)의 영향을 미칠 것이다.' : 'B will have a positive effect on C.'}</li>
        <li><strong>H4</strong>: {isKo ? 'B는 A와 C의 관계를 매개할 것이다. (간접효과)' : 'B will mediate the relationship between A and C. (Indirect effect)'}</li>
      </ul>

      {/* Variable Relationship Diagrams */}
      <h3>{isKo ? '변수 관계 다이어그램 작성 실전' : 'Practical Guide to Variable Relationship Diagrams'}</h3>
      <p>
        {isKo
          ? '효과적인 연구모형 다이어그램을 작성하기 위한 실전 가이드입니다:'
          : 'Here is a practical guide for creating effective research model diagrams:'}
      </p>
      <ol>
        <li>{isKo ? '핵심 변수를 선별하세요: 모형에 포함할 변수가 너무 많으면 복잡해지고 해석이 어려워집니다. 핵심적인 변수에 집중하세요.' : 'Select core variables: Too many variables make the model complex and difficult to interpret. Focus on essential variables.'}</li>
        <li>{isKo ? '이론적 근거를 확보하세요: 모든 경로(화살표)는 선행연구나 이론에 기반해야 합니다. 근거 없는 경로는 모형의 설득력을 떨어뜨립니다.' : 'Secure theoretical justification: Every path (arrow) should be grounded in prior research or theory. Unjustified paths undermine the model\'s persuasiveness.'}</li>
        <li>{isKo ? '시각적 일관성을 유지하세요: 변수 상자의 크기, 화살표의 스타일, 글꼴 등을 통일하여 전문적인 인상을 주세요.' : 'Maintain visual consistency: Unify variable box sizes, arrow styles, and fonts for a professional appearance.'}</li>
        <li>{isKo ? '가설 번호를 표기하세요: 각 경로 옆에 해당 가설 번호(H1, H2...)를 표기하면 독자의 이해를 돕습니다.' : 'Label hypothesis numbers: Marking hypothesis numbers (H1, H2...) next to each path helps readers understand.'}</li>
        <li>{isKo ? '통제변수를 별도로 표시하세요: 통제변수는 점선이나 별도 영역에 표시하여 핵심 관계와 구분하세요.' : 'Display control variables separately: Show control variables with dashed lines or in a separate area to distinguish them from key relationships.'}</li>
      </ol>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구모형 다이어그램을 만들 때 PowerPoint, Draw.io, Lucidchart 등의 도구를 활용하면 깔끔한 다이어그램을 쉽게 만들 수 있습니다. LaTeX의 TikZ 패키지나 R의 semPlot 패키지를 사용하면 SEM 결과를 직접 시각화할 수도 있습니다. 중요한 것은 도구가 아니라, 모형이 이론적으로 얼마나 탄탄한지입니다.'
            : 'When creating research model diagrams, tools like PowerPoint, Draw.io, and Lucidchart make it easy to create clean diagrams. You can also use LaTeX\'s TikZ package or R\'s semPlot package to directly visualize SEM results. What matters is not the tool, but how theoretically sound the model is.'}
        </p>
      </TipBox>

      <TipBox type="warning">
        <p>
          {isKo
            ? '연구모형에 너무 많은 변수를 포함하는 것은 초보 연구자들이 범하기 쉬운 실수입니다. 변수가 많아질수록 필요한 표본 크기가 급격히 증가하고, 모형의 해석이 어려워집니다. "파시모니(Parsimony, 간결성)" 원칙을 기억하세요 — 현상을 설명하는 데 필요한 최소한의 변수만 포함하는 것이 좋은 모형입니다.'
            : 'Including too many variables in the research model is a common mistake among novice researchers. As variables increase, the required sample size grows rapidly and model interpretation becomes difficult. Remember the principle of "parsimony" — a good model includes only the minimum variables necessary to explain the phenomenon.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 – Writing Research Proposals                            */
/* ------------------------------------------------------------------ */
function ProposalSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '연구계획서 작성' : 'Writing Research Proposals'}</h2>

      {/* Proposal Structure */}
      <h3>{isKo ? '연구계획서의 구조' : 'Structure of a Research Proposal'}</h3>
      <p>
        {isKo
          ? '연구계획서(Research Proposal)는 수행할 연구의 전체 계획을 체계적으로 기술한 문서입니다. 학위논문 심사, 연구비 지원 신청, 학술 대회 발표 등 다양한 목적으로 작성되며, 연구의 타당성과 실행 가능성을 설득력 있게 전달해야 합니다.'
          : 'A research proposal is a document that systematically describes the entire plan for the research to be conducted. It is written for various purposes—thesis committee review, research funding applications, conference submissions—and must persuasively convey the validity and feasibility of the research.'}
      </p>
      <p>
        {isKo
          ? '일반적인 연구계획서는 다음과 같은 구성요소로 이루어집니다:'
          : 'A typical research proposal consists of the following components:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '서론 (Introduction)' : 'Introduction'}</strong>:
          {isKo ? ' 연구의 배경, 필요성, 목적을 기술합니다. 왜 이 연구가 중요한지, 어떤 문제를 해결하고자 하는지를 명확히 제시합니다. 독자의 관심을 끌 수 있는 통계 자료나 사회적 이슈로 시작하는 것이 효과적입니다.' : ' Describes the background, necessity, and purpose of the research. Clearly presents why this research is important and what problem it seeks to solve. Starting with compelling statistics or social issues is effective for capturing the reader\'s attention.'}
        </li>
        <li>
          <strong>{isKo ? '문헌 검토 (Literature Review)' : 'Literature Review'}</strong>:
          {isKo ? ' 선행연구를 체계적으로 분석·종합하여 이론적 기반을 마련합니다. 기존 연구의 동향, 한계점, 그리고 본 연구의 이론적 위치를 명확히 합니다. 단순한 연구 나열이 아니라, 논리적 흐름에 따른 비판적 분석이어야 합니다.' : ' Systematically analyzes and synthesizes prior research to establish a theoretical foundation. Clarifies existing research trends, limitations, and the theoretical positioning of the current study. This should be critical analysis following a logical flow, not a simple list of studies.'}
        </li>
        <li>
          <strong>{isKo ? '연구 방법론 (Methodology)' : 'Methodology'}</strong>:
          {isKo ? ' 연구 설계, 표본 및 모집단, 자료 수집 방법, 측정 도구, 분석 기법 등을 상세히 기술합니다. 재현 가능할 정도로 구체적이어야 합니다.' : ' Details the research design, sample and population, data collection methods, measurement instruments, and analysis techniques. This section should be specific enough to be reproducible.'}
        </li>
        <li>
          <strong>{isKo ? '연구 일정 (Timeline)' : 'Timeline'}</strong>:
          {isKo ? ' 각 연구 단계의 시작과 종료 시점을 간트 차트(Gantt Chart) 등으로 시각화하여 제시합니다.' : ' Presents the start and end dates of each research phase, visualized using Gantt charts or similar tools.'}
        </li>
        <li>
          <strong>{isKo ? '예산 (Budget)' : 'Budget'}</strong>:
          {isKo ? ' 연구 수행에 필요한 비용을 항목별로 산출합니다. 인건비, 장비비, 여비, 재료비, 인쇄비 등을 포함합니다.' : ' Calculates the costs required for conducting the research by category, including personnel costs, equipment, travel, materials, and printing.'}
        </li>
        <li>
          <strong>{isKo ? '참고문헌 (References)' : 'References'}</strong>:
          {isKo ? ' 연구계획서에서 인용한 모든 문헌을 학술 표기법(APA, Chicago, MLA 등)에 맞게 정리합니다.' : ' Lists all works cited in the proposal according to academic citation styles (APA, Chicago, MLA, etc.).'}
        </li>
      </ol>

      {/* Writing Tips */}
      <h3>{isKo ? '연구계획서 작성 요령' : 'Writing Tips for Research Proposals'}</h3>
      <p>
        {isKo
          ? '설득력 있는 연구계획서를 작성하기 위한 핵심 전략입니다:'
          : 'Key strategies for writing a persuasive research proposal:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '명확한 연구 간극(Gap) 제시' : 'Present a Clear Research Gap'}</strong>:
          {isKo ? ' 기존 연구에서 무엇이 부족한지, 본 연구가 어떤 간극을 채우는지를 명확히 설명하세요. "~에 대한 연구는 부족하다"가 아니라, 구체적으로 어떤 측면이 부족한지 기술해야 합니다.' : ' Clearly explain what is lacking in existing research and what gap your study fills. Instead of "research on X is insufficient," describe specifically which aspects are lacking.'}
        </li>
        <li>
          <strong>{isKo ? '구체적이고 측정 가능한 목표 설정' : 'Set Specific and Measurable Objectives'}</strong>:
          {isKo ? ' "~를 이해한다"가 아니라 "~의 관계를 실증적으로 검증한다"처럼 구체적인 목표를 제시하세요.' : ' Instead of "understand X," present specific goals like "empirically test the relationship of X."'}
        </li>
        <li>
          <strong>{isKo ? '방법론의 적합성 논증' : 'Justify Methodological Appropriateness'}</strong>:
          {isKo ? ' 선택한 연구 방법이 왜 연구 질문에 가장 적합한지를 설명하세요. 대안적 방법을 언급하고 그것을 선택하지 않은 이유도 함께 제시하면 더 설득력이 있습니다.' : ' Explain why the chosen method is most appropriate for the research question. Mentioning alternative methods and reasons for not choosing them adds persuasiveness.'}
        </li>
        <li>
          <strong>{isKo ? '예상 기여도 명시' : 'State Expected Contributions'}</strong>:
          {isKo ? ' 이론적 기여(학술적 의의)와 실무적 기여(실천적 시사점)를 구분하여 명확히 제시하세요.' : ' Clearly present theoretical contributions (academic significance) and practical contributions (practical implications) separately.'}
        </li>
        <li>
          <strong>{isKo ? '일관된 논리적 흐름 유지' : 'Maintain Consistent Logical Flow'}</strong>:
          {isKo ? ' 서론의 문제 제기 → 문헌 검토의 이론적 근거 → 방법론의 검증 전략이 하나의 논리적 흐름으로 연결되어야 합니다.' : ' The problem statement in the introduction, theoretical rationale in the literature review, and verification strategy in methodology should connect as one logical flow.'}
        </li>
      </ul>

      {/* Common Mistakes */}
      <h3>{isKo ? '흔한 실수들' : 'Common Mistakes'}</h3>
      <TipBox type="warning" title={isKo ? '연구계획서 작성 시 주의사항' : 'Research Proposal Pitfalls'}>
        <ul>
          <li>{isKo ? '연구 질문이 너무 광범위하거나 모호한 경우 — 하나의 논문으로 답할 수 있는 범위로 좁히세요.' : 'Research questions that are too broad or vague — narrow them to a scope answerable in a single paper.'}</li>
          <li>{isKo ? '문헌 검토가 단순 나열에 그치는 경우 — 비판적 분석과 통합이 필요합니다.' : 'Literature review that is a mere list — critical analysis and synthesis are needed.'}</li>
          <li>{isKo ? '방법론에 대한 설명이 불충분한 경우 — 제3자가 재현할 수 있을 정도로 상세히 기술하세요.' : 'Insufficient description of methodology — describe in enough detail that a third party could reproduce it.'}</li>
          <li>{isKo ? '이론적 근거 없이 가설을 제시하는 경우 — 모든 가설은 선행연구에 기반해야 합니다.' : 'Presenting hypotheses without theoretical justification — all hypotheses should be grounded in prior research.'}</li>
          <li>{isKo ? '비현실적인 연구 일정을 제시하는 경우 — 자료 수집, IRB 승인 등에 필요한 시간을 충분히 고려하세요.' : 'Presenting unrealistic timelines — allow sufficient time for data collection, IRB approval, etc.'}</li>
          <li>{isKo ? '참고문헌 형식이 일관되지 않은 경우 — 하나의 인용 양식을 선택하고 엄격히 준수하세요.' : 'Inconsistent reference formatting — choose one citation style and strictly follow it.'}</li>
          <li>{isKo ? '연구의 한계를 전혀 언급하지 않는 경우 — 한계를 인정하되, 이를 최소화하기 위한 전략을 함께 제시하세요.' : 'Not mentioning limitations at all — acknowledge limitations but present strategies to minimize them.'}</li>
        </ul>
      </TipBox>

      {/* IRB Considerations */}
      <h3>{isKo ? 'IRB(연구윤리위원회) 고려사항' : 'IRB (Institutional Review Board) Considerations'}</h3>
      <p>
        {isKo
          ? '인간 대상 연구를 수행하는 경우, 연구 시작 전에 반드시 소속 기관의 IRB(Institutional Review Board, 기관생명윤리위원회) 승인을 받아야 합니다. IRB는 연구 참여자의 권리, 안전, 복지를 보호하기 위해 연구 계획의 윤리적 적절성을 심사합니다.'
          : 'When conducting research involving human subjects, you must obtain IRB (Institutional Review Board) approval from your institution before starting the study. The IRB reviews the ethical appropriateness of the research plan to protect the rights, safety, and welfare of research participants.'}
      </p>
      <p>
        {isKo
          ? 'IRB 신청 시 다음 사항을 준비해야 합니다:'
          : 'When applying for IRB approval, you should prepare the following:'}
      </p>
      <ul>
        <li>{isKo ? '연구 목적과 방법에 대한 상세한 설명' : 'Detailed description of research purpose and methods'}</li>
        <li>{isKo ? '참여자 동의서(Informed Consent Form): 연구 목적, 절차, 위험, 혜택, 비밀 보장, 자발적 참여 및 철회 권리를 포함' : 'Informed Consent Form: including research purpose, procedures, risks, benefits, confidentiality, and right to voluntary participation and withdrawal'}</li>
        <li>{isKo ? '개인정보 보호 방안: 익명화, 데이터 암호화, 보관 및 폐기 계획' : 'Privacy protection measures: anonymization, data encryption, storage and disposal plans'}</li>
        <li>{isKo ? '참여자에게 발생할 수 있는 위험과 이를 최소화하기 위한 방안' : 'Potential risks to participants and measures to minimize them'}</li>
        <li>{isKo ? '취약한 집단(아동, 장애인, 수감자 등)을 대상으로 하는 경우 추가적인 보호 조치' : 'Additional protective measures when studying vulnerable populations (children, individuals with disabilities, prisoners, etc.)'}</li>
      </ul>

      <TipBox type="important">
        <p>
          {isKo
            ? 'IRB 승인 없이 수행된 연구는 학술지 게재가 거부될 수 있으며, 소속 기관으로부터 제재를 받을 수 있습니다. 설문조사, 인터뷰 등 인간 대상 연구는 아무리 위험이 낮다고 판단되더라도 반드시 IRB 심사를 거쳐야 합니다. 면제(Exempt) 심사도 IRB를 통해 결정됩니다.'
            : 'Research conducted without IRB approval may be rejected for journal publication and may result in sanctions from your institution. All human subjects research—including surveys and interviews—must go through IRB review, no matter how low-risk it may seem. Even exempt review status is determined through the IRB.'}
        </p>
      </TipBox>

      {/* Practical Checklist */}
      <h3>{isKo ? '연구계획서 최종 점검 체크리스트' : 'Final Research Proposal Checklist'}</h3>
      <p>
        {isKo
          ? '연구계획서를 제출하기 전에 다음 항목을 하나씩 확인하세요:'
          : 'Before submitting your research proposal, check each of the following items:'}
      </p>
      <ul>
        <li>{isKo ? '연구 제목이 연구 내용을 정확하게 반영하고 있는가?' : 'Does the research title accurately reflect the research content?'}</li>
        <li>{isKo ? '연구 문제와 가설이 명확하고 구체적으로 진술되어 있는가?' : 'Are the research questions and hypotheses stated clearly and specifically?'}</li>
        <li>{isKo ? '문헌 검토가 최신 연구를 포함하고 비판적으로 분석되어 있는가?' : 'Does the literature review include recent studies and is it critically analyzed?'}</li>
        <li>{isKo ? '연구모형이 이론적 근거를 바탕으로 논리적으로 구성되어 있는가?' : 'Is the research model logically constructed based on theoretical justification?'}</li>
        <li>{isKo ? '연구 방법(설계, 표본, 측정, 분석)이 충분히 상세하게 기술되어 있는가?' : 'Are research methods (design, sample, measurement, analysis) described in sufficient detail?'}</li>
        <li>{isKo ? '표본 크기가 통계적 검정력(Statistical Power)을 확보하기에 충분한가?' : 'Is the sample size sufficient to ensure adequate statistical power?'}</li>
        <li>{isKo ? '측정 도구의 타당도와 신뢰도가 확인되었는가?' : 'Have the validity and reliability of measurement instruments been confirmed?'}</li>
        <li>{isKo ? 'IRB 승인 계획이 포함되어 있는가?' : 'Is the IRB approval plan included?'}</li>
        <li>{isKo ? '연구 일정이 현실적이고 각 단계별 소요 시간이 적절한가?' : 'Is the timeline realistic with appropriate time allocated for each phase?'}</li>
        <li>{isKo ? '예산이 항목별로 적절하게 산출되어 있는가?' : 'Is the budget appropriately calculated by category?'}</li>
        <li>{isKo ? '참고문헌이 일관된 인용 양식으로 정리되어 있는가?' : 'Are references organized in a consistent citation style?'}</li>
        <li>{isKo ? '전체적인 논리적 흐름이 자연스럽고 설득력 있는가?' : 'Is the overall logical flow natural and persuasive?'}</li>
      </ul>

      <TipBox type="tip">
        <p>
          {isKo
            ? '연구계획서를 완성한 후 반드시 제3자(지도교수, 동료 연구자, 선배)에게 피드백을 받으세요. 본인은 당연하다고 생각하는 내용이 독자에게는 불명확할 수 있습니다. 또한 제출 전 최소 2~3일의 숙성 기간을 두고 다시 읽어보면 미처 발견하지 못한 논리적 허점이나 오탈자를 찾을 수 있습니다.'
            : 'After completing your research proposal, be sure to get feedback from a third party (advisor, fellow researchers, senior colleagues). What seems obvious to you may be unclear to readers. Also, leaving at least 2-3 days before the deadline to re-read the proposal can help you find logical gaps or typos you may have missed.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7 – References                                             */
/* ------------------------------------------------------------------ */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '연구설계 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of research design.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Babbie, E. (2021). <em>The Practice of Social Research</em> (15th ed.). Cengage Learning.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Creswell, J. W., & Creswell, J. D. (2023). <em>Research Design: Qualitative, Quantitative, and Mixed Methods Approaches</em> (6th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). <em>Experimental and Quasi-Experimental Designs for Generalized Causal Inference</em>. Houghton Mifflin.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Yin, R. K. (2018). <em>Case Study Research and Applications: Design and Methods</em> (6th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>남궁근 (2021). <em>행정조사방법론</em> (제6판). 법문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>김병섭 (2010). <em>편견과 오류 줄이기: 조사연구의 논리와 기법</em>. 법문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Neuman, W. L. (2014). <em>Social Research Methods: Qualitative and Quantitative Approaches</em> (7th ed.). Pearson.</li>
        </ul>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
export default function ResearchDesign(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('foundations');
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
        title={isKo ? '연구설계 | Research Master' : 'Research Design | Research Master'}
        description={isKo ? '사회과학 연구설계의 기초부터 연구계획서 작성까지 체계적으로 학습합니다.' : 'Learn research design systematically from foundations to writing research proposals.'}
      />
      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`} onClick={() => handleNavClick(section.id)}>
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="guide-content">
            {activeSection === 'foundations' && <FoundationsSection isKo={isKo} />}
            {activeSection === 'problem-hypothesis' && <ProblemHypothesisSection isKo={isKo} />}
            {activeSection === 'types' && <TypesSection isKo={isKo} />}
            {activeSection === 'causality' && <CausalitySection isKo={isKo} />}
            {activeSection === 'model' && <ModelSection isKo={isKo} />}
            {activeSection === 'proposal' && <ProposalSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>{currentIndex > 0 ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en) : isKo ? '이전' : 'Previous'}</span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>{currentIndex < SECTIONS.length - 1 ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en) : isKo ? '다음' : 'Next'}</span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
