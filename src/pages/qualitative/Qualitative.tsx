import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

/* ---------- sidebar nav sections ---------- */
const SECTIONS = [
  { id: 'understanding', icon: 'fa-eye', ko: '질적연구의 이해', en: 'Understanding Qualitative Research' },
  { id: 'interview', icon: 'fa-microphone', ko: '심층면접법', en: 'In-depth Interviews' },
  { id: 'focus-group', icon: 'fa-people-group', ko: '포커스그룹', en: 'Focus Groups' },
  { id: 'observation', icon: 'fa-binoculars', ko: '참여관찰', en: 'Participant Observation' },
  { id: 'theory', icon: 'fa-lightbulb', ko: '근거이론과 현상학', en: 'Grounded Theory & Phenomenology' },
  { id: 'analysis', icon: 'fa-tags', ko: '질적자료 분석', en: 'Qualitative Data Analysis' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* =================================================================
   Section 1 -- Understanding Qualitative Research
   ================================================================= */
function UnderstandingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-eye" />
        {isKo ? '질적연구의 이해' : 'Understanding Qualitative Research'}
      </h2>

      {/* What is qualitative research */}
      <h3>{isKo ? '질적연구란 무엇인가?' : 'What Is Qualitative Research?'}</h3>
      <p>
        {isKo
          ? '질적연구(Qualitative Research)는 인간의 경험, 의미, 관점을 심층적으로 탐구하는 연구 방법론입니다. 해석주의(Interpretivist) 패러다임에 기반하여, 연구 참여자들이 자신의 세계를 어떻게 이해하고 구성하는지를 파악하는 데 초점을 둡니다. 질적연구자는 숫자로 환원할 수 없는 복잡한 사회적 현상을 맥락 속에서 이해하고자 하며, 연구 참여자의 목소리와 관점을 충실히 반영하는 것을 중시합니다.'
          : 'Qualitative research is a research methodology that explores human experiences, meanings, and perspectives in depth. Rooted in the interpretivist paradigm, it focuses on understanding how research participants perceive and construct their own worlds. Qualitative researchers seek to understand complex social phenomena within their natural contexts\u2014phenomena that cannot be reduced to numbers\u2014and they prioritize faithfully representing the voices and perspectives of participants.'}
      </p>
      <p>
        {isKo
          ? '해석주의 패러다임은 사회적 현실이 객관적으로 존재하는 것이 아니라 개인의 경험과 상호작용을 통해 구성된다고 봅니다. 따라서 질적연구자는 단일한 "진리"를 찾기보다는 다양한 관점과 해석의 풍부함을 탐색합니다. 이러한 접근은 실증주의적 양적연구와는 근본적으로 다른 지식론적 토대를 가지고 있습니다.'
          : 'The interpretivist paradigm holds that social reality does not exist objectively but is constructed through individual experience and interaction. Accordingly, qualitative researchers do not seek a single "truth" but instead explore the richness of multiple perspectives and interpretations. This approach rests on an epistemological foundation fundamentally different from that of positivist quantitative research.'}
      </p>

      {/* Qualitative vs. Quantitative */}
      <h3>{isKo ? '질적연구 vs 양적연구: 철학적 차이' : 'Qualitative vs. Quantitative: Philosophical Differences'}</h3>
      <p>
        {isKo
          ? '질적연구와 양적연구의 차이는 단순히 데이터 유형(텍스트 vs 숫자)의 차이가 아닙니다. 두 접근법은 존재론(Ontology), 인식론(Epistemology), 방법론(Methodology)에서 근본적으로 다른 철학적 가정을 가지고 있습니다.'
          : 'The difference between qualitative and quantitative research is not merely about data types (text vs. numbers). The two approaches rest on fundamentally different philosophical assumptions regarding ontology, epistemology, and methodology.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '차원' : 'Dimension'}</th>
              <th>{isKo ? '질적연구' : 'Qualitative'}</th>
              <th>{isKo ? '양적연구' : 'Quantitative'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '존재론 (Ontology)' : 'Ontology'}</td>
              <td>{isKo ? '다중적 실재 \u2013 현실은 사회적으로 구성됨' : 'Multiple realities \u2013 reality is socially constructed'}</td>
              <td>{isKo ? '단일 실재 \u2013 객관적 현실이 존재함' : 'Single reality \u2013 objective reality exists'}</td>
            </tr>
            <tr>
              <td>{isKo ? '인식론 (Epistemology)' : 'Epistemology'}</td>
              <td>{isKo ? '연구자와 참여자의 상호작용을 통한 이해' : 'Understanding through researcher\u2013participant interaction'}</td>
              <td>{isKo ? '연구자와 대상의 독립적, 가치 중립적 관계' : 'Independent, value-free relationship between researcher and subject'}</td>
            </tr>
            <tr>
              <td>{isKo ? '방법론 (Methodology)' : 'Methodology'}</td>
              <td>{isKo ? '귀납적, 맥락적, 유연한 설계' : 'Inductive, contextual, flexible design'}</td>
              <td>{isKo ? '연역적, 통제적, 표준화된 설계' : 'Deductive, controlled, standardized design'}</td>
            </tr>
            <tr>
              <td>{isKo ? '목적' : 'Purpose'}</td>
              <td>{isKo ? '의미의 심층적 이해와 해석' : 'In-depth understanding and interpretation of meaning'}</td>
              <td>{isKo ? '변인 간 관계의 측정과 일반화' : 'Measurement of variable relationships and generalization'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key characteristics */}
      <h3>{isKo ? '질적연구의 핵심 특성' : 'Key Characteristics of Qualitative Research'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '자연주의적 탐구 (Naturalistic Inquiry)' : 'Naturalistic Inquiry'}</strong>{' '}
          {isKo
            ? '\u2013 연구 현상이 자연스럽게 발생하는 현장에서 데이터를 수집합니다. 실험실이 아닌 실제 맥락을 중시합니다.'
            : '\u2013 Data is collected in the natural setting where the phenomenon occurs. Real-world context is valued over laboratory conditions.'}
        </li>
        <li>
          <strong>{isKo ? '총체적 관점 (Holistic Perspective)' : 'Holistic Perspective'}</strong>{' '}
          {isKo
            ? '\u2013 현상을 개별 변인으로 분리하지 않고, 전체적인 맥락 속에서 통합적으로 이해하려고 합니다.'
            : '\u2013 Rather than isolating individual variables, the phenomenon is understood holistically within its full context.'}
        </li>
        <li>
          <strong>{isKo ? '귀납적 추론 (Inductive Reasoning)' : 'Inductive Reasoning'}</strong>{' '}
          {isKo
            ? '\u2013 사전에 설정된 가설을 검증하기보다, 데이터에서 패턴과 주제를 도출하여 이론을 구성합니다.'
            : '\u2013 Rather than testing pre-set hypotheses, patterns and themes are derived from data to build theory.'}
        </li>
        <li>
          <strong>{isKo ? '연구자가 핵심 도구' : 'Researcher as Key Instrument'}</strong>{' '}
          {isKo
            ? '\u2013 연구자 자신이 데이터 수집과 분석의 주요 도구가 되며, 연구자의 성찰성(Reflexivity)이 중요합니다.'
            : '\u2013 The researcher serves as the primary instrument for data collection and analysis; reflexivity is essential.'}
        </li>
        <li>
          <strong>{isKo ? '풍부한 기술 (Rich Description)' : 'Rich (Thick) Description'}</strong>{' '}
          {isKo
            ? '\u2013 연구 결과를 두꺼운 기술(Thick Description)로 제시하여 독자가 맥락을 충분히 이해할 수 있도록 합니다.'
            : '\u2013 Findings are presented through thick description so that readers can fully understand the context.'}
        </li>
      </ul>

      {/* Major qualitative traditions */}
      <h3>{isKo ? '주요 질적연구 전통' : 'Major Qualitative Traditions'}</h3>
      <p>
        {isKo
          ? '질적연구에는 다양한 전통(tradition)이 있으며, 각 전통은 고유한 철학적 뿌리와 방법론적 절차를 가지고 있습니다.'
          : 'Qualitative research encompasses several distinct traditions, each with its own philosophical roots and methodological procedures.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '문화기술지 (Ethnography)' : 'Ethnography'}</strong> \u2013{' '}
          {isKo
            ? '특정 문화 집단의 공유된 패턴, 가치, 행동을 장기간의 현장 참여를 통해 기술하고 해석합니다.'
            : 'Describes and interprets the shared patterns, values, and behaviors of a cultural group through prolonged fieldwork.'}
        </li>
        <li>
          <strong>{isKo ? '현상학 (Phenomenology)' : 'Phenomenology'}</strong> \u2013{' '}
          {isKo
            ? '특정 경험의 본질(essence)을 파악하기 위해 참여자들의 생생한 체험(lived experience)을 탐구합니다.'
            : 'Explores the lived experiences of participants to identify the essence of a particular phenomenon.'}
        </li>
        <li>
          <strong>{isKo ? '근거이론 (Grounded Theory)' : 'Grounded Theory'}</strong> \u2013{' '}
          {isKo
            ? '데이터에 근거하여(grounded) 이론을 체계적으로 생성하는 방법론입니다. 기존 이론이 부족한 영역에 유용합니다.'
            : 'A methodology for systematically generating theory grounded in data. Especially useful in areas where existing theory is lacking.'}
        </li>
        <li>
          <strong>{isKo ? '사례연구 (Case Study)' : 'Case Study'}</strong> \u2013{' '}
          {isKo
            ? '특정 사례(개인, 집단, 프로그램, 사건 등)를 깊이 있게 분석하여 해당 사례의 복잡성을 이해합니다.'
            : 'Analyzes a particular case (individual, group, program, event) in depth to understand its complexity.'}
        </li>
        <li>
          <strong>{isKo ? '내러티브 탐구 (Narrative Inquiry)' : 'Narrative Inquiry'}</strong> \u2013{' '}
          {isKo
            ? '참여자의 이야기(narrative)를 통해 경험의 의미를 구성하고 재구성하는 과정을 탐구합니다.'
            : 'Explores how participants construct and reconstruct meaning through their personal stories and narratives.'}
        </li>
      </ul>

      {/* When to use */}
      <h3>{isKo ? '질적연구는 언제 사용하는가?' : 'When Should You Use Qualitative Research?'}</h3>
      <p>
        {isKo
          ? '질적연구는 다음과 같은 상황에서 특히 유용합니다: (1) 연구 주제에 대한 기존 이론이나 지식이 부족할 때, (2) 참여자의 주관적 경험과 의미를 깊이 이해하고자 할 때, (3) 복잡한 사회적 과정이나 맥락을 탐구할 때, (4) 새로운 이론이나 가설을 생성하고자 할 때, (5) 소외된 집단의 목소리를 드러내고자 할 때.'
          : 'Qualitative research is particularly useful when: (1) existing theory or knowledge about the topic is insufficient; (2) you want to deeply understand participants\u2019 subjective experiences and meanings; (3) you need to explore complex social processes or contexts; (4) you want to generate new theories or hypotheses; (5) you aim to amplify the voices of marginalized groups.'}
      </p>

      {/* Strengths and limitations */}
      <h3>{isKo ? '강점과 한계' : 'Strengths and Limitations'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '강점' : 'Strengths'}</th>
              <th>{isKo ? '한계' : 'Limitations'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '현상의 깊이 있는 이해' : 'In-depth understanding of phenomena'}</td>
              <td>{isKo ? '결과의 일반화(Generalization)가 어려움' : 'Difficulty generalizing findings'}</td>
            </tr>
            <tr>
              <td>{isKo ? '맥락적 풍부함 제공' : 'Provides contextual richness'}</td>
              <td>{isKo ? '시간과 비용이 많이 소요' : 'Time-consuming and resource-intensive'}</td>
            </tr>
            <tr>
              <td>{isKo ? '참여자의 목소리를 직접 반영' : 'Directly reflects participants\u2019 voices'}</td>
              <td>{isKo ? '연구자 편향(Researcher Bias)의 위험' : 'Risk of researcher bias'}</td>
            </tr>
            <tr>
              <td>{isKo ? '유연한 연구 설계 가능' : 'Flexible research design'}</td>
              <td>{isKo ? '분석의 주관성에 대한 비판 가능' : 'Potential criticism of analytical subjectivity'}</td>
            </tr>
            <tr>
              <td>{isKo ? '예상치 못한 발견 가능' : 'Allows unexpected discoveries'}</td>
              <td>{isKo ? '대규모 표본에 적용 어려움' : 'Difficult to apply to large samples'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="important" title={isKo ? '질적연구의 엄밀성' : 'Rigor in Qualitative Research'}>
        <p>
          {isKo
            ? '질적연구가 양적연구에 비해 "덜 엄밀하다"는 것은 흔한 오해입니다. 질적연구는 양적연구와 다른 기준의 엄밀성을 추구합니다. 양적연구가 신뢰도(Reliability)와 타당도(Validity)를 강조하는 반면, 질적연구는 신뢰성(Trustworthiness)\u2014즉 신빙성(Credibility), 전이가능성(Transferability), 의존가능성(Dependability), 확인가능성(Confirmability)\u2014을 통해 연구의 질을 보장합니다. Lincoln과 Guba(1985)가 제시한 이 기준은 질적연구의 독자적인 품질 평가 체계로 널리 사용되고 있습니다.'
            : 'The notion that qualitative research is "less rigorous" than quantitative research is a common misconception. Qualitative research pursues rigor by different standards. While quantitative research emphasizes reliability and validity, qualitative research ensures quality through trustworthiness\u2014credibility, transferability, dependability, and confirmability. These criteria, proposed by Lincoln and Guba (1985), serve as a widely accepted quality framework unique to qualitative inquiry.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 2 -- In-depth Interviews
   ================================================================= */
function InterviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-microphone" />
        {isKo ? '심층면접법' : 'In-depth Interviews'}
      </h2>

      {/* Types of interviews */}
      <h3>{isKo ? '면접의 유형' : 'Types of Interviews'}</h3>
      <p>
        {isKo
          ? '심층면접(In-depth Interview)은 질적연구에서 가장 널리 사용되는 자료 수집 방법 중 하나로, 연구 참여자와의 대화를 통해 그들의 경험, 관점, 감정을 깊이 있게 탐구합니다. 면접의 구조화 수준에 따라 세 가지 유형으로 구분됩니다.'
          : 'The in-depth interview is one of the most widely used data collection methods in qualitative research. Through conversation with participants, researchers explore experiences, perspectives, and emotions in depth. Interviews are classified into three types based on their level of structure.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '구조화 면접 (Structured Interview)' : 'Structured Interview'}</strong> \u2013{' '}
          {isKo
            ? '미리 정해진 질문을 정해진 순서대로 묻습니다. 모든 참여자에게 동일한 질문을 하므로 비교가 용이하지만, 유연성이 부족합니다.'
            : 'Asks predetermined questions in a fixed order. The same questions are posed to all participants, making comparison easy, but flexibility is limited.'}
        </li>
        <li>
          <strong>{isKo ? '반구조화 면접 (Semi-structured Interview)' : 'Semi-structured Interview'}</strong> \u2013{' '}
          {isKo
            ? '핵심 질문 목록(면접 가이드)을 준비하되, 참여자의 응답에 따라 추가 질문이나 순서 변경이 가능합니다. 질적연구에서 가장 많이 사용되는 유형입니다.'
            : 'A core question list (interview guide) is prepared, but additional questions and reordering are permitted based on participant responses. This is the most common type in qualitative research.'}
        </li>
        <li>
          <strong>{isKo ? '비구조화 면접 (Unstructured Interview)' : 'Unstructured Interview'}</strong> \u2013{' '}
          {isKo
            ? '최소한의 가이드만 두고 참여자의 이야기가 자연스럽게 흘러가도록 합니다. 탐색적 연구 초기 단계에 유용합니다.'
            : 'Only minimal guidance is provided, allowing the participant\u2019s narrative to unfold naturally. Useful in early exploratory stages of research.'}
        </li>
      </ul>

      {/* Interview guide development */}
      <h3>{isKo ? '면접 가이드 개발' : 'Interview Guide Development'}</h3>
      <p>
        {isKo
          ? '효과적인 면접 가이드는 연구 질문에 직접 연결되면서도 참여자가 자유롭게 이야기할 수 있는 공간을 제공해야 합니다. 개방형 질문(Open-ended questions)을 사용하고, "예/아니오"로 답할 수 있는 폐쇄형 질문은 피합니다. 가이드는 도입 질문(Warm-up), 핵심 질문(Key questions), 마무리 질문(Closing questions)으로 구성하는 것이 일반적입니다.'
          : 'An effective interview guide should be directly connected to research questions while providing space for participants to speak freely. Use open-ended questions and avoid closed questions answerable with "yes/no." Guides are typically structured into warm-up questions, key questions, and closing questions.'}
      </p>

      {/* Probing techniques */}
      <h3>{isKo ? '탐침 기법 (Probing Techniques)' : 'Probing Techniques'}</h3>
      <p>
        {isKo
          ? '탐침(Probing)은 참여자의 초기 응답을 더 깊이 탐색하기 위한 후속 질문 기법입니다. 숙련된 면접자는 다양한 탐침 기법을 적절히 활용합니다.'
          : 'Probing involves follow-up question techniques used to explore a participant\u2019s initial response in greater depth. Skilled interviewers employ a variety of probing techniques as appropriate.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '후속 탐침 (Follow-up)' : 'Follow-up Probe'}</strong> \u2013{' '}
          {isKo ? '"그 부분에 대해 좀 더 이야기해 주시겠어요?"' : '"Could you tell me more about that?"'}
        </li>
        <li>
          <strong>{isKo ? '명확화 탐침 (Clarification)' : 'Clarification Probe'}</strong> \u2013{' '}
          {isKo ? '"말씀하신 내용이 구체적으로 어떤 의미인지 설명해 주시겠어요?"' : '"Could you explain what you mean by that specifically?"'}
        </li>
        <li>
          <strong>{isKo ? '정교화 탐침 (Elaboration)' : 'Elaboration Probe'}</strong> \u2013{' '}
          {isKo ? '"구체적인 예를 들어 주실 수 있나요?"' : '"Could you give me a specific example?"'}
        </li>
        <li>
          <strong>{isKo ? '침묵 (Silence)' : 'Silence'}</strong> \u2013{' '}
          {isKo ? '의도적 침묵을 통해 참여자가 더 깊이 생각하고 말할 수 있는 여유를 줍니다.' : 'Intentional silence gives participants space to think more deeply and continue speaking.'}
        </li>
      </ul>

      {/* Building rapport */}
      <h3>{isKo ? '라포 형성' : 'Building Rapport'}</h3>
      <p>
        {isKo
          ? '라포(Rapport)는 연구자와 참여자 사이의 신뢰와 편안함의 관계를 의미합니다. 질 높은 데이터를 얻기 위해서는 참여자가 솔직하게 자신의 경험을 공유할 수 있는 안전한 환경을 조성해야 합니다. 연구 목적을 명확히 설명하고, 비밀보장을 확실히 하며, 참여자의 이야기에 진심으로 관심을 보이는 것이 중요합니다. 비언어적 의사소통(눈 맞춤, 끄덕임, 열린 자세)도 라포 형성에 큰 역할을 합니다.'
          : 'Rapport refers to the relationship of trust and comfort between researcher and participant. To obtain high-quality data, a safe environment must be created in which participants can honestly share their experiences. Clearly explaining the research purpose, ensuring confidentiality, and showing genuine interest in participants\u2019 stories are all essential. Non-verbal communication (eye contact, nodding, open posture) also plays a major role in building rapport.'}
      </p>

      {/* Recording and transcription */}
      <h3>{isKo ? '녹음과 전사' : 'Recording and Transcription'}</h3>
      <p>
        {isKo
          ? '면접 내용은 참여자의 동의를 얻어 녹음(Audio Recording)하는 것이 원칙입니다. 녹음된 자료는 이후 전사(Transcription)\u2014음성을 텍스트로 변환하는 과정\u2014를 거칩니다. 전사의 수준은 연구 목적에 따라 달라지는데, 대화분석(Conversation Analysis)과 같은 연구에서는 억양, 쉼, 겹침 등을 정밀하게 기록하는 반면, 일반적인 주제 분석에서는 내용 중심의 전사로 충분합니다.'
          : 'Interviews should be audio-recorded with participant consent. Recorded material then undergoes transcription\u2014the process of converting speech to text. The level of detail in transcription depends on the research purpose: conversation analysis requires precise notation of intonation, pauses, and overlaps, whereas standard thematic analysis can rely on content-focused transcription.'}
      </p>

      {/* Practical considerations */}
      <h3>{isKo ? '실제적 고려사항' : 'Practical Considerations'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '면접 장소' : 'Setting'}</strong> \u2013{' '}
          {isKo
            ? '참여자가 편안하게 느끼는 조용하고 사적인 공간을 선택합니다. 카페, 연구실, 참여자의 직장이나 가정 등이 활용됩니다.'
            : 'Choose a quiet, private space where participants feel comfortable\u2014a caf\u00e9, research office, participant\u2019s workplace, or home.'}
        </li>
        <li>
          <strong>{isKo ? '소요 시간' : 'Duration'}</strong> \u2013{' '}
          {isKo
            ? '일반적으로 60\u201390분이 적절하며, 주제의 복잡성에 따라 2시간 이상 소요되기도 합니다.'
            : 'Typically 60\u201390 minutes is appropriate; depending on topic complexity, interviews may last over two hours.'}
        </li>
        <li>
          <strong>{isKo ? '면접 횟수' : 'Number of Interviews'}</strong> \u2013{' '}
          {isKo
            ? '참여자 수는 연구 전통에 따라 다르지만, 대부분 12\u201325명 정도가 일반적이며, 이론적 포화(Theoretical Saturation)를 기준으로 판단합니다.'
            : 'Sample size varies by tradition, but 12\u201325 participants is typical. The decision is guided by theoretical saturation.'}
        </li>
      </ul>

      {/* Saturation */}
      <h3>{isKo ? '포화 (Saturation)' : 'The Concept of Saturation'}</h3>
      <p>
        {isKo
          ? '이론적 포화(Theoretical Saturation)란 추가 면접을 진행해도 새로운 주제나 패턴이 더 이상 나타나지 않는 시점을 의미합니다. 이는 질적연구에서 표본 크기를 결정하는 핵심 기준입니다. 포화는 미리 정확히 예측할 수 없으므로, 연구자는 데이터 수집과 분석을 동시에 진행하면서 포화 여부를 지속적으로 평가해야 합니다.'
          : 'Theoretical saturation refers to the point at which additional interviews no longer yield new themes or patterns. It is the key criterion for determining sample size in qualitative research. Because saturation cannot be predicted in advance, researchers must continuously evaluate it by conducting data collection and analysis concurrently.'}
      </p>

      <TipBox type="tip" title={isKo ? '효과적인 면접 질문 작성법' : 'Preparing Effective Interview Questions'}>
        <p>
          {isKo
            ? '좋은 면접 질문을 작성하려면 다음 원칙을 따르세요: (1) 개방형 질문을 사용하세요 ("어떻게", "무엇을" 으로 시작). (2) 유도 질문을 피하세요 (\u00d7 "그 경험이 힘들었나요?" \u2192 \u25cb "그 경험은 어떠했나요?"). (3) 하나의 질문에 두 가지 이상을 묻지 마세요 (Double-barreled question 회피). (4) 참여자의 언어 수준에 맞추세요. (5) 파일럿 면접을 통해 질문을 사전 검증하세요. 면접 가이드는 고정된 대본이 아니라 유연하게 활용할 수 있는 안내서임을 기억하세요.'
            : 'Follow these principles for effective interview questions: (1) Use open-ended questions (beginning with "how" or "what"). (2) Avoid leading questions (\u00d7 "Was that experience difficult?" \u2192 \u25cb "What was that experience like?"). (3) Avoid double-barreled questions\u2014ask about one thing at a time. (4) Match participants\u2019 language level. (5) Pre-test your questions through pilot interviews. Remember that an interview guide is a flexible tool, not a rigid script.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 3 -- Focus Groups
   ================================================================= */
function FocusGroupSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-people-group" />
        {isKo ? '포커스그룹' : 'Focus Groups'}
      </h2>

      {/* What is a focus group */}
      <h3>{isKo ? '포커스그룹이란?' : 'What Is a Focus Group?'}</h3>
      <p>
        {isKo
          ? '포커스그룹(Focus Group)은 특정 주제에 대해 소규모 참여자 집단이 사회자(Moderator)의 안내 하에 자유롭게 토론하는 질적 자료 수집 방법입니다. 개별 면접과 달리, 참여자들 간의 상호작용과 집단 역동(Group Dynamics)을 통해 풍부한 데이터를 생성하는 것이 특징입니다. 한 참여자의 발언이 다른 참여자의 생각을 자극하는 시너지 효과(Synergy)가 포커스그룹의 가장 큰 장점입니다.'
          : 'A focus group is a qualitative data collection method in which a small group of participants freely discusses a specific topic under the guidance of a moderator. Unlike individual interviews, its distinguishing feature is that rich data are generated through participant interaction and group dynamics. The synergy\u2014where one participant\u2019s remarks spark ideas in others\u2014is the greatest advantage of focus groups.'}
      </p>
      <p>
        {isKo
          ? '포커스그룹은 1940년대 Robert Merton에 의해 체계화된 이후 사회과학, 마케팅, 보건학, 교육학 등 다양한 분야에서 활용되고 있습니다. 특히 집단의 공유된 경험이나 특정 이슈에 대한 다양한 관점을 탐색할 때 효과적입니다.'
          : 'Focus groups have been used across social science, marketing, public health, education, and many other fields since Robert Merton systematized the method in the 1940s. They are especially effective for exploring a group\u2019s shared experiences or diverse perspectives on a particular issue.'}
      </p>

      {/* Planning */}
      <h3>{isKo ? '포커스그룹 계획' : 'Planning a Focus Group'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '집단 구성 (Group Composition)' : 'Group Composition'}</strong> \u2013{' '}
          {isKo
            ? '참여자는 연구 주제와 관련된 공통된 특성을 공유하면서도 다양한 관점을 가진 사람들로 구성합니다. 동질적(Homogeneous) 그룹이 일반적이지만, 연구 목적에 따라 이질적 그룹을 구성할 수도 있습니다.'
            : 'Participants share common characteristics relevant to the topic while bringing diverse perspectives. Homogeneous groups are typical, but heterogeneous groups may be formed depending on research goals.'}
        </li>
        <li>
          <strong>{isKo ? '집단 규모' : 'Group Size'}</strong> \u2013{' '}
          {isKo
            ? '일반적으로 6\u201310명이 적절합니다. 6명 미만이면 토론이 활발하지 않을 수 있고, 10명을 초과하면 모든 참여자가 충분히 발언하기 어렵습니다.'
            : 'Typically 6\u201310 participants is ideal. Fewer than 6 may yield insufficient discussion; more than 10 makes it difficult for everyone to contribute fully.'}
        </li>
        <li>
          <strong>{isKo ? '집단 수' : 'Number of Groups'}</strong> \u2013{' '}
          {isKo
            ? '최소 3\u20144개 그룹을 운영하는 것이 권장되며, 데이터 포화를 확인하면서 필요시 추가 그룹을 진행합니다.'
            : 'A minimum of 3\u20144 groups is recommended; additional groups are conducted as needed until data saturation is reached.'}
        </li>
      </ul>

      {/* Role of the moderator */}
      <h3>{isKo ? '사회자의 역할' : 'The Role of the Moderator'}</h3>
      <p>
        {isKo
          ? '사회자(Moderator)는 포커스그룹의 핵심 인물로, 토론의 흐름을 관리하면서도 참여자들이 자유롭게 의견을 표현할 수 있는 환경을 조성합니다. 효과적인 사회자는 중립적 태도를 유지하면서 토론 주제에 대한 깊은 이해를 바탕으로 적절한 탐침 질문을 제시합니다. 사회자는 토론을 지배하지 않으면서도 주제에서 벗어나지 않도록 부드럽게 안내하는 역할을 합니다.'
          : 'The moderator is the key figure in a focus group, managing the flow of discussion while creating an environment where participants feel free to express their opinions. An effective moderator maintains neutrality, poses appropriate probing questions based on deep understanding of the topic, and gently guides the conversation to stay on track without dominating it.'}
      </p>

      {/* Developing a discussion guide */}
      <h3>{isKo ? '토론 가이드 개발' : 'Developing a Discussion Guide'}</h3>
      <p>
        {isKo
          ? '토론 가이드는 포커스그룹 세션의 구조를 제공하는 문서입니다. 일반적으로 도입(Opening)\u2014참여자 소개와 기본 규칙 설명, 전환(Transition)\u2014주제로 자연스럽게 이동하는 질문, 핵심(Key)\u2014연구 질문에 직접 관련된 핵심 질문, 마무리(Closing)\u2014요약 및 추가 의견 확인으로 구성됩니다. 질문은 일반적인 것에서 구체적인 것으로 진행하는 "깔때기 접근법(Funnel Approach)"을 사용합니다.'
          : 'A discussion guide provides structure for the focus group session. It typically consists of: Opening\u2014participant introductions and ground rules; Transition\u2014questions that ease into the topic; Key\u2014core questions directly related to the research questions; Closing\u2014summary and opportunity for additional comments. Questions follow a "funnel approach," moving from general to specific.'}
      </p>

      {/* Managing group dynamics */}
      <h3>{isKo ? '집단 역동 관리' : 'Managing Group Dynamics'}</h3>
      <p>
        {isKo
          ? '포커스그룹에서는 다양한 집단 역동 상황이 발생합니다. 특정 참여자가 토론을 지배하는 경우(Dominant Participant), 사회자는 "다른 분들의 생각도 들어보겠습니다"와 같이 부드럽게 개입하여 균형을 맞춥니다. 반대로 조용한 참여자(Quiet Participant)에게는 직접 의견을 구하되, 부담을 주지 않도록 주의합니다. 또한 집단 사고(Groupthink)\u2014집단의 합의에 동조하려는 압력\u2014를 방지하기 위해 다양한 의견이 환영받는 분위기를 조성하는 것이 중요합니다.'
          : 'Various group dynamic situations arise in focus groups. When a dominant participant monopolizes the discussion, the moderator gently intervenes\u2014"Let\u2019s hear what others think"\u2014to restore balance. For quiet participants, the moderator directly solicits input without applying undue pressure. It is also important to prevent groupthink\u2014pressure to conform to a collective consensus\u2014by fostering an atmosphere where diverse opinions are welcomed.'}
      </p>

      {/* Advantages over individual interviews */}
      <h3>{isKo ? '개별 면접 대비 장점' : 'Advantages over Individual Interviews'}</h3>
      <ul>
        <li>{isKo ? '참여자 간 상호작용을 통해 새로운 아이디어와 관점이 생성됩니다.' : 'Interaction between participants generates new ideas and perspectives.'}</li>
        <li>{isKo ? '짧은 시간에 다수의 참여자로부터 데이터를 수집할 수 있어 효율적입니다.' : 'Data can be collected from multiple participants efficiently in a short time.'}</li>
        <li>{isKo ? '사회적 규범이나 공유된 의미에 대한 집단적 관점을 탐색할 수 있습니다.' : 'Collective perspectives on social norms or shared meanings can be explored.'}</li>
        <li>{isKo ? '참여자가 다른 사람의 이야기를 듣고 자신의 경험을 더 풍부하게 표현할 수 있습니다.' : 'Hearing others\u2019 stories helps participants articulate their own experiences more richly.'}</li>
      </ul>

      {/* Limitations */}
      <h3>{isKo ? '한계 및 부적절한 상황' : 'Limitations and When Not to Use'}</h3>
      <p>
        {isKo
          ? '포커스그룹은 민감한 개인적 주제(성적 행동, 정신건강, 불법 행위 등)를 탐구하기에는 부적절할 수 있습니다. 참여자가 집단 앞에서 솔직하게 말하기 어려운 주제는 개별 면접이 더 적합합니다. 또한 특정 개인의 심층적인 생애 경험을 탐구하기보다는 집단 수준의 관점과 태도를 파악하는 데 더 적합합니다. 물류적으로도 여러 참여자를 같은 시간, 같은 장소에 모으는 것이 쉽지 않을 수 있습니다.'
          : 'Focus groups may be unsuitable for exploring sensitive personal topics (sexual behavior, mental health, illegal activities). Individual interviews are more appropriate when participants may find it difficult to speak honestly in front of a group. Focus groups are also better suited for understanding group-level perspectives and attitudes than for exploring deep individual life experiences. Logistically, gathering multiple participants at the same time and place can also be challenging.'}
      </p>

      <TipBox type="tip" title={isKo ? '사회자를 위한 모범 사례' : 'Moderator Best Practices'}>
        <p>
          {isKo
            ? '효과적인 포커스그룹 사회자가 되려면 다음을 기억하세요: (1) 세션 시작 시 기본 규칙을 설정하세요 (한 사람씩 발언, 모든 의견 존중, 비밀 유지 등). (2) "왜?" 질문보다 "어떻게?" 또는 "무엇을?" 질문을 사용하세요\u2014"왜?"는 방어적 반응을 유발할 수 있습니다. (3) 자신의 의견이나 반응을 보이지 마세요\u2014어떤 응답에 대해서도 동일하게 관심을 보이세요. (4) 보조 사회자(Assistant Moderator)를 배치하여 기록과 관찰을 담당하게 하세요. (5) 세션 직후 디브리핑(Debriefing) 시간을 가져 즉각적인 인상과 관찰을 기록하세요.'
            : 'To be an effective focus group moderator: (1) Set ground rules at the start (one speaker at a time, respect all opinions, maintain confidentiality). (2) Use "how" or "what" questions rather than "why"\u2014"why" can provoke defensive responses. (3) Do not reveal your own opinions or reactions\u2014show equal interest in all responses. (4) Assign an assistant moderator to handle note-taking and observation. (5) Hold a debriefing session immediately after to record initial impressions and observations.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 4 -- Participant Observation
   ================================================================= */
function ObservationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-binoculars" />
        {isKo ? '참여관찰' : 'Participant Observation'}
      </h2>

      {/* Types of observation */}
      <h3>{isKo ? '관찰의 유형' : 'Types of Observation'}</h3>
      <p>
        {isKo
          ? '참여관찰(Participant Observation)은 연구자가 연구 현장에 직접 참여하면서 관찰하는 질적 자료 수집 방법입니다. Gold(1958)의 분류에 따르면 연구자의 참여 수준에 따라 네 가지 유형으로 구분됩니다.'
          : 'Participant observation is a qualitative data collection method in which the researcher directly participates in and observes the research setting. According to Gold\u2019s (1958) typology, four types are distinguished based on the researcher\u2019s level of participation.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '완전 참여자 (Complete Participant)' : 'Complete Participant'}</strong> \u2013{' '}
          {isKo
            ? '연구자의 신분을 숨기고 집단의 완전한 구성원으로 참여합니다. 가장 높은 수준의 참여이지만, 윤리적 문제가 있습니다.'
            : 'The researcher conceals their identity and participates as a full member of the group. The highest level of participation, but raises ethical concerns.'}
        </li>
        <li>
          <strong>{isKo ? '관찰자로서의 참여자 (Participant-as-Observer)' : 'Participant-as-Observer'}</strong> \u2013{' '}
          {isKo
            ? '연구자 신분을 밝히고 집단에 참여하되, 참여 활동을 통해 관찰합니다. 가장 많이 사용되는 유형입니다.'
            : 'The researcher reveals their identity and participates in the group, observing through participation. This is the most commonly used type.'}
        </li>
        <li>
          <strong>{isKo ? '참여자로서의 관찰자 (Observer-as-Participant)' : 'Observer-as-Participant'}</strong> \u2013{' '}
          {isKo
            ? '주로 관찰에 초점을 두되, 제한적으로 참여합니다. 면접과 병행하는 경우가 많습니다.'
            : 'Focuses primarily on observation with limited participation. Often combined with interviews.'}
        </li>
        <li>
          <strong>{isKo ? '완전 관찰자 (Complete Observer)' : 'Complete Observer'}</strong> \u2013{' '}
          {isKo
            ? '연구 상황에 전혀 참여하지 않고 외부에서 관찰만 합니다. 참여자와의 상호작용이 없으므로 맥락 이해에 한계가 있습니다.'
            : 'Observes entirely from outside without any participation in the setting. Lacks interaction with participants, limiting contextual understanding.'}
        </li>
      </ul>

      {/* Ethnographic observation */}
      <h3>{isKo ? '문화기술지적 관찰' : 'Ethnographic Observation'}</h3>
      <p>
        {isKo
          ? '문화기술지(Ethnography)에서의 관찰은 장기간에 걸친 집중적인 현장 참여를 특징으로 합니다. 연구자는 연구 대상 집단의 일상에 참여하면서 그들의 문화적 패턴, 사회적 상호작용, 의례, 언어 사용 등을 관찰하고 기록합니다. 전통적인 문화기술지에서는 1년 이상의 현장 연구(Fieldwork)가 요구되기도 하지만, 최근에는 집중적 단기 문화기술지(Focused Ethnography) 방법도 활용됩니다.'
          : 'Observation in ethnography is characterized by prolonged, intensive fieldwork. The researcher participates in the daily life of the study group, observing and recording cultural patterns, social interactions, rituals, language use, and more. Traditional ethnography may require a year or more of fieldwork, though focused short-term ethnographic methods have also been adopted in recent practice.'}
      </p>

      {/* Field notes */}
      <h3>{isKo ? '현장 노트 (Field Notes)' : 'Field Notes'}</h3>
      <p>
        {isKo
          ? '현장 노트는 참여관찰의 핵심 데이터 원천입니다. 현장에서 관찰한 내용을 체계적으로 기록하며, 크게 두 가지 유형으로 구분됩니다.'
          : 'Field notes are the primary data source in participant observation. They systematically record observations from the field and fall into two main types.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '기술적 노트 (Descriptive Notes)' : 'Descriptive Notes'}</strong> \u2013{' '}
          {isKo
            ? '관찰한 사건, 행동, 대화, 물리적 환경을 있는 그대로 상세하게 기록합니다. 연구자의 해석 없이 "무엇을 보았는가"를 기술합니다.'
            : 'Record events, behaviors, conversations, and physical settings as observed, in detail. Describe "what was seen" without researcher interpretation.'}
        </li>
        <li>
          <strong>{isKo ? '성찰적 노트 (Reflective Notes)' : 'Reflective Notes'}</strong> \u2013{' '}
          {isKo
            ? '관찰에 대한 연구자의 생각, 감정, 해석, 질문, 통찰을 기록합니다. 분석의 초기 단계로 기능하며, 연구자의 성찰성(Reflexivity)을 높입니다.'
            : 'Record the researcher\u2019s thoughts, feelings, interpretations, questions, and insights about observations. They function as an early stage of analysis and enhance researcher reflexivity.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '현장 노트는 가능한 한 관찰 직후에 작성해야 합니다. 시간이 지나면 세부 사항이 기억에서 사라지기 때문입니다. 현장에서 간략한 메모(Jottings)를 작성하고, 현장을 떠난 후 이를 확장하여 완전한 노트로 발전시키는 것이 권장됩니다.'
          : 'Field notes should be written as soon as possible after observation, as details fade from memory over time. Writing brief jottings in the field and later expanding them into full notes is the recommended practice.'}
      </p>

      {/* Gaining access */}
      <h3>{isKo ? '접근과 신뢰 구축' : 'Gaining Access and Building Trust'}</h3>
      <p>
        {isKo
          ? '연구 현장에 대한 접근(Access)은 참여관찰의 첫 번째 과제입니다. 공식적 게이트키퍼(Gatekeeper)\u2014조직의 장, 지역사회 지도자 등\u2014의 허가를 얻는 것이 일반적이지만, 공식적 접근이 확보되었다고 해서 구성원들의 실질적 수용을 의미하지는 않습니다. 연구자는 시간을 들여 구성원들과 비공식적 관계를 형성하고, 연구 목적을 투명하게 공유하며, 그들의 규범과 관행을 존중하는 태도를 보여야 합니다.'
          : 'Gaining access to the research setting is the first challenge in participant observation. Obtaining permission from formal gatekeepers\u2014organizational leaders, community figures, etc.\u2014is standard, but formal access does not guarantee genuine acceptance by members. The researcher must invest time building informal relationships, transparently sharing the research purpose, and demonstrating respect for community norms and practices.'}
      </p>

      {/* Duration and intensity */}
      <h3>{isKo ? '관찰의 기간과 강도' : 'Duration and Intensity of Observation'}</h3>
      <p>
        {isKo
          ? '관찰 기간은 연구 목적과 전통에 따라 수 주에서 수 년까지 다양합니다. 핵심은 연구 현장의 "일상"을 충분히 이해할 수 있을 만큼의 시간을 투자하는 것입니다. 관찰 초기에는 넓고 개방적인 관찰(Descriptive Observation)을 수행하고, 점차 연구 질문에 초점을 맞춘 선택적 관찰(Selective Observation)로 이동합니다.'
          : 'Observation duration ranges from weeks to years depending on research purpose and tradition. The key is investing enough time to sufficiently understand the "everyday life" of the setting. In early stages, broad descriptive observation is conducted, gradually transitioning to selective observation focused on research questions.'}
      </p>

      {/* Observer effects */}
      <h3>{isKo ? '관찰자 효과와 반응성' : 'Observer Effects and Reactivity'}</h3>
      <p>
        {isKo
          ? '관찰자 효과(Observer Effect)란 연구자의 존재가 참여자의 행동에 영향을 미치는 현상입니다. 참여자가 관찰되고 있다는 사실을 인식하면 평소와 다르게 행동할 수 있습니다(Hawthorne Effect). 이를 최소화하기 위해 연구자는 장기간 현장에 머물면서 참여자들이 연구자의 존재에 익숙해지도록 합니다. 시간이 지남에 따라 참여자들은 연구자를 "자연스러운 일부"로 받아들이게 됩니다.'
          : 'The observer effect refers to the phenomenon in which the researcher\u2019s presence influences participant behavior. When participants are aware they are being observed, they may behave differently from normal (the Hawthorne Effect). To minimize this, researchers remain in the field for extended periods so that participants become accustomed to their presence. Over time, participants come to accept the researcher as a "natural part" of the setting.'}
      </p>

      {/* Ethical considerations */}
      <h3>{isKo ? '비밀관찰의 윤리적 고려' : 'Ethical Considerations in Covert Observation'}</h3>
      <p>
        {isKo
          ? '비밀관찰(Covert Observation)\u2014연구자 신분을 숨기고 관찰하는 방법\u2014은 참여자의 자연스러운 행동을 관찰할 수 있다는 장점이 있지만, 심각한 윤리적 문제를 수반합니다. 참여자의 사전 동의(Informed Consent) 없이 연구를 수행하는 것이므로, 대부분의 연구윤리위원회(IRB)에서 엄격히 제한됩니다. 비밀관찰이 정당화되려면 (1) 연구 주제가 사회적으로 매우 중요하고, (2) 다른 방법으로는 데이터를 수집할 수 없으며, (3) 참여자에게 최소한의 위험만 초래하는 경우에 한합니다.'
          : 'Covert observation\u2014observing while concealing the researcher\u2019s identity\u2014has the advantage of capturing natural behavior but raises serious ethical issues. Since research is conducted without participants\u2019 informed consent, it is strictly limited by most Institutional Review Boards (IRBs). Covert observation can only be justified when (1) the topic is of great social importance, (2) data cannot be collected by any other method, and (3) only minimal risk is posed to participants.'}
      </p>

      <TipBox type="warning" title={isKo ? '몰입 속에서 객관성 유지하기' : 'Maintaining Objectivity While Immersed'}>
        <p>
          {isKo
            ? '장기간의 참여관찰에서 가장 큰 도전 중 하나는 "원주민화(Going Native)"\u2014연구자가 연구 대상 집단에 지나치게 동화되어 분석적 거리를 잃는 현상\u2014를 방지하는 것입니다. 이를 위해: (1) 정기적으로 성찰 일지(Reflexive Journal)를 작성하여 자신의 감정과 편향을 모니터링하세요. (2) 동료 연구자와 정기적으로 디브리핑하여 외부 시각을 확보하세요. (3) 분석적 메모(Analytical Memos)를 꾸준히 작성하여 데이터에서 한 발 물러서는 시간을 가지세요. (4) 참여자(Insider)와 연구자(Outsider)로서의 이중 역할 사이에서 균형을 의식적으로 유지하세요.'
            : 'One of the greatest challenges in prolonged participant observation is preventing "going native"\u2014the phenomenon in which the researcher becomes so assimilated into the group that analytical distance is lost. To guard against this: (1) Regularly write a reflexive journal to monitor your emotions and biases. (2) Debrief regularly with fellow researchers to maintain an outside perspective. (3) Consistently write analytical memos to create deliberate distance from the data. (4) Consciously maintain balance between your dual roles as participant (insider) and researcher (outsider).'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 5 -- Grounded Theory & Phenomenology
   ================================================================= */
function TheorySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-lightbulb" />
        {isKo ? '근거이론과 현상학' : 'Grounded Theory & Phenomenology'}
      </h2>

      <p>
        {isKo
          ? '근거이론(Grounded Theory)과 현상학(Phenomenology)은 질적연구에서 가장 널리 사용되는 두 가지 방법론적 전통입니다. 두 접근법 모두 인간의 경험을 깊이 이해하고자 하지만, 그 목적과 절차에서 분명한 차이가 있습니다.'
          : 'Grounded theory and phenomenology are two of the most widely used methodological traditions in qualitative research. Both seek to deeply understand human experience, but they differ clearly in purpose and procedure.'}
      </p>

      {/* ---- Grounded Theory ---- */}
      <h3>{isKo ? '근거이론 (Grounded Theory)' : 'Grounded Theory'}</h3>
      <p>
        {isKo
          ? '근거이론은 1967년 Barney Glaser와 Anselm Strauss가 개발한 방법론으로, 데이터에 근거하여(grounded in data) 이론을 체계적으로 생성하는 것을 목표로 합니다. 이후 Glaser와 Strauss는 서로 다른 방향으로 발전시켰으며, Kathy Charmaz의 구성주의 근거이론(Constructivist Grounded Theory)도 중요한 흐름을 형성하고 있습니다.'
          : 'Grounded theory was developed in 1967 by Barney Glaser and Anselm Strauss with the goal of systematically generating theory grounded in data. Glaser and Strauss later diverged in their approaches, and Kathy Charmaz\u2019s constructivist grounded theory has also become an important strand.'}
      </p>

      <h4>{isKo ? 'Glaser vs. Strauss 접근법' : 'Glaser vs. Strauss Approach'}</h4>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '차원' : 'Dimension'}</th>
              <th>Glaser</th>
              <th>Strauss &amp; Corbin</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '코딩 방식' : 'Coding approach'}</td>
              <td>{isKo ? '실체 코딩 → 이론 코딩 (보다 유연)' : 'Substantive coding \u2192 theoretical coding (more flexible)'}</td>
              <td>{isKo ? '개방 코딩 → 축 코딩 → 선택 코딩 (보다 체계적)' : 'Open coding \u2192 axial coding \u2192 selective coding (more systematic)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '문헌 검토' : 'Literature review'}</td>
              <td>{isKo ? '사전 문헌 검토 최소화 (선입견 방지)' : 'Minimize prior literature review (to prevent preconceptions)'}</td>
              <td>{isKo ? '사전 문헌 검토 허용 (민감성 향상)' : 'Prior literature review permitted (to enhance sensitivity)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '이론 생성' : 'Theory generation'}</td>
              <td>{isKo ? '데이터에서 자연스럽게 출현(Emergence)' : 'Natural emergence from data'}</td>
              <td>{isKo ? '분석 도구를 적극 활용한 체계적 구성' : 'Systematic construction using analytical tools'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4>{isKo ? '코딩 과정' : 'The Coding Process'}</h4>
      <ul>
        <li>
          <strong>{isKo ? '개방 코딩 (Open Coding)' : 'Open Coding'}</strong> \u2013{' '}
          {isKo
            ? '데이터를 줄 단위 또는 사건 단위로 분석하여 개념(Concept)과 범주(Category)를 도출합니다. 데이터의 모든 가능한 의미에 열려 있는 단계입니다.'
            : 'Data is analyzed line-by-line or incident-by-incident to derive concepts and categories. This stage remains open to all possible meanings in the data.'}
        </li>
        <li>
          <strong>{isKo ? '축 코딩 (Axial Coding)' : 'Axial Coding'}</strong> \u2013{' '}
          {isKo
            ? '개방 코딩에서 도출된 범주들 간의 관계를 파악합니다. Strauss와 Corbin의 패러다임 모형(조건-맥락-전략-결과)을 활용하여 범주를 체계적으로 연결합니다.'
            : 'Identifies relationships among categories derived from open coding. Strauss and Corbin\u2019s paradigm model (conditions\u2013context\u2013strategies\u2013consequences) is used to systematically connect categories.'}
        </li>
        <li>
          <strong>{isKo ? '선택 코딩 (Selective Coding)' : 'Selective Coding'}</strong> \u2013{' '}
          {isKo
            ? '핵심 범주(Core Category)를 선정하고, 모든 다른 범주를 핵심 범주와 관련시켜 이론적 틀을 완성합니다.'
            : 'A core category is selected, and all other categories are related to it to complete the theoretical framework.'}
        </li>
      </ul>

      <h4>{isKo ? '지속적 비교법과 이론적 표집' : 'Constant Comparison and Theoretical Sampling'}</h4>
      <p>
        {isKo
          ? '지속적 비교법(Constant Comparison Method)은 근거이론의 핵심 분석 전략입니다. 새로 수집된 데이터를 기존 데이터 및 이미 도출된 코드/범주와 끊임없이 비교하면서 분석합니다. 이론적 표집(Theoretical Sampling)은 데이터 분석에서 도출된 개념과 범주를 발전시키기 위해 다음에 수집할 데이터를 의도적으로 선택하는 과정입니다. 이론적 포화(Theoretical Saturation)\u2014새로운 데이터가 더 이상 새로운 속성이나 차원을 제공하지 않는 시점\u2014에 도달할 때까지 이 과정을 반복합니다.'
          : 'The constant comparison method is the core analytical strategy in grounded theory. Newly collected data is continually compared with existing data and previously derived codes/categories. Theoretical sampling is the process of intentionally selecting what data to collect next in order to develop emerging concepts and categories. This process repeats until theoretical saturation\u2014the point at which new data no longer provides new properties or dimensions\u2014is reached.'}
      </p>

      <h4>{isKo ? '메모 작성 (Memo Writing)' : 'Memo Writing'}</h4>
      <p>
        {isKo
          ? '메모 작성은 근거이론에서 코딩만큼 중요한 분석 활동입니다. 연구자는 분석 과정에서 떠오르는 아이디어, 범주 간 관계에 대한 통찰, 이론적 방향에 대한 생각을 메모로 기록합니다. 메모는 코드에서 이론으로 발전하는 다리 역할을 하며, 연구의 분석적 깊이를 높이는 핵심 도구입니다.'
          : 'Memo writing is an analytical activity as important as coding in grounded theory. The researcher records ideas that arise during analysis, insights about relationships among categories, and thoughts on theoretical direction. Memos serve as a bridge from codes to theory and are a key tool for deepening analytical depth.'}
      </p>

      {/* ---- Phenomenology ---- */}
      <h3>{isKo ? '현상학 (Phenomenology)' : 'Phenomenology'}</h3>
      <p>
        {isKo
          ? '현상학은 특정 현상에 대한 참여자들의 생생한 체험(Lived Experience)을 탐구하여 그 경험의 본질(Essence)을 파악하는 것을 목표로 합니다. 철학적 뿌리에 따라 크게 두 가지 전통으로 나뉩니다.'
          : 'Phenomenology aims to explore participants\u2019 lived experiences of a particular phenomenon and to identify the essence of that experience. Based on philosophical roots, it is divided into two major traditions.'}
      </p>

      <h4>{isKo ? 'Husserl의 기술적 현상학 vs. Heidegger의 해석적 현상학' : 'Husserl\u2019s Descriptive vs. Heidegger\u2019s Hermeneutic Phenomenology'}</h4>
      <ul>
        <li>
          <strong>{isKo ? '기술적 현상학 (Descriptive / Transcendental Phenomenology)' : 'Descriptive / Transcendental Phenomenology'}</strong> \u2013{' '}
          {isKo
            ? 'Edmund Husserl의 철학에 기반하며, Moustakas(1994)의 방법론으로 발전했습니다. 연구자의 선입견을 괄호치기(Bracketing/\uc5d0\ud3ec\ucf00)하고, 참여자의 경험을 있는 그대로 기술하여 경험의 보편적 본질을 찾고자 합니다.'
            : 'Based on Edmund Husserl\u2019s philosophy and developed through Moustakas\u2019s (1994) methodology. The researcher brackets (epoch\u00e9) their preconceptions and describes participants\u2019 experiences as they are, seeking the universal essence of the experience.'}
        </li>
        <li>
          <strong>{isKo ? '해석적 현상학 (Hermeneutic Phenomenology)' : 'Hermeneutic Phenomenology'}</strong> \u2013{' '}
          {isKo
            ? 'Martin Heidegger의 철학에 기반하며, van Manen(1990)의 방법론으로 발전했습니다. 완전한 괄호치기는 불가능하다고 보며, 연구자의 해석이 불가피하게 개입한다는 입장입니다. 경험의 의미를 해석적으로 탐구합니다.'
            : 'Based on Martin Heidegger\u2019s philosophy and developed through van Manen\u2019s (1990) methodology. It holds that complete bracketing is impossible and that the researcher\u2019s interpretation inevitably comes into play. It pursues an interpretive exploration of the meaning of experience.'}
        </li>
      </ul>

      <h4>{isKo ? '판단중지/괄호치기 (Bracketing / \uc5d0\ud3ec\ucf00)' : 'Bracketing (Epoch\u00e9)'}</h4>
      <p>
        {isKo
          ? '괄호치기(Bracketing)란 연구자가 연구 현상에 대해 가지고 있는 기존의 지식, 가정, 편견, 이론을 의식적으로 "괄호 안에 넣어" 보류하는 과정입니다. 이를 통해 연구자는 참여자의 경험을 선입견 없이 새롭게 바라볼 수 있습니다. 실제로 완전한 괄호치기는 불가능하더라도, 자신의 선이해(Pre-understanding)를 인식하고 기록하는 과정 자체가 분석의 질을 높여줍니다.'
          : 'Bracketing (epoch\u00e9) is the process of consciously suspending the researcher\u2019s existing knowledge, assumptions, biases, and theories about the phenomenon by "placing them in brackets." This allows the researcher to view participants\u2019 experiences afresh, free from preconceptions. Even though complete bracketing is impossible in practice, the very process of recognizing and documenting one\u2019s pre-understanding improves analytical quality.'}
      </p>

      <h4>{isKo ? '생생한 체험 기술과 본질 파악' : 'Lived Experience Description and Essence Identification'}</h4>
      <p>
        {isKo
          ? '현상학적 연구에서 참여자의 생생한 체험(Lived Experience)은 심층면접을 통해 수집됩니다. 연구자는 참여자의 경험을 텍스트적 기술(Textural Description \u2013 무엇을 경험했는가)과 구조적 기술(Structural Description \u2013 어떻게 경험했는가)로 분석합니다. 최종적으로 모든 참여자의 경험에서 공통적으로 나타나는 본질(Essence)\u2014즉 그 경험을 그 경험이게 하는 핵심적인 구조\u2014을 도출합니다.'
          : 'In phenomenological research, participants\u2019 lived experiences are collected through in-depth interviews. The researcher analyzes experiences through textural description (what was experienced) and structural description (how it was experienced). Finally, the essence\u2014the core structure that makes the experience what it is\u2014common across all participants\u2019 experiences is identified.'}
      </p>

      {/* Key differences */}
      <h3>{isKo ? '근거이론 vs 현상학: 핵심 차이' : 'Grounded Theory vs. Phenomenology: Key Differences'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '차원' : 'Dimension'}</th>
              <th>{isKo ? '근거이론' : 'Grounded Theory'}</th>
              <th>{isKo ? '현상학' : 'Phenomenology'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '목적' : 'Purpose'}</td>
              <td>{isKo ? '이론 생성 (Theory Generation)' : 'Theory generation'}</td>
              <td>{isKo ? '경험의 본질 파악 (Essence Identification)' : 'Essence identification'}</td>
            </tr>
            <tr>
              <td>{isKo ? '연구 질문' : 'Research question'}</td>
              <td>{isKo ? '"이 과정은 어떻게 작동하는가?"' : '"How does this process work?"'}</td>
              <td>{isKo ? '"이 경험의 본질은 무엇인가?"' : '"What is the essence of this experience?"'}</td>
            </tr>
            <tr>
              <td>{isKo ? '분석 초점' : 'Analytical focus'}</td>
              <td>{isKo ? '과정(Process)과 상호작용' : 'Process and interaction'}</td>
              <td>{isKo ? '경험의 의미와 구조' : 'Meaning and structure of experience'}</td>
            </tr>
            <tr>
              <td>{isKo ? '결과물' : 'Outcome'}</td>
              <td>{isKo ? '실체 이론 (Substantive Theory)' : 'Substantive theory'}</td>
              <td>{isKo ? '경험의 본질에 대한 풍부한 기술' : 'Rich description of the essence of experience'}</td>
            </tr>
            <tr>
              <td>{isKo ? '참여자 수' : 'Participants'}</td>
              <td>{isKo ? '이론적 포화까지 (20\u201330+명)' : 'Until theoretical saturation (20\u201330+)'}</td>
              <td>{isKo ? '5\u201325명 (현상을 경험한 자)' : '5\u201325 (those who experienced the phenomenon)'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip" title={isKo ? '근거이론과 현상학 중 선택하기' : 'Choosing Between Grounded Theory and Phenomenology'}>
        <p>
          {isKo
            ? '두 방법론 중 선택할 때는 연구 목적을 먼저 명확히 하세요. 어떤 사회적 과정(Process)이 어떻게 작동하는지 이해하고 이론을 개발하고 싶다면 근거이론이 적합합니다 (예: "만성 질환 환자가 질병에 적응하는 과정은 어떠한가?"). 반면, 특정 경험의 본질과 의미를 깊이 이해하고 싶다면 현상학이 적합합니다 (예: "만성 질환과 함께 살아가는 경험의 본질은 무엇인가?"). 동일한 주제라도 연구 질문의 방향에 따라 적절한 방법론이 달라집니다.'
            : 'When choosing between the two methodologies, first clarify your research purpose. If you want to understand how a social process works and develop theory, grounded theory is appropriate (e.g., "How do patients with chronic illness adapt to their disease?"). If you want to deeply understand the essence and meaning of a particular experience, phenomenology is appropriate (e.g., "What is the essence of the experience of living with chronic illness?"). Even for the same topic, the appropriate methodology changes depending on the direction of the research question.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section 6 -- Qualitative Data Analysis
   ================================================================= */
function AnalysisSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-tags" />
        {isKo ? '질적자료 분석' : 'Qualitative Data Analysis'}
      </h2>

      {/* Preparing data */}
      <h3>{isKo ? '자료 준비' : 'Preparing Data'}</h3>
      <p>
        {isKo
          ? '질적자료 분석의 첫 단계는 수집된 자료를 분석 가능한 형태로 준비하는 것입니다. 이 과정은 단순한 행정 작업이 아니라 분석의 시작입니다.'
          : 'The first stage of qualitative data analysis is preparing the collected data in an analyzable form. This process is not mere administrative work\u2014it is the beginning of analysis itself.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '전사 (Transcription)' : 'Transcription'}</strong> \u2013{' '}
          {isKo
            ? '면접 녹음을 텍스트로 변환합니다. 가능하면 연구자가 직접 전사하는 것이 권장되는데, 이 과정에서 데이터에 대한 깊은 친숙성(Familiarity)을 얻을 수 있기 때문입니다.'
            : 'Interview recordings are converted to text. Researchers are encouraged to transcribe personally when possible, as this process builds deep familiarity with the data.'}
        </li>
        <li>
          <strong>{isKo ? '자료 정리 (Organizing)' : 'Organizing'}</strong> \u2013{' '}
          {isKo
            ? '전사본, 현장 노트, 문서, 이미지 등 다양한 자료를 체계적으로 정리하고, 파일 명명 규칙을 설정하며, 안전하게 보관합니다.'
            : 'Systematically organize transcripts, field notes, documents, images, and other materials; establish file naming conventions; and store them securely.'}
        </li>
        <li>
          <strong>{isKo ? '반복 읽기와 메모 (Reading/Memoing)' : 'Reading and Memoing'}</strong> \u2013{' '}
          {isKo
            ? '코딩을 시작하기 전에 전사본을 여러 번 반복하여 읽으면서 전체적인 인상, 초기 아이디어, 질문을 메모합니다. 이 단계에서 데이터의 전체적 윤곽을 파악합니다.'
            : 'Before coding begins, read transcripts repeatedly, noting overall impressions, initial ideas, and questions. This stage provides a sense of the data\u2019s overall contours.'}
        </li>
      </ul>

      {/* Coding process */}
      <h3>{isKo ? '코딩 과정' : 'The Coding Process'}</h3>
      <p>
        {isKo
          ? '코딩(Coding)은 질적자료에서 의미 있는 단위(Segment)를 식별하고 이름(코드)을 부여하는 체계적인 분석 과정입니다. 코딩은 일반적으로 세 단계를 거칩니다.'
          : 'Coding is the systematic analytical process of identifying meaningful segments in qualitative data and assigning labels (codes). Coding generally proceeds through three stages.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '초기/개방 코딩 (Initial/Open Coding)' : 'Initial / Open Coding'}</strong> \u2013{' '}
          {isKo
            ? '데이터를 세밀하게 분석하여 가능한 많은 코드를 생성합니다. 한 줄 한 줄, 문장 단위, 또는 문단 단위로 코딩하며, 참여자의 언어를 그대로 사용하는 In Vivo 코드도 활용합니다. 이 단계에서는 수십에서 수백 개의 코드가 생성될 수 있습니다.'
            : 'Closely analyze data to generate as many codes as possible. Code line-by-line, sentence-by-sentence, or paragraph-by-paragraph; in vivo codes using participants\u2019 own language are also used. Dozens to hundreds of codes may be generated at this stage.'}
        </li>
        <li>
          <strong>{isKo ? '초점 코딩 (Focused Coding)' : 'Focused Coding'}</strong> \u2013{' '}
          {isKo
            ? '초기 코딩에서 생성된 코드 중 가장 빈번하고 의미 있는 코드를 선별하여, 유사한 코드를 그룹화하고 상위 범주(Category)를 형성합니다. 데이터의 큰 패턴이 드러나기 시작합니다.'
            : 'Select the most frequent and meaningful codes from initial coding, group similar codes, and form higher-level categories. Larger patterns in the data begin to emerge.'}
        </li>
        <li>
          <strong>{isKo ? '이론적 코딩 (Theoretical Coding)' : 'Theoretical Coding'}</strong> \u2013{' '}
          {isKo
            ? '범주들 간의 관계를 분석하여 이론적 모형을 구성합니다. 핵심 범주를 중심으로 범주 간 연결을 설명하는 스토리라인(Storyline)을 개발합니다.'
            : 'Analyze relationships among categories to construct a theoretical model. Develop a storyline that explains the connections among categories around a core category.'}
        </li>
      </ul>

      {/* Thematic analysis */}
      <h3>{isKo ? '주제 분석 (Thematic Analysis)' : 'Thematic Analysis'}</h3>
      <p>
        {isKo
          ? '주제 분석은 Braun과 Clarke(2006)가 체계화한 방법으로, 질적 데이터에서 패턴(주제, Theme)을 식별하고, 분석하고, 보고하는 접근법입니다. 특정 이론적 전통에 구속되지 않아 유연하게 적용할 수 있다는 장점이 있습니다.'
          : 'Thematic analysis, systematized by Braun and Clarke (2006), is an approach for identifying, analyzing, and reporting patterns (themes) in qualitative data. Its advantage lies in flexibility, as it is not tied to any particular theoretical tradition.'}
      </p>
      <ol>
        <li>{isKo ? '데이터 친숙화 (Familiarization) \u2013 반복 읽기와 메모' : 'Familiarization \u2013 Repeated reading and noting'}</li>
        <li>{isKo ? '초기 코드 생성 (Generating Initial Codes)' : 'Generating initial codes'}</li>
        <li>{isKo ? '주제 탐색 (Searching for Themes) \u2013 코드를 잠재적 주제로 그룹화' : 'Searching for themes \u2013 Grouping codes into potential themes'}</li>
        <li>{isKo ? '주제 검토 (Reviewing Themes) \u2013 주제의 내적 일관성과 외적 구분 확인' : 'Reviewing themes \u2013 Checking internal coherence and external distinction'}</li>
        <li>{isKo ? '주제 정의 및 명명 (Defining and Naming Themes)' : 'Defining and naming themes'}</li>
        <li>{isKo ? '보고서 작성 (Producing the Report)' : 'Producing the report'}</li>
      </ol>

      {/* Content analysis */}
      <h3>{isKo ? '내용 분석 (Content Analysis)' : 'Content Analysis'}</h3>
      <p>
        {isKo
          ? '내용 분석은 텍스트 데이터를 체계적으로 분류하고 패턴을 파악하는 방법입니다. 양적 내용 분석(빈도 수 계산)과 질적 내용 분석(의미 해석)으로 나뉩니다. 질적 내용 분석에서는 데이터에서 범주를 귀납적으로 도출하거나(Conventional), 기존 이론에서 범주를 연역적으로 적용(Directed)하거나, 기존 범주를 확장(Summative)하는 접근이 있습니다.'
          : 'Content analysis is a method for systematically classifying text data and identifying patterns. It is divided into quantitative (frequency counting) and qualitative (meaning interpretation) content analysis. Qualitative content analysis uses conventional (inductive), directed (deductive), or summative approaches to derive or apply categories.'}
      </p>

      {/* CAQDAS */}
      <h3>{isKo ? 'CAQDAS 활용' : 'Using CAQDAS'}</h3>
      <p>
        {isKo
          ? 'CAQDAS(Computer-Assisted Qualitative Data Analysis Software)는 질적자료의 체계적 관리와 분석을 지원하는 소프트웨어입니다. 대표적인 프로그램으로는 NVivo, Atlas.ti, MAXQDA가 있습니다. 이러한 소프트웨어는 코딩, 검색, 시각화, 메모 관리 등의 기능을 제공하여 분석의 효율성과 체계성을 높여줍니다.'
          : 'CAQDAS (Computer-Assisted Qualitative Data Analysis Software) supports the systematic management and analysis of qualitative data. Major programs include NVivo, Atlas.ti, and MAXQDA. These tools provide functions for coding, searching, visualization, and memo management that enhance analytical efficiency and rigor.'}
      </p>
      <p>
        {isKo
          ? '주의할 점은, CAQDAS는 분석 "도구"이지 분석을 "대신 해주는" 것이 아니라는 점입니다. 소프트웨어가 자동으로 코드를 부여하거나 주제를 도출하지 않습니다. 분석적 사고와 해석은 전적으로 연구자의 역할입니다. 또한 소프트웨어 학습에 상당한 시간이 필요하며, 소규모 프로젝트에서는 수작업 코딩이 더 적합할 수 있습니다.'
          : 'It is important to note that CAQDAS is an analytical "tool"\u2014it does not perform the analysis for you. The software does not automatically assign codes or derive themes. Analytical thinking and interpretation remain entirely the researcher\u2019s responsibility. Learning the software also requires substantial time, and for small-scale projects, manual coding may be more appropriate.'}
      </p>

      {/* Ensuring rigor */}
      <h3>{isKo ? '엄밀성 확보: 신뢰성(Trustworthiness) 기준' : 'Ensuring Rigor: Trustworthiness Criteria'}</h3>
      <p>
        {isKo
          ? 'Lincoln과 Guba(1985)는 질적연구의 엄밀성을 평가하기 위한 네 가지 기준을 제시했습니다. 이 기준은 양적연구의 내적 타당도, 외적 타당도, 신뢰도, 객관성에 대응합니다.'
          : 'Lincoln and Guba (1985) proposed four criteria for evaluating the rigor of qualitative research. These criteria correspond to internal validity, external validity, reliability, and objectivity in quantitative research.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '신빙성 (Credibility)' : 'Credibility'}</strong> \u2013{' '}
          {isKo
            ? '연구 결과가 참여자의 경험을 정확하게 반영하는가? 장기간 참여, 삼각검증, 구성원 확인(Member Checking), 동료 검토(Peer Debriefing)를 통해 확보합니다.'
            : 'Do findings accurately reflect participants\u2019 experiences? Achieved through prolonged engagement, triangulation, member checking, and peer debriefing.'}
        </li>
        <li>
          <strong>{isKo ? '전이가능성 (Transferability)' : 'Transferability'}</strong> \u2013{' '}
          {isKo
            ? '연구 결과가 다른 맥락에도 적용될 수 있는가? 두꺼운 기술(Thick Description)을 제공하여 독자가 전이가능성을 판단할 수 있도록 합니다.'
            : 'Can findings be applied to other contexts? Thick description is provided so readers can judge transferability for themselves.'}
        </li>
        <li>
          <strong>{isKo ? '의존가능성 (Dependability)' : 'Dependability'}</strong> \u2013{' '}
          {isKo
            ? '연구 과정이 일관성 있고 추적 가능한가? 감사추적(Audit Trail)\u2014연구의 모든 결정과 과정을 문서화\u2014을 통해 확보합니다.'
            : 'Is the research process consistent and traceable? Achieved through an audit trail\u2014documenting all decisions and processes.'}
        </li>
        <li>
          <strong>{isKo ? '확인가능성 (Confirmability)' : 'Confirmability'}</strong> \u2013{' '}
          {isKo
            ? '연구 결과가 연구자의 편향이 아닌 데이터에 근거하는가? 성찰 일지(Reflexive Journal)와 감사추적을 통해 확보합니다.'
            : 'Are findings grounded in data rather than researcher bias? Achieved through reflexive journaling and audit trails.'}
        </li>
      </ul>

      {/* Member checking and triangulation */}
      <h3>{isKo ? '구성원 확인과 삼각검증' : 'Member Checking and Triangulation'}</h3>
      <p>
        {isKo
          ? '구성원 확인(Member Checking)은 연구 결과(분석 내용, 해석, 결론 등)를 연구 참여자에게 다시 보여주어 그 정확성과 공명(Resonance)을 확인하는 과정입니다. 참여자가 "네, 이것이 제 경험을 정확히 반영합니다"라고 확인할 때 연구의 신빙성이 강화됩니다. 삼각검증(Triangulation)은 다양한 자료 원천(Data Triangulation), 방법(Method Triangulation), 연구자(Investigator Triangulation), 이론(Theory Triangulation)을 활용하여 연구 결과의 신뢰성을 높이는 전략입니다.'
          : 'Member checking is the process of presenting findings (analyses, interpretations, conclusions) back to participants to verify accuracy and resonance. Credibility is strengthened when participants confirm, "Yes, this accurately reflects my experience." Triangulation is a strategy that employs multiple data sources (data triangulation), methods (method triangulation), researchers (investigator triangulation), and theories (theory triangulation) to enhance the trustworthiness of findings.'}
      </p>
      <p>
        {isKo
          ? '삼각검증의 유형을 정리하면 다음과 같습니다: (1) 자료 삼각검증 \u2013 면접, 관찰, 문서 등 다양한 자료원을 활용, (2) 방법 삼각검증 \u2013 면접과 관찰 등 복수의 자료 수집 방법 사용, (3) 연구자 삼각검증 \u2013 복수의 연구자가 독립적으로 분석 후 결과 비교, (4) 이론 삼각검증 \u2013 여러 이론적 관점에서 데이터를 해석하여 비교.'
          : 'Types of triangulation include: (1) Data triangulation \u2013 using multiple data sources such as interviews, observations, and documents; (2) Method triangulation \u2013 employing multiple data collection methods; (3) Investigator triangulation \u2013 having multiple researchers independently analyze and compare results; (4) Theory triangulation \u2013 interpreting data from multiple theoretical perspectives and comparing.'}
      </p>

      <TipBox type="important" title={isKo ? '질적연구의 신뢰성 확보' : 'Achieving Trustworthiness in Qualitative Research'}>
        <p>
          {isKo
            ? '신뢰성(Trustworthiness)은 질적연구의 품질을 보장하는 핵심 개념입니다. 단일 전략이 아닌 여러 전략을 복합적으로 사용하세요: (1) 장기간 참여(Prolonged Engagement)\u2014충분한 시간을 현장에서 보내 피상적 이해를 넘어서세요. (2) 삼각검증\u2014최소 두 가지 이상의 삼각검증 유형을 사용하세요. (3) 구성원 확인\u2014분석 결과를 참여자에게 검증받으세요. (4) 감사추적(Audit Trail)\u2014연구의 모든 결정 과정을 상세히 문서화하세요. (5) 성찰적 일지(Reflexive Journal)\u2014연구 전 과정에서 자신의 위치성(Positionality), 가정, 편향을 지속적으로 성찰하고 기록하세요. 이러한 전략을 연구 설계 단계부터 계획하고 일관되게 실행하는 것이 중요합니다.'
            : 'Trustworthiness is the central concept for ensuring quality in qualitative research. Use multiple strategies in combination, not just one: (1) Prolonged engagement\u2014spend sufficient time in the field to move beyond superficial understanding. (2) Triangulation\u2014employ at least two types of triangulation. (3) Member checking\u2014have participants verify your analytical findings. (4) Audit trail\u2014document all decision processes in detail. (5) Reflexive journal\u2014continuously reflect on and record your positionality, assumptions, and biases throughout the research. It is important to plan these strategies from the research design stage and execute them consistently.'}
        </p>
      </TipBox>
    </section>
  );
}

/* =================================================================
   Section -- References
   ================================================================= */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '질적연구 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of qualitative research.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Creswell, J. W., & Poth, C. N. (2018). <em>Qualitative Inquiry and Research Design: Choosing Among Five Approaches</em> (4th ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Strauss, A., & Corbin, J. (1998). <em>Basics of Qualitative Research: Techniques and Procedures for Developing Grounded Theory</em> (2nd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Glaser, B. G., & Strauss, A. L. (1967). <em>The Discovery of Grounded Theory: Strategies for Qualitative Research</em>. Aldine.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Moustakas, C. (1994). <em>Phenomenological Research Methods</em>. SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. <em>Qualitative Research in Psychology</em>, 3(2), 77-101.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Lincoln, Y. S., & Guba, E. G. (1985). <em>Naturalistic Inquiry</em>. SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Kvale, S., & Brinkmann, S. (2015). <em>InterViews: Learning the Craft of Qualitative Research Interviewing</em> (3rd ed.). SAGE Publications.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>김영천 (2016). <em>질적연구방법론 I: Bricoleur</em> (3판). 아카데미프레스.</li>
        </ul>
      </div>
    </>
  );
}

/* =================================================================
   Main component
   ================================================================= */
export default function Qualitative(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('understanding');
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
        title={isKo ? '질적연구 | Research Master' : 'Qualitative Research | Research Master'}
        description={
          isKo
            ? '심층면접, 포커스그룹, 참여관찰 등 질적연구 방법론을 체계적으로 학습합니다.'
            : 'Learn qualitative research methods including interviews, focus groups, and participant observation.'
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
            {activeSection === 'understanding' && <UnderstandingSection isKo={isKo} />}
            {activeSection === 'interview' && <InterviewSection isKo={isKo} />}
            {activeSection === 'focus-group' && <FocusGroupSection isKo={isKo} />}
            {activeSection === 'observation' && <ObservationSection isKo={isKo} />}
            {activeSection === 'theory' && <TheorySection isKo={isKo} />}
            {activeSection === 'analysis' && <AnalysisSection isKo={isKo} />}
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
