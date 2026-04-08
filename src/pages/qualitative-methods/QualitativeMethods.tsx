import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ---------- sidebar nav sections ---------- */
const SECTIONS = [
  { id: 'overview', icon: 'fa-comments', ko: '질적연구 개요', en: 'Overview of Qualitative Research' },
  { id: 'grounded-theory', icon: 'fa-sitemap', ko: '근거이론', en: 'Grounded Theory' },
  { id: 'phenomenology', icon: 'fa-eye', ko: '현상학적 연구', en: 'Phenomenological Research' },
  { id: 'case-study', icon: 'fa-folder-open', ko: '사례연구', en: 'Case Study Research' },
  { id: 'data-collection', icon: 'fa-database', ko: '질적자료 수집과 분석', en: 'Data Collection and Analysis' },
  { id: 'trustworthiness', icon: 'fa-shield-halved', ko: '질적연구 신뢰성 확보', en: 'Ensuring Trustworthiness' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* =================================================================
   Section 1 -- Overview of Qualitative Research
   ================================================================= */
function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-comments" />
        {isKo ? '질적연구 개요' : 'Overview of Qualitative Research'}
      </h2>

      <h3>{isKo ? '질적연구의 정의' : 'Definition of Qualitative Research'}</h3>
      <p>
        {isKo
          ? '질적연구(Qualitative Research)란 인간의 경험, 행동, 사회적 현상을 자연주의적 맥락에서 심층적으로 탐구하는 연구 방법론의 총칭입니다. Denzin과 Lincoln(2018)은 질적연구를 "연구자가 자연스러운 환경 속에서 현상을 해석하고 이해하려는 해석적 활동"이라 정의하였습니다. 질적연구는 숫자로 환원되지 않는 의미, 맥락, 과정에 주목하며, 연구 참여자의 관점에서 세계를 이해하는 것을 목표로 합니다.'
          : 'Qualitative research is a broad term for research methodologies that explore human experiences, behaviors, and social phenomena in depth within naturalistic settings. Denzin and Lincoln (2018) defined qualitative research as "an interpretive activity in which the researcher attempts to interpret and understand phenomena in their natural settings." Qualitative research attends to meanings, contexts, and processes that cannot be reduced to numbers, aiming to understand the world from participants\' perspectives.'}
      </p>

      <h3>{isKo ? '해석주의와 구성주의 패러다임' : 'Interpretivism and Constructivism'}</h3>
      <p>
        {isKo
          ? '질적연구의 철학적 토대는 크게 해석주의(Interpretivism)와 구성주의(Constructivism)로 구분됩니다. 해석주의는 사회적 현실이 인간의 해석 행위를 통해 비로소 의미를 갖게 된다고 봅니다. Weber의 이해사회학(Verstehen)에서 출발한 이 관점은 행위자의 주관적 의미 부여를 중시합니다. 구성주의는 한 걸음 더 나아가, 지식과 현실 자체가 사회적 상호작용을 통해 능동적으로 구성(construction)된다고 주장합니다. Guba와 Lincoln(1994)은 구성주의 패러다임에서 존재론적으로 다중 실재(multiple realities)를, 인식론적으로 연구자와 참여자 간 상호적 지식 창출을 전제한다고 설명하였습니다.'
          : 'The philosophical foundations of qualitative research are broadly divided into interpretivism and constructivism. Interpretivism holds that social reality acquires meaning only through human acts of interpretation. Originating from Weber\'s Verstehen (understanding sociology), this perspective emphasizes the subjective meanings that actors assign to their actions. Constructivism goes a step further, asserting that knowledge and reality itself are actively constructed through social interaction. Guba and Lincoln (1994) explained that the constructivist paradigm assumes multiple realities ontologically and mutual knowledge creation between researcher and participant epistemologically.'}
      </p>

      <h3>{isKo ? '질적연구의 핵심 특성' : 'Key Characteristics of Qualitative Research'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '자연주의적 탐구 (Naturalistic Inquiry)' : 'Naturalistic Inquiry'}</strong>{' '}
          {isKo
            ? '-- 연구 현상이 발생하는 실제 현장에서 데이터를 수집합니다. 인위적 실험 환경이 아닌 참여자의 자연스러운 맥락을 중시합니다.'
            : '-- Data is collected in the actual setting where the phenomenon occurs. The natural context of participants is valued over artificial laboratory conditions.'}
        </li>
        <li>
          <strong>{isKo ? '귀납적 분석 (Inductive Analysis)' : 'Inductive Analysis'}</strong>{' '}
          {isKo
            ? '-- 사전 가설을 검증하기보다 데이터에서 패턴, 범주, 주제를 발견하고 이론을 구축합니다.'
            : '-- Rather than testing pre-set hypotheses, patterns, categories, and themes are discovered from data to build theory.'}
        </li>
        <li>
          <strong>{isKo ? '총체적 관점 (Holistic Perspective)' : 'Holistic Perspective'}</strong>{' '}
          {isKo
            ? '-- 현상을 개별 변인으로 분리하지 않고 전체적 맥락 안에서 통합적으로 이해합니다.'
            : '-- Phenomena are understood holistically within their full context, not isolated into separate variables.'}
        </li>
        <li>
          <strong>{isKo ? '연구자가 핵심 도구 (Researcher as Instrument)' : 'Researcher as Key Instrument'}</strong>{' '}
          {isKo
            ? '-- 연구자 자신이 데이터 수집과 해석의 주요 도구가 됩니다. 이 때문에 성찰성(Reflexivity)이 필수적입니다.'
            : '-- The researcher serves as the primary instrument for data collection and interpretation, making reflexivity essential.'}
        </li>
        <li>
          <strong>{isKo ? '풍부한 기술 (Thick Description)' : 'Thick Description'}</strong>{' '}
          {isKo
            ? '-- Geertz(1973)가 제안한 두꺼운 기술은 맥락, 의미, 의도를 포함한 상세한 서술을 통해 독자가 현상을 깊이 이해할 수 있게 합니다.'
            : '-- Thick description, proposed by Geertz (1973), allows readers to deeply understand phenomena through detailed narratives that include context, meaning, and intention.'}
        </li>
      </ul>

      <h3>{isKo ? 'Creswell의 다섯 가지 질적연구 전통' : 'Creswell\'s Five Qualitative Traditions'}</h3>
      <p>
        {isKo
          ? 'Creswell과 Poth(2018)는 질적연구의 주요 전통을 다섯 가지로 분류하였습니다. 각 전통은 고유한 철학적 뿌리, 연구 질문 유형, 자료 수집 및 분석 방법을 가지고 있으며, 연구자는 연구 목적에 가장 적합한 전통을 선택해야 합니다.'
          : 'Creswell and Poth (2018) classified the major traditions of qualitative research into five approaches. Each tradition has its own philosophical roots, types of research questions, and data collection and analysis methods. Researchers must select the tradition best suited to their research purpose.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '전통' : 'Tradition'}</th>
              <th>{isKo ? '초점' : 'Focus'}</th>
              <th>{isKo ? '핵심 질문' : 'Central Question'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '내러티브 탐구 (Narrative Inquiry)' : 'Narrative Inquiry'}</td>
              <td>{isKo ? '개인의 생애 경험과 이야기' : 'Individual life experiences and stories'}</td>
              <td>{isKo ? '이 개인의 이야기는 무엇인가?' : 'What is this individual\'s story?'}</td>
            </tr>
            <tr>
              <td>{isKo ? '현상학 (Phenomenology)' : 'Phenomenology'}</td>
              <td>{isKo ? '체험의 본질(essence)' : 'Essence of lived experience'}</td>
              <td>{isKo ? '이 경험의 본질은 무엇인가?' : 'What is the essence of this experience?'}</td>
            </tr>
            <tr>
              <td>{isKo ? '근거이론 (Grounded Theory)' : 'Grounded Theory'}</td>
              <td>{isKo ? '과정이나 행위의 이론 생성' : 'Theory generation about process or action'}</td>
              <td>{isKo ? '이 과정을 설명하는 이론은 무엇인가?' : 'What theory explains this process?'}</td>
            </tr>
            <tr>
              <td>{isKo ? '문화기술지 (Ethnography)' : 'Ethnography'}</td>
              <td>{isKo ? '문화 공유 집단의 패턴' : 'Patterns of a culture-sharing group'}</td>
              <td>{isKo ? '이 집단의 문화적 패턴은 무엇인가?' : 'What are the cultural patterns of this group?'}</td>
            </tr>
            <tr>
              <td>{isKo ? '사례연구 (Case Study)' : 'Case Study'}</td>
              <td>{isKo ? '특정 사례의 심층 분석' : 'In-depth analysis of a specific case'}</td>
              <td>{isKo ? '이 사례를 통해 무엇을 이해할 수 있는가?' : 'What can we understand through this case?'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '질적연구 설계 과정' : 'Qualitative Research Design Process'}</h3>
      <p>
        {isKo
          ? '질적연구의 설계는 양적연구처럼 엄격한 선형적 절차를 따르지 않으며, 순환적이고 유연한 과정을 특징으로 합니다. Maxwell(2013)는 질적연구 설계의 상호작용 모델(Interactive Model)을 제시하며, 연구 목적, 개념적 틀, 연구 질문, 방법, 타당성의 다섯 요소가 서로 영향을 주고받는다고 설명하였습니다.'
          : 'Qualitative research design does not follow the strict linear procedure of quantitative research but is characterized by a cyclical and flexible process. Maxwell (2013) proposed an Interactive Model of qualitative research design, explaining that five components -- research purpose, conceptual framework, research questions, methods, and validity -- mutually influence one another.'}
      </p>
      <ol>
        <li>
          {isKo
            ? '연구 문제 및 목적 설정: 탐구하고자 하는 현상과 연구의 의의를 명확히 합니다.'
            : 'Establish research problem and purpose: Clarify the phenomenon to be explored and the significance of the study.'}
        </li>
        <li>
          {isKo
            ? '문헌 고찰 및 개념적 틀 구성: 기존 연구를 검토하고 민감화 개념(sensitizing concepts)을 설정합니다.'
            : 'Literature review and conceptual framework: Review existing research and establish sensitizing concepts.'}
        </li>
        <li>
          {isKo
            ? '연구 전통 및 방법론 선택: 연구 질문에 가장 적합한 질적 전통을 선택합니다.'
            : 'Select research tradition and methodology: Choose the qualitative tradition best suited to the research question.'}
        </li>
        <li>
          {isKo
            ? '참여자 선정 및 표집 전략: 목적적 표집(purposeful sampling)을 통해 연구에 적합한 참여자를 선정합니다.'
            : 'Participant selection and sampling strategy: Select appropriate participants through purposeful sampling.'}
        </li>
        <li>
          {isKo
            ? '자료 수집: 면접, 관찰, 문서 분석 등 다양한 방법으로 데이터를 수집합니다.'
            : 'Data collection: Gather data through interviews, observations, document analysis, and other methods.'}
        </li>
        <li>
          {isKo
            ? '자료 분석: 코딩, 주제 분석 등을 통해 데이터에서 의미와 패턴을 도출합니다.'
            : 'Data analysis: Derive meanings and patterns from data through coding, thematic analysis, and related procedures.'}
        </li>
        <li>
          {isKo
            ? '결과 기술 및 해석: 풍부한 기술을 통해 연구 결과를 보고합니다.'
            : 'Writing and interpretation: Report findings through rich, thick description.'}
        </li>
      </ol>

      <h3>{isKo ? '질적연구의 윤리적 고려사항' : 'Ethical Considerations in Qualitative Research'}</h3>
      <p>
        {isKo
          ? '질적연구는 참여자와의 밀접한 관계 형성을 수반하므로, 윤리적 고려가 특히 중요합니다. 연구자는 다음의 핵심 윤리 원칙을 준수해야 합니다.'
          : 'Because qualitative research involves close relationships with participants, ethical considerations are especially important. Researchers must observe the following core ethical principles.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '사전 동의 (Informed Consent)' : 'Informed Consent'}</strong>{' '}
          {isKo
            ? '-- 연구 목적, 절차, 잠재적 위험과 이점을 충분히 설명하고 자발적 동의를 구합니다.'
            : '-- Fully explain research purpose, procedures, potential risks and benefits, and obtain voluntary consent.'}
        </li>
        <li>
          <strong>{isKo ? '비밀보장 (Confidentiality)' : 'Confidentiality'}</strong>{' '}
          {isKo
            ? '-- 참여자의 신원과 개인정보를 보호하며, 가명 사용 등의 조치를 취합니다.'
            : '-- Protect participants\' identity and personal information through measures such as the use of pseudonyms.'}
        </li>
        <li>
          <strong>{isKo ? '무해성 원칙 (Do No Harm)' : 'Do No Harm'}</strong>{' '}
          {isKo
            ? '-- 연구 참여로 인한 심리적, 사회적, 물리적 해를 최소화합니다.'
            : '-- Minimize psychological, social, and physical harm from research participation.'}
        </li>
        <li>
          <strong>{isKo ? '호혜성 (Reciprocity)' : 'Reciprocity'}</strong>{' '}
          {isKo
            ? '-- 참여자가 연구로부터 적절한 보상이나 이익을 받을 수 있도록 배려합니다.'
            : '-- Ensure participants receive appropriate compensation or benefits from the research.'}
        </li>
        <li>
          <strong>{isKo ? '연구자의 성찰성 (Reflexivity)' : 'Researcher Reflexivity'}</strong>{' '}
          {isKo
            ? '-- 연구자 자신의 가정, 편견, 위치성이 연구에 미치는 영향을 지속적으로 성찰합니다.'
            : '-- Continuously reflect on how the researcher\'s own assumptions, biases, and positionality affect the research.'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? 'IRB 심의의 중요성' : 'Importance of IRB Review'}>
        <p>
          {isKo
            ? '질적연구에서 심층 면접, 참여관찰 등은 참여자의 사적 영역에 깊이 접근하게 되므로, 연구 시작 전 반드시 기관생명윤리위원회(IRB)의 심의를 받아야 합니다. 특히 취약한 집단(아동, 장애인, 수감자 등)을 대상으로 하는 연구는 더욱 엄격한 윤리적 검토가 필요합니다.'
            : 'In qualitative research, in-depth interviews and participant observation involve deep access to participants\' private domains; therefore, Institutional Review Board (IRB) approval must be obtained before starting the research. Studies involving vulnerable populations (children, persons with disabilities, prisoners, etc.) require even more rigorous ethical review.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 2 -- Grounded Theory
   ================================================================= */
function GroundedTheorySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-sitemap" />
        {isKo ? '근거이론' : 'Grounded Theory'}
      </h2>

      <h3>{isKo ? '근거이론의 개요' : 'Overview of Grounded Theory'}</h3>
      <p>
        {isKo
          ? '근거이론(Grounded Theory)은 Glaser와 Strauss(1967)가 《The Discovery of Grounded Theory》에서 처음 제안한 질적연구 방법론으로, 데이터에 근거하여(grounded in data) 이론을 체계적으로 생성하는 것을 목적으로 합니다. 기존 이론을 검증하는 연역적 접근과 달리, 근거이론은 현장 데이터에서 출발하여 귀납적으로 이론을 구축하는 상향식(bottom-up) 접근을 취합니다.'
          : 'Grounded Theory is a qualitative research methodology first proposed by Glaser and Strauss (1967) in The Discovery of Grounded Theory, with the purpose of systematically generating theory grounded in data. Unlike deductive approaches that test existing theories, grounded theory takes a bottom-up approach, building theory inductively from field data.'}
      </p>

      <h3>{isKo ? 'Glaser vs Strauss & Corbin 접근' : 'Glaser vs Strauss & Corbin Approach'}</h3>
      <p>
        {isKo
          ? '근거이론은 이후 두 창시자가 서로 다른 방향으로 발전시켜, 크게 Glaser 학파와 Strauss & Corbin 학파로 나뉘게 되었습니다. 두 접근의 차이를 이해하는 것은 근거이론 연구 설계에 핵심적입니다.'
          : 'After its founding, grounded theory was developed in divergent directions by its two originators, resulting in the Glaserian school and the Straussian (Strauss & Corbin) school. Understanding the differences between these two approaches is essential for grounded theory research design.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '차원' : 'Dimension'}</th>
              <th>{isKo ? 'Glaser (1978, 1992)' : 'Glaser (1978, 1992)'}</th>
              <th>{isKo ? 'Strauss & Corbin (1990, 1998)' : 'Strauss & Corbin (1990, 1998)'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '인식론적 기반' : 'Epistemological Basis'}</td>
              <td>{isKo ? '실증주의적 경향 -- 이론은 데이터에서 자연스럽게 "출현(emerge)"한다' : 'Positivist leaning -- theory naturally "emerges" from data'}</td>
              <td>{isKo ? '실용주의/상호작용론 -- 연구자가 능동적으로 분석 도구를 활용' : 'Pragmatism/interactionism -- researcher actively uses analytical tools'}</td>
            </tr>
            <tr>
              <td>{isKo ? '코딩 절차' : 'Coding Procedure'}</td>
              <td>{isKo ? '실질 코딩(Substantive Coding) + 이론적 코딩(Theoretical Coding)의 2단계' : 'Two-stage: Substantive Coding + Theoretical Coding'}</td>
              <td>{isKo ? '개방 코딩 + 축 코딩 + 선택 코딩의 3단계 체계적 절차' : 'Three-stage systematic procedure: Open + Axial + Selective Coding'}</td>
            </tr>
            <tr>
              <td>{isKo ? '문헌 고찰 시점' : 'Literature Review Timing'}</td>
              <td>{isKo ? '분석 이후에 문헌을 검토 (선입견 방지)' : 'Review literature after analysis (to prevent preconceptions)'}</td>
              <td>{isKo ? '연구 초기부터 문헌 고찰을 병행 가능' : 'Literature review may be conducted from the early stages'}</td>
            </tr>
            <tr>
              <td>{isKo ? '분석 도구' : 'Analytical Tools'}</td>
              <td>{isKo ? '이론적 민감성(theoretical sensitivity)에 의존' : 'Relies on theoretical sensitivity'}</td>
              <td>{isKo ? '패러다임 모형, 조건 매트릭스 등 구조화된 도구 사용' : 'Uses structured tools such as paradigm model, conditional matrix'}</td>
            </tr>
            <tr>
              <td>{isKo ? '유연성' : 'Flexibility'}</td>
              <td>{isKo ? '매우 높음 -- 절차보다 창의적 발견을 강조' : 'Very high -- emphasizes creative discovery over procedure'}</td>
              <td>{isKo ? '상대적으로 구조화 -- 체계적 절차를 중시' : 'Relatively structured -- emphasizes systematic procedures'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? 'Charmaz의 구성주의적 근거이론' : 'Charmaz\'s Constructivist Grounded Theory'}</h3>
      <p>
        {isKo
          ? 'Charmaz(2006, 2014)는 구성주의적 근거이론(Constructivist Grounded Theory)을 제안하여 근거이론의 제3의 흐름을 형성하였습니다. Charmaz는 Glaser의 실증주의적 가정과 Strauss & Corbin의 지나친 체계화 모두를 비판하며, 이론이 데이터에서 "발견"되는 것이 아니라 연구자와 참여자의 상호작용을 통해 "구성"된다고 주장하였습니다. 구성주의적 근거이론은 연구자의 위치성(positionality), 성찰성(reflexivity), 그리고 권력 관계에 대한 민감성을 강조합니다.'
          : 'Charmaz (2006, 2014) proposed Constructivist Grounded Theory, forming a third stream of grounded theory. Charmaz critiqued both Glaser\'s positivist assumptions and Strauss & Corbin\'s excessive systematization, arguing that theory is not "discovered" from data but "constructed" through interaction between researcher and participants. Constructivist grounded theory emphasizes the researcher\'s positionality, reflexivity, and sensitivity to power relations.'}
      </p>

      <h3>{isKo ? '이론적 표집 (Theoretical Sampling)' : 'Theoretical Sampling'}</h3>
      <p>
        {isKo
          ? '이론적 표집(Theoretical Sampling)은 근거이론의 핵심 전략으로, 분석 과정에서 출현하는 범주와 개념을 정교화하기 위해 다음 데이터 수집 대상을 결정하는 방법입니다. 연구 초기에 모든 참여자를 미리 선정하는 것이 아니라, 지속적 비교 분석(constant comparative analysis) 과정에서 새로운 범주나 가설이 출현할 때마다 이를 검증하고 발전시킬 수 있는 참여자나 상황을 추가로 선정합니다.'
          : 'Theoretical sampling is a core strategy of grounded theory in which the researcher decides the next data collection targets to refine categories and concepts emerging during analysis. Rather than selecting all participants in advance, the researcher selects additional participants or situations to verify and develop new categories or hypotheses as they emerge during constant comparative analysis.'}
      </p>

      <h3>{isKo ? '코딩 절차: 개방 코딩, 축 코딩, 선택 코딩' : 'Coding Procedures: Open, Axial, and Selective Coding'}</h3>
      <p>
        {isKo
          ? 'Strauss와 Corbin(1990, 1998)의 체계에 따른 근거이론 코딩 절차는 다음과 같습니다.'
          : 'The grounded theory coding procedure according to Strauss and Corbin (1990, 1998) is as follows.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '개방 코딩 (Open Coding)' : 'Open Coding'}</strong>{' '}
          {isKo
            ? '-- 데이터를 줄 단위, 문장 단위, 사건 단위로 분해하고 개념(concept)을 부여한 후, 유사한 개념들을 묶어 범주(category)를 형성합니다. 각 범주의 속성(properties)과 차원(dimensions)을 파악합니다.'
            : '-- Break data into line-by-line, sentence-by-sentence, or incident-by-incident units, assign concepts, then group similar concepts into categories. Identify the properties and dimensions of each category.'}
        </li>
        <li>
          <strong>{isKo ? '축 코딩 (Axial Coding)' : 'Axial Coding'}</strong>{' '}
          {isKo
            ? '-- 개방 코딩에서 도출된 범주들 사이의 관계를 파악합니다. 패러다임 모형(Paradigm Model)을 활용하여 인과적 조건, 맥락적 조건, 중재적 조건, 작용/상호작용, 결과의 관계를 분석합니다.'
            : '-- Identify relationships among the categories derived from open coding. Use the Paradigm Model to analyze relationships among causal conditions, contextual conditions, intervening conditions, action/interaction strategies, and consequences.'}
        </li>
        <li>
          <strong>{isKo ? '선택 코딩 (Selective Coding)' : 'Selective Coding'}</strong>{' '}
          {isKo
            ? '-- 모든 범주를 통합하는 핵심 범주(core category)를 선택하고, 이를 중심으로 이론적 스토리라인(storyline)을 구성하여 최종 이론을 정립합니다.'
            : '-- Select a core category that integrates all categories, and construct a theoretical storyline around it to establish the final theory.'}
        </li>
      </ol>

      <h3>{isKo ? '패러다임 모형 (Paradigm Model)' : 'Paradigm Model'}</h3>
      <p>
        {isKo
          ? 'Strauss와 Corbin이 제시한 패러다임 모형은 축 코딩에서 범주 간 관계를 체계적으로 분석하기 위한 틀입니다.'
          : 'The Paradigm Model, proposed by Strauss and Corbin, is a framework for systematically analyzing relationships among categories during axial coding.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '구성 요소' : 'Component'}</th>
              <th>{isKo ? '설명' : 'Description'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '인과적 조건 (Causal Conditions)' : 'Causal Conditions'}</td>
              <td>{isKo ? '중심 현상을 유발하는 사건이나 상황' : 'Events or situations that cause the central phenomenon'}</td>
            </tr>
            <tr>
              <td>{isKo ? '중심 현상 (Central Phenomenon)' : 'Central Phenomenon'}</td>
              <td>{isKo ? '연구의 핵심이 되는 현상이나 경험' : 'The core phenomenon or experience of the study'}</td>
            </tr>
            <tr>
              <td>{isKo ? '맥락적 조건 (Contextual Conditions)' : 'Contextual Conditions'}</td>
              <td>{isKo ? '중심 현상이 발생하는 구체적 상황이나 환경' : 'Specific situations or environment in which the central phenomenon occurs'}</td>
            </tr>
            <tr>
              <td>{isKo ? '중재적 조건 (Intervening Conditions)' : 'Intervening Conditions'}</td>
              <td>{isKo ? '작용/상호작용 전략에 영향을 미치는 광범위한 조건' : 'Broad conditions that influence action/interaction strategies'}</td>
            </tr>
            <tr>
              <td>{isKo ? '작용/상호작용 전략 (Action/Interaction Strategies)' : 'Action/Interaction Strategies'}</td>
              <td>{isKo ? '중심 현상에 대처하기 위한 행위나 전략' : 'Actions or strategies taken to manage the central phenomenon'}</td>
            </tr>
            <tr>
              <td>{isKo ? '결과 (Consequences)' : 'Consequences'}</td>
              <td>{isKo ? '작용/상호작용 전략의 결과' : 'Outcomes of the action/interaction strategies'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '메모 작성 (Memo Writing)' : 'Memo Writing'}</h3>
      <p>
        {isKo
          ? '메모 작성은 근거이론의 필수적 분석 활동입니다. 연구자는 코딩 과정 전반에 걸쳐 자신의 분석적 사고, 범주 간 관계에 대한 가설, 이론적 통찰을 메모로 기록합니다. 메모는 코드 메모(code memo), 이론적 메모(theoretical memo), 운영 메모(operational memo) 등으로 구분될 수 있으며, 이 과정은 최종 이론의 정교화에 결정적 역할을 합니다. Charmaz(2014)는 메모 작성을 "분석의 핵심 단계"라 강조하며, 초기 코딩부터 이론 구성까지 끊임없이 메모를 작성할 것을 권고하였습니다.'
          : 'Memo writing is an essential analytical activity in grounded theory. Throughout the coding process, the researcher records analytical thoughts, hypotheses about relationships among categories, and theoretical insights in memos. Memos can be classified as code memos, theoretical memos, and operational memos, and this process plays a decisive role in refining the final theory. Charmaz (2014) emphasized memo writing as "the pivotal intermediate step" in analysis, recommending continuous memo writing from initial coding through theory construction.'}
      </p>

      <h3>{isKo ? '이론적 포화 (Theoretical Saturation)' : 'Theoretical Saturation'}</h3>
      <p>
        {isKo
          ? '이론적 포화(Theoretical Saturation)란 추가 데이터 수집이 더 이상 새로운 범주나 속성을 생성하지 않는 시점을 말합니다. 이론적 포화에 도달했다는 판단은 연구자의 분석적 숙고에 의존하며, 단순히 데이터가 반복된다는 것만으로는 충분하지 않습니다. 범주의 속성과 차원이 충분히 발전되었고, 범주 간 관계가 잘 확립되었으며, 변이(variation)가 충분히 설명될 때 이론적 포화에 도달했다고 판단합니다.'
          : 'Theoretical saturation refers to the point at which additional data collection no longer generates new categories or properties. The judgment that theoretical saturation has been reached depends on the researcher\'s analytical reflection; mere repetition of data is insufficient. Saturation is reached when properties and dimensions of categories are sufficiently developed, relationships among categories are well established, and variation is adequately accounted for.'}
      </p>

      <TipBox type="tip" title={isKo ? '근거이론 연구의 실제적 조언' : 'Practical Advice for Grounded Theory Research'}>
        <p>
          {isKo
            ? '근거이론 연구를 수행할 때 가장 흔한 실수는 코딩을 단순한 라벨링으로 축소하거나, 지속적 비교 분석 없이 기계적으로 코딩하는 것입니다. 성공적인 근거이론 연구를 위해서는 (1) 데이터 수집과 분석을 동시에 진행하고, (2) 지속적으로 메모를 작성하며, (3) 이론적 표집을 통해 범주를 정교화하고, (4) 연구자의 선입견을 괄호치기(bracketing)하는 노력이 필요합니다.'
            : 'The most common mistake in grounded theory research is reducing coding to mere labeling, or coding mechanically without constant comparative analysis. For successful grounded theory research: (1) conduct data collection and analysis simultaneously, (2) write memos continuously, (3) refine categories through theoretical sampling, and (4) make efforts to bracket the researcher\'s preconceptions.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 3 -- Phenomenological Research
   ================================================================= */
function PhenomenologySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-eye" />
        {isKo ? '현상학적 연구' : 'Phenomenological Research'}
      </h2>

      <h3>{isKo ? '현상학의 철학적 기원' : 'Philosophical Origins of Phenomenology'}</h3>
      <p>
        {isKo
          ? '현상학(Phenomenology)은 20세기 초 유럽 대륙 철학에서 발전한 철학적 전통으로, Edmund Husserl(1859-1938)이 그 창시자입니다. 현상학은 "사태 자체로!(Zu den Sachen selbst!)"라는 슬로건 아래, 선입견이나 이론적 가정 없이 경험의 본질(essence)을 직관적으로 파악하고자 합니다. 질적연구 방법론으로서의 현상학적 연구는 특정 현상에 대한 참여자들의 생생한 체험(lived experience)을 탐구하여 그 경험의 본질적 구조를 밝히는 것을 목적으로 합니다.'
          : 'Phenomenology is a philosophical tradition that developed in early 20th-century Continental European philosophy, founded by Edmund Husserl (1859-1938). Under the slogan "To the things themselves!" (Zu den Sachen selbst!), phenomenology seeks to intuitively grasp the essence of experience without preconceptions or theoretical assumptions. As a qualitative research methodology, phenomenological research aims to explore participants\' lived experiences of a particular phenomenon and reveal the essential structure of that experience.'}
      </p>

      <h3>{isKo ? 'Husserl의 초월적 현상학' : 'Husserl\'s Transcendental Phenomenology'}</h3>
      <p>
        {isKo
          ? 'Husserl의 초월적 현상학(Transcendental Phenomenology)은 모든 자연적 태도와 선입견을 "판단중지(epoché)"를 통해 괄호에 넣고, 순수한 의식 경험의 본질적 구조를 기술하고자 합니다. Husserl에게 현상학적 환원(phenomenological reduction)이란 자연적 태도에서 벗어나 의식에 주어진 현상 자체를 순수하게 기술하는 것을 의미합니다. 이 관점에서 연구자는 자신의 경험과 가정을 철저히 괄호치기(bracketing)하여, 참여자의 경험을 있는 그대로 기술해야 합니다.'
          : 'Husserl\'s Transcendental Phenomenology seeks to describe the essential structures of pure conscious experience by placing all natural attitudes and preconceptions in "brackets" through epoché. For Husserl, phenomenological reduction means stepping away from the natural attitude to purely describe phenomena as they are given to consciousness. From this perspective, the researcher must thoroughly bracket their own experiences and assumptions to describe participants\' experiences as they are.'}
      </p>

      <h3>{isKo ? 'Heidegger의 해석학적 현상학' : 'Heidegger\'s Hermeneutic Phenomenology'}</h3>
      <p>
        {isKo
          ? 'Martin Heidegger(1889-1976)는 Husserl의 제자이면서도 현상학을 해석학적(hermeneutic) 방향으로 발전시켰습니다. Heidegger는 인간 존재(Dasein)가 이미 "세계-내-존재(Being-in-the-world)"로서 세계와 불가분하게 연결되어 있다고 보았기 때문에, Husserl식의 완전한 판단중지(epoché)는 불가능하다고 비판하였습니다. 대신 Heidegger는 경험의 해석(interpretation)을 강조하며, 연구자의 선이해(fore-understanding)가 불가피하게 해석 과정에 개입함을 인정합니다. 이러한 입장은 van Manen(1990)의 해석학적 현상학 방법론에 직접적 영향을 미쳤습니다.'
          : 'Martin Heidegger (1889-1976), a student of Husserl, developed phenomenology in a hermeneutic (interpretive) direction. Heidegger viewed human existence (Dasein) as already inseparably connected to the world as "Being-in-the-world," and thus critiqued Husserl\'s complete epoché as impossible. Instead, Heidegger emphasized the interpretation of experience, acknowledging that the researcher\'s fore-understanding inevitably intervenes in the interpretive process. This position directly influenced van Manen\'s (1990) hermeneutic phenomenological methodology.'}
      </p>

      <h3>{isKo ? 'Moustakas의 현상학적 연구 방법' : 'Moustakas\'s Phenomenological Research Method'}</h3>
      <p>
        {isKo
          ? 'Clark Moustakas(1994)는 Husserl의 초월적 현상학에 기반한 체계적 연구 절차를 제시하였습니다. 이 방법은 경험적 현상학 연구에서 가장 널리 사용되는 절차 중 하나이며, 다음의 핵심 단계를 포함합니다.'
          : 'Clark Moustakas (1994) proposed a systematic research procedure based on Husserl\'s transcendental phenomenology. This method is one of the most widely used procedures in empirical phenomenological research and includes the following key steps.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '에포케 (Epoche)' : 'Epoche'}</strong>{' '}
          {isKo
            ? '-- 연구자가 연구 현상에 대한 자신의 선입견, 편견, 기존 지식을 의식적으로 괄호에 넣는(bracketing) 과정입니다. 이를 통해 참여자의 경험을 "신선한 눈"으로 바라볼 수 있습니다.'
            : '-- The process in which the researcher consciously brackets their preconceptions, biases, and prior knowledge about the phenomenon. This allows the researcher to view participants\' experiences with "fresh eyes."'}
        </li>
        <li>
          <strong>{isKo ? '현상학적 환원 (Phenomenological Reduction)' : 'Phenomenological Reduction'}</strong>{' '}
          {isKo
            ? '-- 경험의 질감(texture), 즉 참여자가 "무엇을" 경험했는지를 기술합니다. 개별 참여자의 경험 기술에서 의미 단위(meaning units)를 추출하고 주제를 도출하여 텍스처럴 기술(textural description)을 작성합니다.'
            : '-- Describes the texture of the experience, i.e., "what" the participant experienced. Extracts meaning units from individual participants\' experience descriptions, derives themes, and writes a textural description.'}
        </li>
        <li>
          <strong>{isKo ? '상상적 변형 (Imaginative Variation)' : 'Imaginative Variation'}</strong>{' '}
          {isKo
            ? '-- 경험의 구조(structure), 즉 경험이 "어떻게" 이루어졌는지를 탐구합니다. 다양한 관점, 역할, 기능의 가능한 의미를 상상적으로 변형하여 경험의 본질적 구조를 파악하고 구조적 기술(structural description)을 작성합니다.'
            : '-- Explores the structure of the experience, i.e., "how" the experience took place. Through imaginatively varying possible meanings from diverse perspectives, roles, and functions, the researcher grasps the essential structure of the experience and writes a structural description.'}
        </li>
        <li>
          <strong>{isKo ? '본질의 통합적 기술 (Synthesis)' : 'Synthesis of Essences'}</strong>{' '}
          {isKo
            ? '-- 텍스처럴 기술과 구조적 기술을 통합하여, 연구 현상의 본질(essence)에 대한 통합적 기술을 작성합니다. 이것이 현상학적 연구의 최종 산물입니다.'
            : '-- Integrates the textural and structural descriptions to create a composite description of the essence of the phenomenon. This is the final product of phenomenological research.'}
        </li>
      </ol>

      <h3>{isKo ? 'van Manen의 해석학적 현상학 방법' : 'van Manen\'s Hermeneutic Phenomenological Method'}</h3>
      <p>
        {isKo
          ? 'Max van Manen(1990, 2014)은 Heidegger의 해석학적 전통에 기반한 현상학적 연구 방법을 제시하였습니다. van Manen은 현상학적 연구를 "생활 세계(lifeworld)의 체험에 대한 해석적 기술"로 정의하며, 다음의 연구 활동을 제안합니다.'
          : 'Max van Manen (1990, 2014) proposed a phenomenological research method grounded in Heidegger\'s hermeneutic tradition. van Manen defined phenomenological research as "interpretive description of the experience of the lifeworld" and proposed the following research activities.'}
      </p>
      <ul>
        <li>
          {isKo
            ? '현상에 대한 깊은 관심과 몰입(turning to the nature of lived experience)'
            : 'Turning to the nature of lived experience with deep interest and commitment'}
        </li>
        <li>
          {isKo
            ? '체험을 있는 그대로 탐구(investigating experience as we live it)'
            : 'Investigating experience as we live it'}
        </li>
        <li>
          {isKo
            ? '경험을 특징짓는 본질적 주제 반성(reflecting on essential themes)'
            : 'Reflecting on essential themes that characterize the experience'}
        </li>
        <li>
          {isKo
            ? '글쓰기와 고쳐쓰기를 통한 현상 기술(describing the phenomenon through writing and rewriting)'
            : 'Describing the phenomenon through the art of writing and rewriting'}
        </li>
        <li>
          {isKo
            ? '연구 전반에 걸친 강한 교육학적 지향성 유지(maintaining a strong pedagogical orientation)'
            : 'Maintaining a strong and oriented pedagogical relation to the phenomenon'}
        </li>
        <li>
          {isKo
            ? '부분과 전체의 관계를 고려한 연구 텍스트 균형(balancing the research context by considering parts and whole)'
            : 'Balancing the research context by considering parts and whole'}
        </li>
      </ul>

      <h3>{isKo ? '생활세계의 네 가지 실존체' : 'Four Existentials of the Lifeworld'}</h3>
      <p>
        {isKo
          ? 'van Manen(1990)은 모든 인간 경험의 근본 구조로서 네 가지 생활세계 실존체(existentials)를 제시하였습니다. 이들은 현상학적 반성과 글쓰기의 안내 틀로 활용됩니다.'
          : 'van Manen (1990) proposed four lifeworld existentials as fundamental structures of all human experience. They serve as guiding frameworks for phenomenological reflection and writing.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '실존체' : 'Existential'}</th>
              <th>{isKo ? '설명' : 'Description'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '체험된 공간 (Lived Space / Spatiality)' : 'Lived Space (Spatiality)'}</td>
              <td>{isKo ? '우리가 경험하는 공간의 질적 차원 -- 공간이 어떻게 느껴지는가' : 'The qualitative dimension of space as experienced -- how space is felt'}</td>
            </tr>
            <tr>
              <td>{isKo ? '체험된 몸 (Lived Body / Corporeality)' : 'Lived Body (Corporeality)'}</td>
              <td>{isKo ? '우리가 세계 속에서 몸으로 존재하는 방식' : 'The way we exist bodily in the world'}</td>
            </tr>
            <tr>
              <td>{isKo ? '체험된 시간 (Lived Time / Temporality)' : 'Lived Time (Temporality)'}</td>
              <td>{isKo ? '주관적으로 경험되는 시간의 흐름과 의미' : 'The subjectively experienced flow and meaning of time'}</td>
            </tr>
            <tr>
              <td>{isKo ? '체험된 관계 (Lived Relation / Relationality)' : 'Lived Relation (Relationality)'}</td>
              <td>{isKo ? '타인과의 관계 속에서 경험되는 존재 방식' : 'The way we experience our existence in relation to others'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important" title={isKo ? '초월적 현상학 vs 해석학적 현상학' : 'Transcendental vs Hermeneutic Phenomenology'}>
        <p>
          {isKo
            ? '연구자는 현상학적 연구를 설계할 때 초월적 현상학(Moustakas)과 해석학적 현상학(van Manen) 중 하나를 명확히 선택해야 합니다. 초월적 현상학은 에포케와 환원을 통해 경험의 보편적 본질을 기술하는 데 초점을 두며, 해석학적 현상학은 연구자의 해석을 인정하고 체험의 의미를 해석적으로 탐구합니다. 두 접근은 서로 다른 철학적 가정에 기반하므로, 동일 연구에서 혼용하는 것은 방법론적으로 일관성을 해칠 수 있습니다.'
            : 'When designing phenomenological research, the researcher must clearly choose between transcendental phenomenology (Moustakas) and hermeneutic phenomenology (van Manen). Transcendental phenomenology focuses on describing the universal essence of experience through epoché and reduction, while hermeneutic phenomenology acknowledges the researcher\'s interpretation and explores the meaning of lived experience interpretively. Because the two approaches are based on different philosophical assumptions, mixing them in the same study may compromise methodological consistency.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 4 -- Case Study Research
   ================================================================= */
function CaseStudySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-folder-open" />
        {isKo ? '사례연구' : 'Case Study Research'}
      </h2>

      <h3>{isKo ? '사례연구의 정의와 특성' : 'Definition and Characteristics of Case Study Research'}</h3>
      <p>
        {isKo
          ? '사례연구(Case Study)는 하나 또는 소수의 사례(case)를 특정한 맥락(context) 속에서 심층적으로 탐구하는 연구 방법입니다. Yin(2018)은 사례연구를 "현대의 현상을 그것이 발생하는 실제 맥락 속에서, 특히 현상과 맥락 사이의 경계가 명확하지 않은 경우에 심층적으로 탐구하는 경험적 연구 방법"이라 정의하였습니다. 사례연구는 "어떻게(how)"와 "왜(why)"의 연구 질문에 특히 적합하며, 연구자가 사건에 대한 통제력이 거의 없고 현재 진행 중인 현상에 초점을 맞출 때 유용합니다.'
          : 'Case study research is a method that explores one or a few cases in depth within their specific context. Yin (2018) defined case study as "an empirical method that investigates a contemporary phenomenon in depth within its real-world context, especially when the boundaries between phenomenon and context may not be clearly evident." Case studies are particularly suited to "how" and "why" research questions, and are useful when the researcher has little control over events and focuses on contemporary phenomena.'}
      </p>

      <h3>{isKo ? 'Yin의 사례연구 접근' : 'Yin\'s Case Study Approach'}</h3>
      <p>
        {isKo
          ? 'Robert Yin(2018)의 사례연구 접근은 실증주의적(positivist) 경향을 가지며, 체계적인 연구 설계, 다중 증거 출처의 삼각검증, 그리고 분석적 일반화(analytic generalization)를 강조합니다. Yin은 사례연구 설계의 핵심 구성 요소로 연구 질문, 명제(propositions), 분석 단위, 데이터와 명제를 연결하는 논리, 연구 결과를 해석하는 기준을 제시합니다.'
          : 'Robert Yin\'s (2018) case study approach has a positivist orientation, emphasizing systematic research design, triangulation from multiple sources of evidence, and analytic generalization. Yin identifies the core components of case study design as research questions, propositions, units of analysis, logic linking data to propositions, and criteria for interpreting findings.'}
      </p>

      <h3>{isKo ? 'Stake의 사례연구 접근' : 'Stake\'s Case Study Approach'}</h3>
      <p>
        {isKo
          ? 'Robert Stake(1995, 2006)의 사례연구 접근은 구성주의적(constructivist) 관점에 기반합니다. Stake는 사례연구를 사례의 고유성(uniqueness)과 복잡성을 이해하기 위한 연구로 보며, 세 가지 유형으로 분류합니다: (1) 본질적 사례연구(intrinsic case study) -- 사례 자체에 대한 이해가 목적, (2) 도구적 사례연구(instrumental case study) -- 더 넓은 이슈나 이론적 문제를 이해하기 위해 특정 사례를 활용, (3) 집합적 사례연구(collective case study) -- 여러 사례를 도구적으로 연구.'
          : 'Robert Stake\'s (1995, 2006) case study approach is grounded in a constructivist perspective. Stake views case study as research aimed at understanding the uniqueness and complexity of a case, classifying it into three types: (1) intrinsic case study -- understanding the case itself is the purpose, (2) instrumental case study -- a particular case is used to understand a broader issue or theoretical question, (3) collective case study -- multiple cases are studied instrumentally.'}
      </p>

      <h3>{isKo ? '단일 사례 vs 다중 사례 설계' : 'Single vs Multiple Case Design'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '설계 유형' : 'Design Type'}</th>
              <th>{isKo ? '적용 상황' : 'When to Use'}</th>
              <th>{isKo ? '장점' : 'Advantages'}</th>
              <th>{isKo ? '한계' : 'Limitations'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '단일 사례 (Single Case)' : 'Single Case'}</td>
              <td>{isKo ? '결정적, 극단적/독특한, 대표적, 계시적, 종단적 사례' : 'Critical, extreme/unique, representative, revelatory, or longitudinal case'}</td>
              <td>{isKo ? '깊이 있는 탐구 가능, 풍부한 기술' : 'Allows in-depth exploration, rich description'}</td>
              <td>{isKo ? '일반화 제한, 잘못된 사례 선정 위험' : 'Limited generalization, risk of wrong case selection'}</td>
            </tr>
            <tr>
              <td>{isKo ? '다중 사례 (Multiple Case)' : 'Multiple Case'}</td>
              <td>{isKo ? '교차 사례 비교, 이론적 반복(replication) 논리 적용' : 'Cross-case comparison, theoretical replication logic'}</td>
              <td>{isKo ? '더 강력한 분석적 일반화, 패턴 확인' : 'Stronger analytic generalization, pattern identification'}</td>
              <td>{isKo ? '시간과 자원이 많이 필요, 각 사례의 깊이가 줄어들 수 있음' : 'Requires more time and resources, depth of each case may decrease'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '내재적 vs 총체적 설계' : 'Embedded vs Holistic Design'}</h3>
      <p>
        {isKo
          ? 'Yin(2018)은 분석 단위의 수에 따라 사례연구를 총체적(holistic) 설계와 내재적(embedded) 설계로 구분합니다. 총체적 설계는 사례 전체를 하나의 분석 단위로 다루는 반면, 내재적 설계는 하나의 사례 내에서 여러 하위 분석 단위(subunits)를 설정합니다. 예를 들어, 한 병원(사례)을 연구할 때 병원 전체를 분석하면 총체적 설계이고, 병원 내 각 부서를 별도의 하위 단위로 분석하면 내재적 설계입니다.'
          : 'Yin (2018) distinguishes between holistic and embedded case study designs based on the number of units of analysis. Holistic design treats the entire case as a single unit of analysis, while embedded design identifies multiple subunits within a single case. For example, when studying a hospital (the case), analyzing the entire hospital is a holistic design, while analyzing individual departments as separate subunits is an embedded design.'}
      </p>

      <h3>{isKo ? '사례 선정 전략' : 'Case Selection Strategies'}</h3>
      <p>
        {isKo
          ? '사례연구에서 적절한 사례를 선정하는 것은 연구의 성공에 결정적입니다. 사례 선정은 연구 목적, 연구 질문, 이론적 틀에 따라 달라지며, 다음과 같은 전략이 활용됩니다.'
          : 'Selecting appropriate cases is critical to the success of a case study. Case selection depends on the research purpose, research questions, and theoretical framework. The following strategies are commonly used.'}
      </p>
      <ul>
        <li><strong>{isKo ? '정보가 풍부한 사례 (Information-rich Cases)' : 'Information-rich Cases'}</strong> {isKo ? '-- 연구 현상에 대해 깊이 있는 정보를 제공할 수 있는 사례' : '-- Cases that can provide in-depth information about the phenomenon'}</li>
        <li><strong>{isKo ? '극단적/일탈적 사례 (Extreme/Deviant Cases)' : 'Extreme/Deviant Cases'}</strong> {isKo ? '-- 현상의 극단적 표현을 보이는 특이 사례' : '-- Unusual cases showing extreme manifestations of the phenomenon'}</li>
        <li><strong>{isKo ? '전형적 사례 (Typical Cases)' : 'Typical Cases'}</strong> {isKo ? '-- 해당 현상의 일반적이고 대표적인 사례' : '-- Cases representative and typical of the phenomenon'}</li>
        <li><strong>{isKo ? '최대 변이 사례 (Maximum Variation Cases)' : 'Maximum Variation Cases'}</strong> {isKo ? '-- 다양한 조건에서의 사례를 선정하여 변이의 범위를 탐구' : '-- Cases selected under diverse conditions to explore the range of variation'}</li>
        <li><strong>{isKo ? '반증 사례 (Disconfirming Cases)' : 'Disconfirming Cases'}</strong> {isKo ? '-- 기존 패턴이나 가설에 반대되는 사례를 의도적으로 선정' : '-- Cases deliberately selected that contradict existing patterns or hypotheses'}</li>
      </ul>

      <h3>{isKo ? '사례연구의 자료 수집' : 'Data Collection in Case Studies'}</h3>
      <p>
        {isKo
          ? 'Yin(2018)은 사례연구에서 여섯 가지 주요 증거 출처를 제시하였습니다: (1) 문서(documents) -- 공식 기록, 보고서, 내부 문서 등, (2) 기록물(archival records) -- 통계 자료, 조직 기록 등, (3) 면접(interviews) -- 주요 정보제공자와의 심층 면접, (4) 직접 관찰(direct observations) -- 현장 방문 및 관찰, (5) 참여관찰(participant observation) -- 연구자가 현장에 직접 참여, (6) 물리적 인공물(physical artifacts) -- 도구, 기기, 작품 등의 물리적 증거. 다중 출처에서 수집한 증거를 삼각검증(triangulation)하는 것이 사례연구의 구성 타당도를 높이는 핵심 전략입니다.'
          : 'Yin (2018) identified six major sources of evidence in case studies: (1) documents -- official records, reports, internal documents, (2) archival records -- statistical data, organizational records, (3) interviews -- in-depth interviews with key informants, (4) direct observations -- site visits and observation, (5) participant observation -- the researcher directly participates in the setting, (6) physical artifacts -- tools, devices, works, and other physical evidence. Triangulating evidence collected from multiple sources is a key strategy for enhancing construct validity in case studies.'}
      </p>

      <h3>{isKo ? '교차 사례 분석 (Cross-Case Analysis)' : 'Cross-Case Analysis'}</h3>
      <p>
        {isKo
          ? '다중 사례 연구에서 교차 사례 분석은 개별 사례의 분석 결과를 비교, 대조하여 사례 간 공통 패턴과 차이를 파악하는 과정입니다. Yin(2018)은 반복 논리(replication logic)에 따라 각 사례를 독립적 실험으로 취급하고, 사례 간 결과를 비교하여 이론적 명제를 지지 또는 수정할 것을 권고합니다. Stake(2006)는 다중 사례 분석에서 각 사례의 독특성을 존중하면서도 사례 간 주제적 연결(quintain)을 탐색하는 접근을 제안합니다.'
          : 'In multiple case studies, cross-case analysis is the process of comparing and contrasting findings from individual cases to identify common patterns and differences. Yin (2018) recommends treating each case as an independent experiment following replication logic, comparing results across cases to support or modify theoretical propositions. Stake (2006) proposes an approach that respects the uniqueness of each case while exploring thematic connections (quintain) across cases.'}
      </p>

      <TipBox type="tip" title={isKo ? '사례연구 프로토콜의 중요성' : 'Importance of a Case Study Protocol'}>
        <p>
          {isKo
            ? 'Yin(2018)은 사례연구의 신뢰성을 높이기 위해 사례연구 프로토콜(case study protocol)의 작성을 강조합니다. 프로토콜에는 연구 개요, 현장 접근 절차, 사례연구 질문, 보고서 안내가 포함되어야 합니다. 프로토콜은 특히 다중 사례 연구에서 일관된 자료 수집을 보장하는 핵심 도구입니다.'
            : 'Yin (2018) emphasizes the creation of a case study protocol to enhance the reliability of case studies. The protocol should include a study overview, field procedures, case study questions, and a guide for the report. The protocol is a key tool for ensuring consistent data collection, especially in multiple case studies.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 5 -- Data Collection and Analysis
   ================================================================= */
function DataCollectionSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-database" />
        {isKo ? '질적자료 수집과 분석' : 'Data Collection and Analysis'}
      </h2>

      <h3>{isKo ? '면접의 유형' : 'Types of Interviews'}</h3>
      <p>
        {isKo
          ? '면접은 질적연구에서 가장 보편적인 자료 수집 방법입니다. 구조화 수준에 따라 세 가지로 분류됩니다.'
          : 'Interviews are the most common data collection method in qualitative research. They are classified into three types based on their level of structure.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '유형' : 'Type'}</th>
              <th>{isKo ? '특성' : 'Characteristics'}</th>
              <th>{isKo ? '적합한 상황' : 'Suitable For'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '구조화 면접 (Structured)' : 'Structured Interview'}</td>
              <td>{isKo ? '사전 결정된 질문을 고정된 순서로 질문' : 'Predetermined questions asked in a fixed order'}</td>
              <td>{isKo ? '참여자 간 응답을 직접 비교할 때' : 'When direct comparison of responses across participants is needed'}</td>
            </tr>
            <tr>
              <td>{isKo ? '반구조화 면접 (Semi-structured)' : 'Semi-structured Interview'}</td>
              <td>{isKo ? '핵심 질문 목록이 있으나 추가 질문과 순서 조정 가능' : 'Core question list, but probing and reordering are allowed'}</td>
              <td>{isKo ? '특정 주제를 심층적으로 탐구하면서도 비교 가능성을 유지할 때' : 'When exploring specific topics in depth while maintaining comparability'}</td>
            </tr>
            <tr>
              <td>{isKo ? '비구조화 면접 (Unstructured)' : 'Unstructured Interview'}</td>
              <td>{isKo ? '최소한의 안내만 제공, 참여자의 자연스러운 내러티브를 따름' : 'Minimal guidance provided, follows participant\'s natural narrative'}</td>
              <td>{isKo ? '탐색적 연구 초기 단계, 내러티브 탐구' : 'Early exploratory stages, narrative inquiry'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '면접 프로토콜 (Interview Protocol)' : 'Interview Protocol'}</h3>
      <p>
        {isKo
          ? '면접 프로토콜은 면접의 진행을 안내하는 문서로, 일관되면서도 유연한 면접 수행을 가능하게 합니다. 잘 설계된 면접 프로토콜은 다음 요소를 포함합니다.'
          : 'An interview protocol is a document that guides the conduct of the interview, enabling consistent yet flexible implementation. A well-designed interview protocol includes the following elements.'}
      </p>
      <ol>
        <li>{isKo ? '도입부: 연구 소개, 동의서 확인, 녹음 동의' : 'Introduction: Study introduction, consent verification, recording agreement'}</li>
        <li>{isKo ? '워밍업 질문: 참여자의 긴장을 풀어주는 간단한 질문' : 'Warm-up questions: Simple questions to put the participant at ease'}</li>
        <li>{isKo ? '핵심 질문: 연구 주제에 직접 관련된 주요 질문 (5-10개)' : 'Core questions: Main questions directly related to the research topic (5-10)'}</li>
        <li>{isKo ? '탐색 질문(Probes): 응답을 깊이 있게 탐구하기 위한 후속 질문' : 'Probes: Follow-up questions to explore responses in depth'}</li>
        <li>{isKo ? '마무리: 추가할 내용 확인, 감사 인사, 후속 절차 안내' : 'Closing: Check for additions, express gratitude, explain follow-up procedures'}</li>
      </ol>

      <h3>{isKo ? '포커스그룹 (Focus Groups)' : 'Focus Groups'}</h3>
      <p>
        {isKo
          ? '포커스그룹은 연구자가 특정 주제에 대해 소규모 집단(보통 6-10명)의 참여자와 집단 토론을 진행하는 자료 수집 방법입니다. 개별 면접과 달리, 포커스그룹은 참여자 간의 상호작용과 토론을 통해 개인 면접에서는 드러나지 않는 다양한 관점과 집단 역학(group dynamics)을 포착할 수 있습니다. 진행자(moderator)의 역할은 토론을 촉진하되 특정 방향으로 유도하지 않는 것이 핵심입니다.'
          : 'A focus group is a data collection method in which the researcher conducts a group discussion with a small number of participants (usually 6-10) on a specific topic. Unlike individual interviews, focus groups capture diverse perspectives and group dynamics that may not emerge in individual interviews through interaction and discussion among participants. The key role of the moderator is to facilitate discussion without leading it in a particular direction.'}
      </p>

      <h3>{isKo ? '관찰 (Observation)' : 'Observation'}</h3>
      <p>
        {isKo
          ? '관찰은 연구자가 연구 현장에서 직접 행동, 사건, 상호작용을 관찰하고 기록하는 자료 수집 방법입니다. 참여 수준에 따라 참여관찰(participant observation)과 비참여관찰(non-participant observation)로 구분됩니다.'
          : 'Observation is a data collection method in which the researcher directly observes and records behaviors, events, and interactions in the research setting. Based on the level of participation, it is classified as participant observation or non-participant observation.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '참여관찰 (Participant Observation)' : 'Participant Observation'}</strong>{' '}
          {isKo
            ? '-- 연구자가 연구 현장에 직접 참여하면서 관찰합니다. 문화기술지 연구에서 핵심적으로 사용되며, Gold(1958)는 참여관찰자의 역할을 완전한 참여자, 관찰자로서의 참여자, 참여자로서의 관찰자, 완전한 관찰자의 네 유형으로 분류하였습니다.'
            : '-- The researcher participates directly in the setting while observing. Central to ethnographic research, Gold (1958) classified participant observer roles into four types: complete participant, participant-as-observer, observer-as-participant, and complete observer.'}
        </li>
        <li>
          <strong>{isKo ? '비참여관찰 (Non-participant Observation)' : 'Non-participant Observation'}</strong>{' '}
          {isKo
            ? '-- 연구자가 현장에 참여하지 않고 외부에서 관찰합니다. 연구자의 존재가 참여자 행동에 미치는 영향을 최소화할 수 있으나, 맥락적 이해의 깊이가 제한될 수 있습니다.'
            : '-- The researcher observes from the outside without participating in the setting. This can minimize the researcher\'s influence on participant behavior, but contextual understanding may be limited.'}
        </li>
      </ul>

      <h3>{isKo ? '현장 노트 (Field Notes)' : 'Field Notes'}</h3>
      <p>
        {isKo
          ? '현장 노트는 관찰 중 또는 관찰 직후에 작성하는 기록으로, 질적 자료의 중요한 부분입니다. Emerson, Fretz와 Shaw(2011)는 현장 노트 작성을 "참여, 관찰, 기록의 동시적 과정"으로 설명합니다. 현장 노트에는 기술적 노트(descriptive notes: 관찰한 것의 사실적 기록)와 성찰적 노트(reflective notes: 연구자의 감정, 해석, 분석적 아이디어)가 포함되어야 합니다.'
          : 'Field notes are records made during or immediately after observation and are an important part of qualitative data. Emerson, Fretz, and Shaw (2011) describe field note writing as "a simultaneous process of participating, observing, and recording." Field notes should include descriptive notes (factual records of what was observed) and reflective notes (the researcher\'s emotions, interpretations, and analytical ideas).'}
      </p>

      <h3>{isKo ? '전사 (Transcription)' : 'Transcription'}</h3>
      <p>
        {isKo
          ? '전사(Transcription)는 녹음된 면접이나 관찰 자료를 텍스트로 변환하는 과정입니다. 전사의 수준은 연구 목적에 따라 달라집니다. 기본 전사는 발화 내용만 텍스트화하고, 정밀 전사(detailed transcription)는 쉼, 웃음, 목소리 톤, 비언어적 행동까지 기록합니다. 대화분석(Conversation Analysis)이나 담론분석(Discourse Analysis)에서는 Jefferson 표기법 등의 정밀한 전사 체계가 사용됩니다.'
          : 'Transcription is the process of converting recorded interview or observation data into text. The level of transcription varies depending on the research purpose. Basic transcription converts speech content to text, while detailed transcription records pauses, laughter, voice tone, and non-verbal behaviors. In Conversation Analysis or Discourse Analysis, precise transcription systems such as Jefferson notation are used.'}
      </p>

      <h3>{isKo ? '코딩 (Coding)' : 'Coding'}</h3>
      <p>
        {isKo
          ? '코딩(Coding)은 질적 자료에 의미 있는 라벨(코드)을 부여하여 데이터를 조직, 분류, 해석하는 분석 과정입니다. Saldana(2021)는 코딩을 "데이터를 요약하고 재표현하는 발견적(heuristic) 탐구 과정"이라 정의하며, 1차 코딩과 2차 코딩의 반복적 순환을 강조합니다.'
          : 'Coding is an analytical process of assigning meaningful labels (codes) to qualitative data to organize, classify, and interpret it. Saldana (2021) defined coding as "a heuristic exploratory process of summarizing and re-presenting data," emphasizing the iterative cycle of first and second cycle coding.'}
      </p>
      <ul>
        <li><strong>{isKo ? '개방 코딩 (Open Coding)' : 'Open Coding'}</strong> {isKo ? '-- 데이터를 줄 단위로 검토하며 초기 코드를 부여하는 과정' : '-- Reviewing data line by line and assigning initial codes'}</li>
        <li><strong>{isKo ? '축 코딩 (Axial Coding)' : 'Axial Coding'}</strong> {isKo ? '-- 초기 코드들 간의 관계를 파악하고 범주를 조직하는 과정' : '-- Identifying relationships among initial codes and organizing categories'}</li>
        <li><strong>{isKo ? '선택 코딩 (Selective Coding)' : 'Selective Coding'}</strong> {isKo ? '-- 핵심 범주를 중심으로 이론을 통합하는 과정 (근거이론에서 주로 사용)' : '-- Integrating theory around a core category (primarily used in grounded theory)'}</li>
      </ul>

      <h3>{isKo ? 'Braun & Clarke의 주제분석 6단계' : 'Braun & Clarke\'s 6 Steps of Thematic Analysis'}</h3>
      <p>
        {isKo
          ? 'Braun과 Clarke(2006)의 주제분석(Thematic Analysis)은 질적 데이터에서 주제(theme)를 체계적으로 식별, 분석, 보고하는 방법으로, 특정 이론적 전통에 얽매이지 않는 유연한 분석 방법입니다.'
          : 'Braun and Clarke\'s (2006) Thematic Analysis is a method for systematically identifying, analyzing, and reporting themes in qualitative data. It is a flexible analytical method not tied to any particular theoretical tradition.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '1단계: 데이터 친숙화 (Familiarizing with Data)' : 'Phase 1: Familiarizing with Data'}</strong>{' '}
          {isKo
            ? '-- 전사 자료를 반복적으로 읽으며 데이터에 몰입하고, 초기 아이디어를 메모합니다.'
            : '-- Repeatedly read transcripts, immerse in data, and note initial ideas.'}
        </li>
        <li>
          <strong>{isKo ? '2단계: 초기 코드 생성 (Generating Initial Codes)' : 'Phase 2: Generating Initial Codes'}</strong>{' '}
          {isKo
            ? '-- 전체 데이터에 걸쳐 체계적으로 흥미로운 특성을 코딩하고, 각 코드에 해당하는 데이터를 수집합니다.'
            : '-- Systematically code interesting features across the entire dataset and collate data relevant to each code.'}
        </li>
        <li>
          <strong>{isKo ? '3단계: 주제 탐색 (Searching for Themes)' : 'Phase 3: Searching for Themes'}</strong>{' '}
          {isKo
            ? '-- 코드를 잠재적 주제로 분류하고, 관련 데이터를 각 후보 주제에 모읍니다.'
            : '-- Sort codes into potential themes and collate all relevant data within each candidate theme.'}
        </li>
        <li>
          <strong>{isKo ? '4단계: 주제 검토 (Reviewing Themes)' : 'Phase 4: Reviewing Themes'}</strong>{' '}
          {isKo
            ? '-- 추출된 주제가 코드와 전체 데이터셋에 적합한지 확인하고, 주제맵(thematic map)을 생성합니다.'
            : '-- Check whether themes work in relation to codes and the entire dataset, and generate a thematic map.'}
        </li>
        <li>
          <strong>{isKo ? '5단계: 주제 정의 및 명명 (Defining and Naming Themes)' : 'Phase 5: Defining and Naming Themes'}</strong>{' '}
          {isKo
            ? '-- 각 주제가 포착하는 것을 세밀하게 정의하고, 명확하고 간결한 이름을 부여합니다.'
            : '-- Refine the specifics of each theme and generate clear, concise names for each.'}
        </li>
        <li>
          <strong>{isKo ? '6단계: 보고서 작성 (Producing the Report)' : 'Phase 6: Producing the Report'}</strong>{' '}
          {isKo
            ? '-- 설득력 있는 데이터 발췌문을 선정하고, 연구 질문과 문헌에 연결하여 최종 분석 보고서를 작성합니다.'
            : '-- Select compelling data extracts and produce the final analysis report, linking back to research questions and literature.'}
        </li>
      </ol>

      <h3>{isKo ? '질적 분석 소프트웨어' : 'Qualitative Analysis Software'}</h3>
      <p>
        {isKo
          ? '컴퓨터 기반 질적 데이터 분석 소프트웨어(CAQDAS: Computer-Assisted Qualitative Data Analysis Software)는 대량의 질적 자료를 효율적으로 관리하고 분석하는 데 유용합니다. 대표적인 도구로는 NVivo와 ATLAS.ti가 있습니다.'
          : 'Computer-Assisted Qualitative Data Analysis Software (CAQDAS) is useful for efficiently managing and analyzing large volumes of qualitative data. Representative tools include NVivo and ATLAS.ti.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '소프트웨어' : 'Software'}</th>
              <th>{isKo ? '주요 기능' : 'Key Features'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NVivo</td>
              <td>{isKo ? '코딩, 주제 분석, 시각화(워드 클라우드, 트리맵), 자동 코딩, 팀 협업 지원, 다양한 데이터 형식 지원' : 'Coding, thematic analysis, visualization (word clouds, treemaps), auto-coding, team collaboration, supports diverse data formats'}</td>
            </tr>
            <tr>
              <td>ATLAS.ti</td>
              <td>{isKo ? '코딩, 네트워크 뷰(코드 간 관계 시각화), 하이퍼링크, 멀티미디어 자료 지원, 직관적 인터페이스' : 'Coding, network views (code relationship visualization), hyperlinks, multimedia data support, intuitive interface'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important" title={isKo ? '소프트웨어는 도구일 뿐' : 'Software Is Only a Tool'}>
        <p>
          {isKo
            ? 'CAQDAS는 자료 관리와 코딩의 효율성을 높여주지만, 분석 자체를 대신하지는 않습니다. 소프트웨어가 자동으로 주제를 발견하거나 이론을 생성하는 것이 아니라, 연구자의 분석적 사고와 해석이 핵심입니다. 소프트웨어를 도구로 활용하되, 분석의 질은 연구자의 역량에 달려 있음을 명심해야 합니다.'
            : 'CAQDAS improves efficiency in data management and coding, but it does not replace analysis itself. The software does not automatically discover themes or generate theory; the researcher\'s analytical thinking and interpretation remain central. Use software as a tool, but remember that the quality of analysis depends on the researcher\'s competence.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 6 -- Ensuring Trustworthiness
   ================================================================= */
function TrustworthinessSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-shield-halved" />
        {isKo ? '질적연구 신뢰성 확보' : 'Ensuring Trustworthiness'}
      </h2>

      <h3>{isKo ? 'Lincoln과 Guba의 신뢰성 기준' : 'Lincoln and Guba\'s Trustworthiness Criteria'}</h3>
      <p>
        {isKo
          ? 'Lincoln과 Guba(1985)는 양적연구의 타당도(validity)와 신뢰도(reliability) 개념에 대응하는 질적연구의 독자적 품질 기준으로 신뢰성(trustworthiness)을 제안하였습니다. 신뢰성은 네 가지 하위 기준으로 구성됩니다.'
          : 'Lincoln and Guba (1985) proposed trustworthiness as a quality criterion unique to qualitative research, corresponding to the concepts of validity and reliability in quantitative research. Trustworthiness comprises four sub-criteria.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '질적 기준' : 'Qualitative Criterion'}</th>
              <th>{isKo ? '양적 대응 개념' : 'Quantitative Counterpart'}</th>
              <th>{isKo ? '핵심 질문' : 'Central Question'}</th>
              <th>{isKo ? '주요 전략' : 'Key Strategies'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '신빙성 (Credibility)' : 'Credibility'}</td>
              <td>{isKo ? '내적 타당도' : 'Internal Validity'}</td>
              <td>{isKo ? '연구 결과가 참여자의 현실을 정확히 반영하는가?' : 'Do findings accurately reflect participants\' reality?'}</td>
              <td>{isKo ? '장기간 관여, 삼각검증, 동료 검토, 구성원 확인' : 'Prolonged engagement, triangulation, peer debriefing, member checking'}</td>
            </tr>
            <tr>
              <td>{isKo ? '전이가능성 (Transferability)' : 'Transferability'}</td>
              <td>{isKo ? '외적 타당도' : 'External Validity'}</td>
              <td>{isKo ? '연구 결과가 다른 맥락에 적용될 수 있는가?' : 'Can findings be applied to other contexts?'}</td>
              <td>{isKo ? '풍부한 기술(thick description)' : 'Thick description'}</td>
            </tr>
            <tr>
              <td>{isKo ? '의존가능성 (Dependability)' : 'Dependability'}</td>
              <td>{isKo ? '신뢰도' : 'Reliability'}</td>
              <td>{isKo ? '연구 과정이 일관되고 추적 가능한가?' : 'Is the research process consistent and traceable?'}</td>
              <td>{isKo ? '감사 추적(audit trail), 탐구 감사' : 'Audit trail, inquiry audit'}</td>
            </tr>
            <tr>
              <td>{isKo ? '확인가능성 (Confirmability)' : 'Confirmability'}</td>
              <td>{isKo ? '객관성' : 'Objectivity'}</td>
              <td>{isKo ? '연구 결과가 연구자의 편견이 아닌 데이터에 기반하는가?' : 'Are findings based on data rather than researcher bias?'}</td>
              <td>{isKo ? '감사 추적, 삼각검증, 성찰적 저널' : 'Audit trail, triangulation, reflexive journal'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '삼각검증 (Triangulation)' : 'Triangulation'}</h3>
      <p>
        {isKo
          ? '삼각검증(Triangulation)은 연구의 신빙성(credibility)을 높이기 위해 다양한 출처, 방법, 연구자, 이론을 활용하는 전략입니다. Denzin(1978)은 네 가지 유형의 삼각검증을 제시하였습니다.'
          : 'Triangulation is a strategy for enhancing credibility by using diverse sources, methods, investigators, and theories. Denzin (1978) proposed four types of triangulation.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '자료 삼각검증 (Data Triangulation)' : 'Data Triangulation'}</strong>{' '}
          {isKo
            ? '-- 다양한 시간, 장소, 사람으로부터 데이터를 수집합니다.'
            : '-- Collect data from diverse times, places, and persons.'}
        </li>
        <li>
          <strong>{isKo ? '연구자 삼각검증 (Investigator Triangulation)' : 'Investigator Triangulation'}</strong>{' '}
          {isKo
            ? '-- 여러 연구자가 동일 현상을 연구하여 개별 연구자의 편향을 줄입니다.'
            : '-- Multiple researchers study the same phenomenon to reduce individual researcher bias.'}
        </li>
        <li>
          <strong>{isKo ? '이론 삼각검증 (Theory Triangulation)' : 'Theory Triangulation'}</strong>{' '}
          {isKo
            ? '-- 다양한 이론적 관점에서 데이터를 해석합니다.'
            : '-- Interpret data from multiple theoretical perspectives.'}
        </li>
        <li>
          <strong>{isKo ? '방법론적 삼각검증 (Methodological Triangulation)' : 'Methodological Triangulation'}</strong>{' '}
          {isKo
            ? '-- 면접, 관찰, 문서 분석 등 다양한 방법을 사용하여 데이터를 수집합니다.'
            : '-- Use multiple methods such as interviews, observation, and document analysis to collect data.'}
        </li>
      </ul>

      <h3>{isKo ? '구성원 확인 (Member Checking)' : 'Member Checking'}</h3>
      <p>
        {isKo
          ? '구성원 확인(Member Checking)은 연구 결과나 해석을 연구 참여자에게 돌려보내어 정확성과 공감 여부를 확인받는 절차입니다. Lincoln과 Guba(1985)는 이를 "신빙성 확보를 위한 가장 중요한 단일 기법"이라 하였습니다. 참여자에게 전사 내용, 코딩 결과, 주제, 최종 해석 등을 검토하도록 하여 연구자의 해석이 참여자의 경험을 왜곡하지 않았는지 확인합니다.'
          : 'Member checking is a procedure in which research findings or interpretations are returned to participants to verify accuracy and resonance. Lincoln and Guba (1985) called it "the most critical technique for establishing credibility." Participants review transcriptions, coding results, themes, and final interpretations to ensure the researcher\'s interpretation does not distort their experiences.'}
      </p>

      <h3>{isKo ? '동료 검토 (Peer Debriefing)' : 'Peer Debriefing'}</h3>
      <p>
        {isKo
          ? '동료 검토(Peer Debriefing)는 연구에 직접 관여하지 않은 동료 연구자가 연구 과정과 결과를 비판적으로 검토하는 과정입니다. 동료 검토자는 연구자의 가정, 방법론적 결정, 해석의 타당성에 대해 도전적인 질문을 던져 연구자의 편견을 점검하고 분석의 질을 높이는 역할을 합니다.'
          : 'Peer debriefing is a process in which a colleague researcher not directly involved in the study critically reviews the research process and findings. The peer debriefer challenges the researcher\'s assumptions, methodological decisions, and the validity of interpretations, thereby checking for bias and enhancing the quality of analysis.'}
      </p>

      <h3>{isKo ? '감사 추적 (Audit Trail)' : 'Audit Trail'}</h3>
      <p>
        {isKo
          ? '감사 추적(Audit Trail)은 연구의 의존가능성과 확인가능성을 보장하기 위해 연구 과정 전체를 문서화하는 것입니다. 여기에는 원자료, 분석 메모, 코딩 결정의 근거, 연구 일지, 방법론적 결정의 기록 등이 포함됩니다. 감사 추적은 외부 연구자가 연구 과정을 추적하고 평가할 수 있게 해주며, 연구의 투명성을 높입니다.'
          : 'An audit trail is the documentation of the entire research process to ensure dependability and confirmability. It includes raw data, analytical memos, rationale for coding decisions, research journals, and records of methodological decisions. An audit trail enables external researchers to trace and evaluate the research process, enhancing transparency.'}
      </p>

      <h3>{isKo ? '성찰성 (Reflexivity)' : 'Reflexivity'}</h3>
      <p>
        {isKo
          ? '성찰성(Reflexivity)은 연구자가 자신의 배경, 가정, 가치관, 위치성(positionality)이 연구의 모든 단계에 미치는 영향을 지속적으로 검토하고 기록하는 과정입니다. 연구자는 성찰 일지(reflexive journal)를 작성하여 자신의 편견, 감정, 연구 과정에서의 중요한 결정과 그 근거를 기록합니다. Creswell과 Poth(2018)는 연구자가 자신의 경험이 연구 해석에 어떻게 영향을 미치는지를 솔직하게 밝히는 것이 질적연구의 투명성에 필수적이라 강조합니다.'
          : 'Reflexivity is the process by which the researcher continuously examines and documents how their background, assumptions, values, and positionality affect all stages of research. The researcher keeps a reflexive journal recording their biases, emotions, important decisions made during the research process, and their rationale. Creswell and Poth (2018) emphasize that honestly disclosing how the researcher\'s experience affects research interpretation is essential to qualitative research transparency.'}
      </p>

      <h3>{isKo ? '풍부한 기술 (Thick Description)' : 'Thick Description'}</h3>
      <p>
        {isKo
          ? '풍부한 기술(Thick Description)은 Geertz(1973)가 제안한 개념으로, 연구 맥락, 참여자, 과정, 경험을 매우 상세하게 기술하여 독자가 연구 상황을 충분히 이해하고, 자신의 상황에의 적용 가능성(전이가능성)을 판단할 수 있게 하는 것을 말합니다. 풍부한 기술은 단순한 사실의 나열이 아니라, 행위 이면의 의미, 맥락, 의도를 포함하는 해석적 기술입니다.'
          : 'Thick description, a concept proposed by Geertz (1973), refers to describing the research context, participants, processes, and experiences in such detail that readers can fully understand the research situation and judge its applicability (transferability) to their own contexts. Thick description is not a mere listing of facts but an interpretive account that includes the meanings, context, and intentions behind actions.'}
      </p>

      <TipBox type="tip" title={isKo ? '신뢰성 전략의 종합적 활용' : 'Comprehensive Use of Trustworthiness Strategies'}>
        <p>
          {isKo
            ? '질적연구의 신뢰성은 단일 전략만으로는 충분히 확보할 수 없습니다. 삼각검증, 구성원 확인, 동료 검토, 감사 추적, 성찰적 저널 등 여러 전략을 종합적으로 활용하는 것이 중요합니다. 연구 보고서에서 어떤 신뢰성 전략을 어떻게 적용했는지 구체적으로 기술하면, 독자와 심사자가 연구의 질을 평가하는 데 큰 도움이 됩니다.'
            : 'Trustworthiness in qualitative research cannot be adequately established through a single strategy alone. It is important to comprehensively employ multiple strategies such as triangulation, member checking, peer debriefing, audit trails, and reflexive journals. Specifically describing in the research report which trustworthiness strategies were applied and how greatly helps readers and reviewers evaluate the quality of the study.'}
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
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-book" />
        {isKo ? '참고문헌' : 'References'}
      </h2>

      <h3>{isKo ? '주요 참고문헌' : 'Key References'}</h3>
      <ul>
        <li>Braun, V., &amp; Clarke, V. (2006). Using thematic analysis in psychology. <em>Qualitative Research in Psychology, 3</em>(2), 77-101.</li>
        <li>Charmaz, K. (2006). <em>Constructing grounded theory: A practical guide through qualitative analysis</em>. Sage.</li>
        <li>Charmaz, K. (2014). <em>Constructing grounded theory</em> (2nd ed.). Sage.</li>
        <li>Creswell, J. W., &amp; Poth, C. N. (2018). <em>Qualitative inquiry and research design: Choosing among five approaches</em> (4th ed.). Sage.</li>
        <li>Denzin, N. K. (1978). <em>The research act: A theoretical introduction to sociological methods</em> (2nd ed.). McGraw-Hill.</li>
        <li>Denzin, N. K., &amp; Lincoln, Y. S. (Eds.). (2018). <em>The SAGE handbook of qualitative research</em> (5th ed.). Sage.</li>
        <li>Emerson, R. M., Fretz, R. I., &amp; Shaw, L. L. (2011). <em>Writing ethnographic fieldnotes</em> (2nd ed.). University of Chicago Press.</li>
        <li>Geertz, C. (1973). <em>The interpretation of cultures</em>. Basic Books.</li>
        <li>Glaser, B. G. (1978). <em>Theoretical sensitivity</em>. Sociology Press.</li>
        <li>Glaser, B. G. (1992). <em>Basics of grounded theory analysis</em>. Sociology Press.</li>
        <li>Glaser, B. G., &amp; Strauss, A. L. (1967). <em>The discovery of grounded theory: Strategies for qualitative research</em>. Aldine.</li>
        <li>Gold, R. L. (1958). Roles in sociological field observations. <em>Social Forces, 36</em>(3), 217-223.</li>
        <li>Guba, E. G., &amp; Lincoln, Y. S. (1994). Competing paradigms in qualitative research. In N. K. Denzin &amp; Y. S. Lincoln (Eds.), <em>Handbook of qualitative research</em> (pp. 105-117). Sage.</li>
        <li>Lincoln, Y. S., &amp; Guba, E. G. (1985). <em>Naturalistic inquiry</em>. Sage.</li>
        <li>Maxwell, J. A. (2013). <em>Qualitative research design: An interactive approach</em> (3rd ed.). Sage.</li>
        <li>Moustakas, C. (1994). <em>Phenomenological research methods</em>. Sage.</li>
        <li>Saldana, J. (2021). <em>The coding manual for qualitative researchers</em> (4th ed.). Sage.</li>
        <li>Stake, R. E. (1995). <em>The art of case study research</em>. Sage.</li>
        <li>Stake, R. E. (2006). <em>Multiple case study analysis</em>. Guilford Press.</li>
        <li>Strauss, A., &amp; Corbin, J. (1990). <em>Basics of qualitative research: Grounded theory procedures and techniques</em>. Sage.</li>
        <li>Strauss, A., &amp; Corbin, J. (1998). <em>Basics of qualitative research: Techniques and procedures for developing grounded theory</em> (2nd ed.). Sage.</li>
        <li>van Manen, M. (1990). <em>Researching lived experience: Human science for an action sensitive pedagogy</em>. SUNY Press.</li>
        <li>van Manen, M. (2014). <em>Phenomenology of practice: Meaning-giving methods in phenomenological research and writing</em>. Left Coast Press.</li>
        <li>Yin, R. K. (2018). <em>Case study research and applications: Design and methods</em> (6th ed.). Sage.</li>
      </ul>

      <h3>{isKo ? '한국어 참고문헌' : 'Korean-Language References'}</h3>
      <ul>
        <li>{isKo ? '김영천 (2016). ' : 'Kim, Y. C. (2016). '}<em>{isKo ? '질적연구방법론 I: Bricoleur' : 'Qualitative Research Methodology I: Bricoleur'}</em>. {isKo ? '아카데미프레스.' : 'Academy Press.'}</li>
        <li>{isKo ? '김영천 (2016). ' : 'Kim, Y. C. (2016). '}<em>{isKo ? '질적연구방법론 II: Methods' : 'Qualitative Research Methodology II: Methods'}</em>. {isKo ? '아카데미프레스.' : 'Academy Press.'}</li>
        <li>{isKo ? '조용환 (1999). ' : 'Cho, Y. H. (1999). '}<em>{isKo ? '질적연구: 방법과 사례' : 'Qualitative Research: Methods and Cases'}</em>. {isKo ? '교육과학사.' : 'Kyoyook-gwahak-sa.'}</li>
        <li>{isKo ? '이남인 (2014). ' : 'Lee, N. I. (2014). '}<em>{isKo ? '현상학과 질적연구: 응용현상학의 한 지평' : 'Phenomenology and Qualitative Research'}</em>. {isKo ? '한길사.' : 'Hangilsa.'}</li>
        <li>{isKo ? '유기웅, 정종원, 김영석, 김한별 (2018). ' : 'Yoo, K. W., Jeong, J. W., Kim, Y. S., & Kim, H. B. (2018). '}<em>{isKo ? '질적연구방법의 이해' : 'Understanding Qualitative Research Methods'}</em> ({isKo ? '제2판' : '2nd ed.'}). {isKo ? '박영스토리.' : 'Bakyoung Story.'}</li>
      </ul>

      <TipBox type="tip" title={isKo ? '추가 학습 자료' : 'Additional Learning Resources'}>
        <p>
          {isKo
            ? '질적연구 방법론을 심화 학습하기 위해서는 위의 핵심 문헌을 직접 읽는 것이 가장 효과적입니다. 또한 Sage Publications에서 제공하는 Sage Research Methods Online, SAGE Qualitative Research Methods 시리즈 등도 유용한 자료입니다. 학위 논문 작성 시에는 선행 질적연구 논문을 다수 검토하여 해당 방법론의 실제 적용 사례를 참고하는 것이 도움이 됩니다.'
            : 'Reading the core texts listed above is the most effective way to deepen your understanding of qualitative research methodology. Sage Publications also offers useful resources such as Sage Research Methods Online and the SAGE Qualitative Research Methods series. When writing a thesis, it is helpful to review numerous prior qualitative research studies to reference actual applications of the methodology.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Main Page Component
   ================================================================= */
export default function QualitativeMethods(): ReactElement {
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
        title={isKo ? '질적연구방법 | Research Master' : 'Qualitative Research Methods | Research Master'}
        description={
          isKo
            ? '근거이론, 현상학, 사례연구 등 질적연구 방법론을 체계적으로 학습합니다.'
            : 'Learn qualitative research methodology including grounded theory, phenomenology, and case study research.'
        }
        path="/qualitative-methods"
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
            {activeSection === 'grounded-theory' && <GroundedTheorySection isKo={isKo} />}
            {activeSection === 'phenomenology' && <PhenomenologySection isKo={isKo} />}
            {activeSection === 'case-study' && <CaseStudySection isKo={isKo} />}
            {activeSection === 'data-collection' && <DataCollectionSection isKo={isKo} />}
            {activeSection === 'trustworthiness' && <TrustworthinessSection isKo={isKo} />}
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
