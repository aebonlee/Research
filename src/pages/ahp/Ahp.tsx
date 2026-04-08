import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'overview', icon: 'fa-layer-group', ko: 'AHP 개요', en: 'AHP Overview' },
  { id: 'hierarchy', icon: 'fa-diagram-project', ko: '계층구조 설계', en: 'Hierarchy Structure Design' },
  { id: 'pairwise', icon: 'fa-scale-balanced', ko: '쌍대비교와 척도', en: 'Pairwise Comparison and Scale' },
  { id: 'consistency', icon: 'fa-check-double', ko: '일관성 검증', en: 'Consistency Verification' },
  { id: 'software', icon: 'fa-laptop-code', ko: 'AHP 소프트웨어 활용', en: 'AHP Software Applications' },
  { id: 'paper-writing', icon: 'fa-pen-to-square', ko: 'AHP 논문작성', en: 'Writing AHP Papers' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* ================================================================== */
/*  Section 1 — AHP Overview                                           */
/* ================================================================== */

function OverviewSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-layer-group" />
        {isKo ? 'AHP 개요 (AHP Overview)' : 'AHP Overview'}
      </h2>

      <h3>{isKo ? 'AHP란 무엇인가?' : 'What Is AHP?'}</h3>
      <p>
        {isKo
          ? 'AHP(Analytic Hierarchy Process, 분석적 계층화 과정)는 Thomas L. Saaty가 1980년에 제안한 다기준 의사결정(MCDM: Multi-Criteria Decision Making) 방법론입니다. 복잡한 의사결정 문제를 계층적 구조로 분해하고, 각 요소를 쌍대비교(pairwise comparison)를 통해 상대적으로 평가한 뒤, 이를 종합하여 최적의 대안을 선정합니다. AHP는 정량적 데이터와 정성적 판단을 동시에 반영할 수 있다는 점에서, 순수한 수리적 최적화 기법과 차별화됩니다.'
          : 'The Analytic Hierarchy Process (AHP) is a multi-criteria decision making (MCDM) methodology proposed by Thomas L. Saaty in 1980. It decomposes complex decision problems into a hierarchical structure, evaluates each element through pairwise comparisons to determine relative importance, and then synthesizes these judgments to select the optimal alternative. AHP distinguishes itself from purely mathematical optimization techniques by its ability to incorporate both quantitative data and qualitative judgments simultaneously.'}
      </p>

      <h3>{isKo ? 'Thomas L. Saaty와 AHP의 역사' : 'Thomas L. Saaty and the History of AHP'}</h3>
      <p>
        {isKo
          ? 'Thomas L. Saaty(1926-2017)는 미국 피츠버그 대학교의 수학 및 경영학 교수로, 1970년대 미국 국무부와 국방부의 복잡한 정책 결정 문제를 해결하기 위해 AHP를 개발했습니다. 그의 저서 "The Analytic Hierarchy Process"(1980)는 AHP의 이론적 토대를 확립한 기념비적 저작으로, 출판 이후 수만 회 이상 인용되었습니다. Saaty는 이후 AHP를 확장하여 네트워크 구조의 의존성과 피드백을 반영할 수 있는 ANP(Analytic Network Process)를 개발했습니다.'
          : 'Thomas L. Saaty (1926-2017) was a professor of mathematics and business at the University of Pittsburgh who developed AHP in the 1970s to address complex policy decision problems for the U.S. State Department and Department of Defense. His book "The Analytic Hierarchy Process" (1980) is the seminal work that established the theoretical foundation of AHP and has been cited tens of thousands of times since publication. Saaty later extended AHP to develop the Analytic Network Process (ANP), which can accommodate dependencies and feedback in network structures.'}
      </p>

      <h3>{isKo ? '다기준 의사결정(MCDM) 개요' : 'Overview of Multi-Criteria Decision Making (MCDM)'}</h3>
      <p>
        {isKo
          ? 'MCDM은 상충되는 여러 기준(criteria)을 동시에 고려하여 최적의 대안을 선택하는 의사결정 방법론의 총칭입니다. 현실 세계의 의사결정은 단일 기준으로 평가할 수 없는 경우가 대부분이며, 비용, 품질, 시간, 위험 등 다양한 요소를 종합적으로 고려해야 합니다. MCDM 방법론에는 AHP 외에도 TOPSIS, ELECTRE, PROMETHEE, VIKOR, BWM(Best-Worst Method) 등이 있으며, 각각 고유한 장단점을 가지고 있습니다.'
          : 'MCDM is a general term for decision-making methodologies that consider multiple conflicting criteria simultaneously to select the optimal alternative. Real-world decisions can rarely be evaluated by a single criterion and must comprehensively consider diverse factors such as cost, quality, time, and risk. In addition to AHP, MCDM methodologies include TOPSIS, ELECTRE, PROMETHEE, VIKOR, and BWM (Best-Worst Method), each with its own strengths and weaknesses.'}
      </p>

      <h3>{isKo ? 'AHP의 3대 원리' : 'Three Fundamental Principles of AHP'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '분해의 원리 (Decomposition)' : 'Principle of Decomposition'}</strong> —{' '}
          {isKo
            ? '복잡한 의사결정 문제를 목표(Goal), 기준(Criteria), 하위기준(Sub-criteria), 대안(Alternatives)의 계층적 구조로 분해합니다. 이를 통해 복잡한 문제를 관리 가능한 하위 문제들로 세분화할 수 있습니다.'
            : 'Decompose a complex decision problem into a hierarchical structure of Goal, Criteria, Sub-criteria, and Alternatives. This allows complex problems to be broken down into manageable sub-problems.'}
        </li>
        <li>
          <strong>{isKo ? '비교판단의 원리 (Comparative Judgments)' : 'Principle of Comparative Judgments'}</strong> —{' '}
          {isKo
            ? '계층의 각 수준에서 요소들을 쌍대비교하여 상대적 중요도를 판단합니다. 인간은 절대적 판단보다 상대적 비교에 더 뛰어나다는 심리학적 원리에 기반합니다.'
            : 'At each level of the hierarchy, elements are compared in pairs to determine relative importance. This is based on the psychological principle that humans are better at making relative comparisons than absolute judgments.'}
        </li>
        <li>
          <strong>{isKo ? '종합의 원리 (Synthesis of Priorities)' : 'Principle of Synthesis of Priorities'}</strong> —{' '}
          {isKo
            ? '각 수준에서 도출된 상대적 중요도(가중치)를 종합하여 최종적인 대안의 우선순위를 산출합니다. 이 과정에서 고유벡터(eigenvector) 방법이 사용됩니다.'
            : 'The relative importance (weights) derived at each level are synthesized to calculate the final priority ranking of alternatives. The eigenvector method is used in this process.'}
        </li>
      </ol>

      <h3>{isKo ? 'AHP의 적용 분야' : 'Application Areas of AHP'}</h3>
      <p>
        {isKo
          ? 'AHP는 그 범용성으로 인해 매우 다양한 분야에서 활용되고 있습니다:'
          : 'Due to its versatility, AHP is applied across a wide range of fields:'}
      </p>
      <ul>
        <li><strong>{isKo ? '경영학' : 'Business'}</strong> — {isKo ? '공급업체 선정, 전략적 의사결정, 투자 우선순위, 인사 평가, 마케팅 전략 수립' : 'Supplier selection, strategic decision-making, investment prioritization, personnel evaluation, marketing strategy formulation'}</li>
        <li><strong>{isKo ? '공학' : 'Engineering'}</strong> — {isKo ? '기술 선택, 프로젝트 위험 평가, 설계 대안 평가, 품질 관리, 에너지 시스템 계획' : 'Technology selection, project risk assessment, design alternative evaluation, quality management, energy system planning'}</li>
        <li><strong>{isKo ? '공공정책' : 'Public Policy'}</strong> — {isKo ? '정책 우선순위 결정, 자원 배분, 환경 영향 평가, 교통 계획, 도시 개발 전략' : 'Policy prioritization, resource allocation, environmental impact assessment, transportation planning, urban development strategy'}</li>
        <li><strong>{isKo ? '의료·보건' : 'Healthcare'}</strong> — {isKo ? '치료 방법 선택, 의료 장비 도입, 병원 입지 선정, 보건 정책 평가' : 'Treatment method selection, medical equipment adoption, hospital site selection, health policy evaluation'}</li>
        <li><strong>{isKo ? '교육' : 'Education'}</strong> — {isKo ? '교육 프로그램 평가, 학교 선택, 커리큘럼 개발 우선순위' : 'Educational program evaluation, school selection, curriculum development prioritization'}</li>
      </ul>

      <h3>{isKo ? 'AHP와 ANP 비교' : 'AHP vs. ANP Comparison'}</h3>
      <p>
        {isKo
          ? 'ANP(Analytic Network Process)는 Saaty가 AHP를 확장하여 개발한 방법론으로, 기준과 대안 간의 상호 의존성(interdependence)과 피드백(feedback)을 반영할 수 있습니다.'
          : 'The Analytic Network Process (ANP) is a methodology developed by Saaty as an extension of AHP that can accommodate interdependence and feedback among criteria and alternatives.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '비교 항목' : 'Comparison Item'}</th>
              <th>AHP</th>
              <th>ANP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '구조' : 'Structure'}</td>
              <td>{isKo ? '계층적 구조 (상위→하위 일방향)' : 'Hierarchical structure (top-down unidirectional)'}</td>
              <td>{isKo ? '네트워크 구조 (상호 의존성 허용)' : 'Network structure (allows interdependence)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '요소 간 관계' : 'Element relationships'}</td>
              <td>{isKo ? '독립성 가정' : 'Independence assumed'}</td>
              <td>{isKo ? '의존성과 피드백 반영' : 'Dependencies and feedback reflected'}</td>
            </tr>
            <tr>
              <td>{isKo ? '복잡도' : 'Complexity'}</td>
              <td>{isKo ? '상대적으로 단순' : 'Relatively simple'}</td>
              <td>{isKo ? '복잡함 (비교 횟수 증가)' : 'Complex (increased comparisons)'}</td>
            </tr>
            <tr>
              <td>{isKo ? '소프트웨어' : 'Software'}</td>
              <td>Expert Choice, Excel</td>
              <td>Super Decisions</td>
            </tr>
            <tr>
              <td>{isKo ? '적용 상황' : 'When to use'}</td>
              <td>{isKo ? '기준 간 독립적일 때' : 'When criteria are independent'}</td>
              <td>{isKo ? '기준 간 상호 영향이 있을 때' : 'When criteria influence each other'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? 'AHP를 사용해야 할 때' : 'When to Use AHP'}</h3>
      <p>
        {isKo
          ? 'AHP는 다음과 같은 상황에서 특히 적합합니다:'
          : 'AHP is particularly suitable in the following situations:'}
      </p>
      <ul>
        <li>{isKo ? '여러 기준을 동시에 고려하여 대안을 선택해야 할 때' : 'When selecting among alternatives considering multiple criteria simultaneously'}</li>
        <li>{isKo ? '정량적 데이터와 정성적 판단을 모두 반영해야 할 때' : 'When both quantitative data and qualitative judgments need to be incorporated'}</li>
        <li>{isKo ? '의사결정 과정의 논리적 투명성을 확보해야 할 때' : 'When logical transparency of the decision-making process is required'}</li>
        <li>{isKo ? '전문가 그룹의 합의를 체계적으로 도출해야 할 때' : 'When systematic consensus from expert groups needs to be derived'}</li>
        <li>{isKo ? '기준 간 상호 독립성이 합리적으로 가정될 수 있을 때' : 'When mutual independence among criteria can be reasonably assumed'}</li>
      </ul>

      <TipBox type="important" title={isKo ? 'AHP의 핵심 가정' : 'Key Assumptions of AHP'}>
        <p>
          {isKo
            ? 'AHP를 올바르게 적용하기 위해서는 다음 가정을 확인해야 합니다: (1) 계층 내 같은 수준의 요소들은 서로 독립적이어야 합니다(독립성 가정). 만약 기준 간에 상호 의존성이 존재한다면 ANP의 사용을 고려해야 합니다. (2) 의사결정자는 쌍대비교에서 일관된 판단을 내릴 수 있어야 합니다(일관성 가정). 이는 일관성 비율(CR)로 검증됩니다. (3) 계층구조가 의사결정 문제를 충분히 반영해야 합니다(완전성 가정).'
            : 'To apply AHP correctly, the following assumptions must be verified: (1) Elements at the same level within the hierarchy must be independent of each other (independence assumption). If interdependence exists among criteria, consider using ANP instead. (2) Decision-makers must be able to make consistent judgments in pairwise comparisons (consistency assumption), verified through the Consistency Ratio (CR). (3) The hierarchy must adequately represent the decision problem (completeness assumption).'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 2 — Hierarchy Structure Design                             */
/* ================================================================== */

function HierarchySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-diagram-project" />
        {isKo ? '계층구조 설계 (Hierarchy Structure Design)' : 'Hierarchy Structure Design'}
      </h2>

      <h3>{isKo ? '목표-기준-대안 구조' : 'Goal-Criteria-Alternatives Structure'}</h3>
      <p>
        {isKo
          ? 'AHP의 계층구조는 일반적으로 3개 이상의 수준으로 구성됩니다. 최상위 수준에는 의사결정의 궁극적 목표(Goal)가 위치하고, 중간 수준에는 목표를 달성하기 위한 평가 기준(Criteria)과 필요 시 하위기준(Sub-criteria)이 배치되며, 최하위 수준에는 평가 대상인 대안(Alternatives)이 나열됩니다. 예를 들어, "최적의 ERP 시스템 선정"이 목표라면, 기준은 비용, 기능성, 확장성, 사용 편의성 등이 될 수 있고, 대안은 SAP, Oracle, Microsoft Dynamics 등이 됩니다.'
          : 'The AHP hierarchy typically consists of three or more levels. The top level contains the ultimate goal of the decision (Goal), the middle level(s) contain the evaluation criteria (Criteria) and, if necessary, sub-criteria (Sub-criteria) for achieving the goal, and the bottom level lists the alternatives (Alternatives) being evaluated. For example, if the goal is "Select the optimal ERP system," criteria might include cost, functionality, scalability, and ease of use, while alternatives might be SAP, Oracle, and Microsoft Dynamics.'}
      </p>

      <h3>{isKo ? '계층구조 설계 원칙' : 'Principles of Hierarchy Design'}</h3>
      <p>
        {isKo
          ? '올바른 계층구조를 설계하기 위해서는 다음 원칙들을 준수해야 합니다:'
          : 'To design a proper hierarchy, the following principles must be observed:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '상호 배타성 (Mutual Exclusivity)' : 'Mutual Exclusivity'}</strong> —{' '}
          {isKo
            ? '같은 수준의 기준들은 서로 개념적으로 겹치지 않아야 합니다. 예를 들어, "비용"과 "경제성"을 동시에 기준으로 사용하면 개념이 중복됩니다.'
            : 'Criteria at the same level must not conceptually overlap. For example, using both "cost" and "economy" as criteria creates conceptual redundancy.'}
        </li>
        <li>
          <strong>{isKo ? '포괄성 (Exhaustiveness)' : 'Exhaustiveness'}</strong> —{' '}
          {isKo
            ? '기준들이 의사결정 문제의 모든 중요한 측면을 포괄해야 합니다. 중요한 기준이 누락되면 분석 결과의 타당성이 저하됩니다.'
            : 'The criteria must cover all important aspects of the decision problem. Omitting critical criteria undermines the validity of the analysis results.'}
        </li>
        <li>
          <strong>{isKo ? '독립성 (Independence)' : 'Independence'}</strong> —{' '}
          {isKo
            ? '같은 수준의 기준들은 서로 독립적이어야 합니다. 기준 A의 중요도가 기준 B의 존재 여부에 따라 달라진다면 독립성이 위배됩니다.'
            : 'Criteria at the same level must be independent of each other. If the importance of criterion A changes depending on whether criterion B exists, independence is violated.'}
        </li>
        <li>
          <strong>{isKo ? '측정 가능성 (Measurability)' : 'Measurability'}</strong> —{' '}
          {isKo
            ? '각 기준은 전문가가 판단할 수 있을 만큼 구체적이고 명확해야 합니다.'
            : 'Each criterion must be specific and clear enough for experts to make judgments.'}
        </li>
      </ol>

      <h3>{isKo ? '기준의 수: 7±2 규칙' : 'Number of Criteria: The 7±2 Rule'}</h3>
      <p>
        {isKo
          ? 'Miller(1956)의 연구에 따르면, 인간의 단기 기억 용량은 7±2개의 항목(chunk)으로 제한됩니다. Saaty는 이 원리를 AHP에 적용하여, 같은 수준에서 비교하는 요소의 수를 최대 9개 이하로 권장합니다. 요소가 9개를 초과하면 쌍대비교의 수가 급격히 증가하여(n(n-1)/2 공식에 의해) 응답자의 인지적 부담이 커지고 일관성이 저하될 수 있습니다. 기준이 많을 경우, 유사한 기준을 묶어 상위 기준과 하위 기준으로 재구성하는 것이 바람직합니다.'
          : 'According to Miller\'s (1956) research, human short-term memory capacity is limited to 7±2 items (chunks). Saaty applied this principle to AHP, recommending that the number of elements compared at any given level should not exceed 9. When elements exceed 9, the number of pairwise comparisons increases dramatically (by the n(n-1)/2 formula), increasing respondents\' cognitive burden and potentially degrading consistency. When there are many criteria, it is advisable to group similar criteria into higher-level and sub-level criteria.'}
      </p>

      <h3>{isKo ? '기준 도출 방법' : 'Methods for Deriving Criteria'}</h3>
      <p>
        {isKo
          ? 'AHP의 성공은 올바른 기준 도출에 크게 의존합니다. 다음은 대표적인 기준 도출 방법입니다:'
          : 'The success of AHP heavily depends on deriving the right criteria. The following are representative methods for deriving criteria:'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '방법' : 'Method'}</th>
              <th>{isKo ? '설명' : 'Description'}</th>
              <th>{isKo ? '장점' : 'Advantages'}</th>
              <th>{isKo ? '한계' : 'Limitations'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '문헌연구' : 'Literature Review'}</td>
              <td>{isKo ? '기존 연구에서 사용된 기준을 체계적으로 검토' : 'Systematically review criteria used in existing research'}</td>
              <td>{isKo ? '이론적 근거 확보, 선행연구와 비교 가능' : 'Theoretical basis, comparable with prior studies'}</td>
              <td>{isKo ? '연구 맥락이 다를 수 있음' : 'Research context may differ'}</td>
            </tr>
            <tr>
              <td>{isKo ? '전문가 인터뷰' : 'Expert Interview'}</td>
              <td>{isKo ? '해당 분야 전문가와의 심층 인터뷰를 통해 기준 도출' : 'Derive criteria through in-depth interviews with domain experts'}</td>
              <td>{isKo ? '실무적 관련성 높음, 맥락 반영' : 'High practical relevance, context-aware'}</td>
              <td>{isKo ? '전문가 편향 가능성' : 'Potential expert bias'}</td>
            </tr>
            <tr>
              <td>{isKo ? '델파이 기법' : 'Delphi Method'}</td>
              <td>{isKo ? '다수의 전문가에게 반복적으로 의견을 수렴하여 합의 도출' : 'Repeatedly collect opinions from multiple experts to reach consensus'}</td>
              <td>{isKo ? '익명성 보장, 집단 합의, 체계적' : 'Anonymity guaranteed, group consensus, systematic'}</td>
              <td>{isKo ? '시간과 비용이 많이 소요' : 'Time-consuming and costly'}</td>
            </tr>
            <tr>
              <td>{isKo ? '브레인스토밍' : 'Brainstorming'}</td>
              <td>{isKo ? '이해관계자 그룹이 자유롭게 아이디어를 제시' : 'Stakeholder groups freely suggest ideas'}</td>
              <td>{isKo ? '다양한 관점 수집, 빠름' : 'Diverse perspectives, fast'}</td>
              <td>{isKo ? '체계성 부족 가능' : 'May lack systematic rigor'}</td>
            </tr>
            <tr>
              <td>{isKo ? '혼합 방법' : 'Mixed Methods'}</td>
              <td>{isKo ? '문헌연구 + 전문가 인터뷰/델파이를 결합' : 'Combine literature review with expert interview/Delphi'}</td>
              <td>{isKo ? '이론적·실무적 타당성 동시 확보' : 'Both theoretical and practical validity'}</td>
              <td>{isKo ? '연구 기간 증가' : 'Increased research duration'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '다수준 계층구조 예시' : 'Multi-Level Hierarchy Examples'}</h3>
      <p>
        {isKo
          ? '복잡한 의사결정에서는 기준 아래에 하위기준을 두는 다수준 계층구조가 필요할 수 있습니다. 예를 들어, 신규 공장 입지 선정 문제를 생각해 봅시다:'
          : 'For complex decisions, a multi-level hierarchy with sub-criteria beneath the main criteria may be necessary. For example, consider a new factory site selection problem:'}
      </p>
      <ul>
        <li><strong>{isKo ? '1수준 (목표)' : 'Level 1 (Goal)'}</strong>: {isKo ? '최적의 공장 입지 선정' : 'Select the optimal factory site'}</li>
        <li><strong>{isKo ? '2수준 (주기준)' : 'Level 2 (Main Criteria)'}</strong>: {isKo ? '경제적 요인, 물류 요인, 인력 요인, 환경 요인' : 'Economic factors, Logistics factors, Human resource factors, Environmental factors'}</li>
        <li><strong>{isKo ? '3수준 (하위기준)' : 'Level 3 (Sub-criteria)'}</strong>:
          <ul>
            <li>{isKo ? '경제적 요인 → 토지 비용, 건설 비용, 세금 혜택, 운영 비용' : 'Economic factors → Land cost, Construction cost, Tax incentives, Operating cost'}</li>
            <li>{isKo ? '물류 요인 → 원자재 접근성, 시장 접근성, 교통 인프라' : 'Logistics factors → Raw material accessibility, Market accessibility, Transportation infrastructure'}</li>
            <li>{isKo ? '인력 요인 → 숙련 노동력 가용성, 인건비, 교육 기관 인접성' : 'Human resource factors → Skilled labor availability, Labor cost, Proximity to educational institutions'}</li>
            <li>{isKo ? '환경 요인 → 환경 규제, 자연재해 위험, 지역사회 수용성' : 'Environmental factors → Environmental regulations, Natural disaster risk, Community acceptance'}</li>
          </ul>
        </li>
        <li><strong>{isKo ? '4수준 (대안)' : 'Level 4 (Alternatives)'}</strong>: {isKo ? '후보지 A, 후보지 B, 후보지 C' : 'Site A, Site B, Site C'}</li>
      </ul>

      <h3>{isKo ? '계층구조 설계에서의 흔한 실수' : 'Common Mistakes in Hierarchy Design'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '기준의 중복' : 'Overlapping criteria'}</strong> —{' '}
          {isKo
            ? '"고객 만족도"와 "서비스 품질"처럼 개념이 겹치는 기준을 같은 수준에 배치하는 실수입니다. 쌍대비교 시 응답자 혼란을 야기합니다.'
            : 'Placing conceptually overlapping criteria like "customer satisfaction" and "service quality" at the same level. This causes respondent confusion during pairwise comparisons.'}
        </li>
        <li>
          <strong>{isKo ? '과다한 기준 수' : 'Excessive number of criteria'}</strong> —{' '}
          {isKo
            ? '한 수준에 10개 이상의 기준을 배치하면 비교 횟수가 45회 이상이 되어 응답 품질이 저하됩니다.'
            : 'Placing more than 10 criteria at one level results in 45+ comparisons, degrading response quality.'}
        </li>
        <li>
          <strong>{isKo ? '추상적 기준' : 'Vague criteria'}</strong> —{' '}
          {isKo
            ? '"전반적 우수성"이나 "기타 요인"처럼 모호한 기준은 전문가의 판단을 어렵게 만듭니다.'
            : 'Vague criteria like "overall excellence" or "other factors" make it difficult for experts to make judgments.'}
        </li>
        <li>
          <strong>{isKo ? '목표와의 연결성 부족' : 'Weak connection to goal'}</strong> —{' '}
          {isKo
            ? '기준이 최상위 목표와 논리적으로 연결되지 않으면 분석 결과의 실질적 의미가 줄어듭니다.'
            : 'If criteria are not logically connected to the top-level goal, the practical significance of analysis results diminishes.'}
        </li>
        <li>
          <strong>{isKo ? '독립성 위반 간과' : 'Overlooking independence violations'}</strong> —{' '}
          {isKo
            ? '기준 간에 명백한 상호 영향이 있음에도 AHP를 적용하면, 결과의 신뢰성이 저하됩니다. 이 경우 ANP를 고려해야 합니다.'
            : 'Applying AHP when there is obvious mutual influence among criteria undermines result reliability. In such cases, ANP should be considered.'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '효과적인 계층구조 구축 절차' : 'Effective Hierarchy Construction Procedure'}>
        <p>
          {isKo
            ? '(1) 문헌연구를 통해 후보 기준 목록을 작성합니다. (2) 전문가 인터뷰 또는 델파이를 통해 기준을 검증하고 보완합니다. (3) 유사한 기준을 묶어 상위기준-하위기준 구조로 정리합니다. (4) 7±2 규칙에 맞게 각 수준의 기준 수를 조정합니다. (5) 상호 배타성, 포괄성, 독립성을 최종 점검합니다. (6) 파일럿 테스트를 실시하여 응답자가 기준을 올바르게 이해하는지 확인합니다.'
            : '(1) Create a candidate criteria list through literature review. (2) Verify and supplement criteria through expert interviews or Delphi. (3) Group similar criteria into main criteria and sub-criteria. (4) Adjust the number of criteria at each level to follow the 7±2 rule. (5) Perform a final check for mutual exclusivity, exhaustiveness, and independence. (6) Conduct a pilot test to confirm respondents correctly understand the criteria.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 3 — Pairwise Comparison and Scale                          */
/* ================================================================== */

function PairwiseSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-scale-balanced" />
        {isKo ? '쌍대비교와 척도 (Pairwise Comparison and Scale)' : 'Pairwise Comparison and Scale'}
      </h2>

      <h3>{isKo ? 'Saaty의 9점 기본 척도' : "Saaty's 9-Point Fundamental Scale"}</h3>
      <p>
        {isKo
          ? 'AHP에서 쌍대비교는 Saaty의 9점 기본 척도(Fundamental Scale of Absolute Numbers)를 사용합니다. 이 척도는 두 요소 간의 상대적 중요도를 1(동등)부터 9(절대적 중요)까지의 정수로 표현합니다. 홀수값은 주요 판단 수준을, 짝수값은 인접 판단 수준 사이의 절충값을 나타냅니다.'
          : 'Pairwise comparisons in AHP use Saaty\'s Fundamental Scale of Absolute Numbers. This scale expresses the relative importance between two elements as integers from 1 (equal) to 9 (absolute importance). Odd values represent main judgment levels, while even values represent compromises between adjacent judgment levels.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '중요도' : 'Intensity'}</th>
              <th>{isKo ? '정의' : 'Definition'}</th>
              <th>{isKo ? '설명' : 'Explanation'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{isKo ? '동등하게 중요 (Equal importance)' : 'Equal importance'}</td>
              <td>{isKo ? '두 요소가 목표에 동등하게 기여함' : 'Two elements contribute equally to the objective'}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>{isKo ? '동등과 약간 사이 (Weak)' : 'Weak or slight'}</td>
              <td>{isKo ? '동등과 약간 중요 사이의 절충' : 'Compromise between equal and moderate'}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>{isKo ? '약간 중요 (Moderate importance)' : 'Moderate importance'}</td>
              <td>{isKo ? '경험과 판단에 의해 한 요소가 약간 선호됨' : 'Experience and judgment slightly favor one element'}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>{isKo ? '약간과 강하게 사이 (Moderate plus)' : 'Moderate plus'}</td>
              <td>{isKo ? '약간 중요와 강하게 중요 사이의 절충' : 'Compromise between moderate and strong'}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>{isKo ? '강하게 중요 (Strong importance)' : 'Strong importance'}</td>
              <td>{isKo ? '경험과 판단에 의해 한 요소가 강하게 선호됨' : 'Experience and judgment strongly favor one element'}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>{isKo ? '강하게와 매우 강하게 사이 (Strong plus)' : 'Strong plus'}</td>
              <td>{isKo ? '강하게 중요와 매우 강하게 중요 사이의 절충' : 'Compromise between strong and very strong'}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>{isKo ? '매우 강하게 중요 (Very strong importance)' : 'Very strong importance'}</td>
              <td>{isKo ? '한 요소가 다른 요소에 비해 매우 강하게 선호되며, 실제로 그 우위가 입증됨' : 'One element is favored very strongly and its dominance is demonstrated in practice'}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>{isKo ? '매우 강하게와 절대적 사이 (Very, very strong)' : 'Very, very strong'}</td>
              <td>{isKo ? '매우 강하게 중요와 절대적으로 중요 사이의 절충' : 'Compromise between very strong and extreme'}</td>
            </tr>
            <tr>
              <td>9</td>
              <td>{isKo ? '절대적으로 중요 (Extreme importance)' : 'Extreme importance'}</td>
              <td>{isKo ? '한 요소가 다른 요소보다 가능한 최고 수준으로 선호됨' : 'The evidence favoring one element over another is of the highest possible order of affirmation'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '역수 성질 (Reciprocal Property)' : 'Reciprocal Property'}</h3>
      <p>
        {isKo
          ? '쌍대비교에서 요소 i가 요소 j보다 k배 중요하다고 판단하면(a_ij = k), 요소 j의 요소 i에 대한 중요도는 자동으로 1/k가 됩니다(a_ji = 1/k). 이를 역수 성질(reciprocal property)이라 하며, 이 성질 덕분에 응답자는 쌍대비교 행렬의 상삼각 부분만 응답하면 됩니다. 예를 들어, 기준 A가 기준 B보다 5배 중요하면 a_AB = 5이고, 자동으로 a_BA = 1/5가 됩니다.'
          : 'In pairwise comparison, if element i is judged k times more important than element j (a_ij = k), then the importance of element j relative to element i is automatically 1/k (a_ji = 1/k). This is called the reciprocal property, and thanks to this property, respondents only need to fill in the upper triangular part of the pairwise comparison matrix. For example, if criterion A is 5 times more important than criterion B, then a_AB = 5 and automatically a_BA = 1/5.'}
      </p>

      <h3>{isKo ? '비교 횟수: n(n-1)/2' : 'Number of Comparisons: n(n-1)/2'}</h3>
      <p>
        {isKo
          ? 'n개의 요소를 쌍대비교할 때 필요한 비교 횟수는 n(n-1)/2입니다. 역수 성질에 의해 대각선 아래 부분은 자동으로 결정되고, 대각선 값은 항상 1이므로, 실제로 응답해야 하는 비교는 상삼각 부분뿐입니다.'
          : 'When comparing n elements in pairs, the required number of comparisons is n(n-1)/2. Due to the reciprocal property, the lower triangular part is automatically determined, and diagonal values are always 1, so only the upper triangular part needs actual responses.'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '요소 수 (n)' : 'Number of elements (n)'}</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{isKo ? '비교 횟수' : 'Comparisons'}</td>
              <td>3</td>
              <td>6</td>
              <td>10</td>
              <td>15</td>
              <td>21</td>
              <td>28</td>
              <td>36</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '쌍대비교 행렬 구성' : 'Constructing the Pairwise Comparison Matrix'}</h3>
      <p>
        {isKo
          ? '쌍대비교 행렬 A는 n x n 양의 역수 행렬(positive reciprocal matrix)입니다. 행렬의 요소 a_ij는 기준 i가 기준 j에 대해 갖는 상대적 중요도를 나타냅니다. 대각선 요소는 모두 1(자기 자신과의 비교)이며, a_ji = 1/a_ij 관계가 성립합니다.'
          : 'The pairwise comparison matrix A is an n x n positive reciprocal matrix. Element a_ij represents the relative importance of criterion i with respect to criterion j. All diagonal elements are 1 (comparison with itself), and the relationship a_ji = 1/a_ij holds.'}
      </p>

      <h3>{isKo ? '가중치 산출 방법: 고유벡터법' : 'Weight Calculation: Eigenvector Method'}</h3>
      <p>
        {isKo
          ? 'Saaty가 제안한 고유벡터법(eigenvector method)은 쌍대비교 행렬 A의 최대 고유값(principal eigenvalue, λ_max)에 대응하는 고유벡터(eigenvector)를 구하는 방법입니다. 수학적으로 Aw = λ_max · w를 만족하는 벡터 w를 구하고, 이를 정규화(합이 1이 되도록)하면 각 요소의 상대적 가중치가 됩니다. 완벽하게 일관된 행렬에서는 λ_max = n이며, 일관성이 떨어질수록 λ_max > n이 됩니다.'
          : 'The eigenvector method proposed by Saaty calculates the eigenvector corresponding to the principal eigenvalue (λ_max) of the pairwise comparison matrix A. Mathematically, we find the vector w that satisfies Aw = λ_max · w and normalize it (so the sum equals 1) to obtain the relative weight of each element. In a perfectly consistent matrix, λ_max = n, and as consistency decreases, λ_max > n.'}
      </p>

      <h3>{isKo ? '가중치 산출 방법: 기하평균법' : 'Weight Calculation: Geometric Mean Method'}</h3>
      <p>
        {isKo
          ? '기하평균법(geometric mean method, Row Geometric Mean Method)은 고유벡터법의 근사적 방법으로, 계산이 간편하여 실무에서 자주 사용됩니다. 각 행의 요소를 기하평균하여 정규화합니다: (1) 각 행의 모든 값을 곱합니다. (2) n제곱근을 구합니다. (3) 모든 행의 기하평균값의 합으로 나누어 정규화합니다. Crawford와 Williams(1985)는 기하평균법이 고유벡터법과 유사한 결과를 산출함을 입증했습니다.'
          : 'The geometric mean method (Row Geometric Mean Method) is an approximate method of the eigenvector method, frequently used in practice due to its computational simplicity. It normalizes the geometric mean of each row: (1) Multiply all values in each row. (2) Take the nth root. (3) Normalize by dividing by the sum of all row geometric means. Crawford and Williams (1985) demonstrated that the geometric mean method produces results similar to the eigenvector method.'}
      </p>

      <h3>{isKo ? '3x3 행렬 계산 예시' : 'Example Calculation with a 3x3 Matrix'}</h3>
      <p>
        {isKo
          ? '3개 기준(비용, 품질, 납기)의 쌍대비교 예시를 살펴보겠습니다. "비용이 품질보다 3배 중요하고, 비용이 납기보다 5배 중요하며, 품질이 납기보다 2배 중요하다"고 판단한 경우:'
          : 'Let us examine a pairwise comparison example for three criteria (Cost, Quality, Delivery). Suppose the judgment is: "Cost is 3 times more important than Quality, Cost is 5 times more important than Delivery, and Quality is 2 times more important than Delivery":'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th></th>
              <th>{isKo ? '비용' : 'Cost'}</th>
              <th>{isKo ? '품질' : 'Quality'}</th>
              <th>{isKo ? '납기' : 'Delivery'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>{isKo ? '비용' : 'Cost'}</strong></td>
              <td>1</td>
              <td>3</td>
              <td>5</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '품질' : 'Quality'}</strong></td>
              <td>1/3</td>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td><strong>{isKo ? '납기' : 'Delivery'}</strong></td>
              <td>1/5</td>
              <td>1/2</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {isKo
          ? '기하평균법으로 가중치를 산출하면: 비용 = (1 × 3 × 5)^(1/3) = 2.466, 품질 = (1/3 × 1 × 2)^(1/3) = 0.874, 납기 = (1/5 × 1/2 × 1)^(1/3) = 0.464. 정규화: 합계 = 2.466 + 0.874 + 0.464 = 3.804. 비용 가중치 = 2.466/3.804 = 0.648, 품질 가중치 = 0.874/3.804 = 0.230, 납기 가중치 = 0.464/3.804 = 0.122. 따라서 비용이 약 64.8%의 가중치로 가장 중요하고, 품질 23.0%, 납기 12.2% 순입니다.'
          : 'Calculating weights using the geometric mean method: Cost = (1 × 3 × 5)^(1/3) = 2.466, Quality = (1/3 × 1 × 2)^(1/3) = 0.874, Delivery = (1/5 × 1/2 × 1)^(1/3) = 0.464. Normalization: Sum = 2.466 + 0.874 + 0.464 = 3.804. Cost weight = 2.466/3.804 = 0.648, Quality weight = 0.874/3.804 = 0.230, Delivery weight = 0.464/3.804 = 0.122. Therefore, Cost is most important with approximately 64.8% weight, followed by Quality at 23.0% and Delivery at 12.2%.'}
      </p>

      <TipBox type="tip" title={isKo ? '쌍대비교 설문 작성 팁' : 'Tips for Designing Pairwise Comparison Questionnaires'}>
        <p>
          {isKo
            ? '(1) 각 기준의 정의를 명확히 제시하세요. (2) 9점 척도의 의미를 예시와 함께 설명하세요. (3) 비교 질문은 "기준 A가 기준 B에 비해 [목표]를 달성하는 데 얼마나 더 중요합니까?"의 형태로 통일하세요. (4) 응답자의 인지적 부담을 줄이기 위해, 관련 있는 비교를 연속으로 배치하세요. (5) 온라인 설문의 경우 슬라이더 인터페이스가 직관적입니다.'
            : '(1) Clearly define each criterion. (2) Explain the meaning of the 9-point scale with examples. (3) Standardize comparison questions in the format: "With respect to [goal], how much more important is criterion A compared to criterion B?" (4) To reduce cognitive burden, place related comparisons consecutively. (5) For online surveys, slider interfaces are intuitive.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 4 — Consistency Verification                               */
/* ================================================================== */

function ConsistencySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-check-double" />
        {isKo ? '일관성 검증 (Consistency Verification)' : 'Consistency Verification'}
      </h2>

      <h3>{isKo ? '일관성이란 무엇인가?' : 'What Is Consistency?'}</h3>
      <p>
        {isKo
          ? 'AHP에서 일관성(consistency)이란 쌍대비교 판단의 논리적 정합성을 의미합니다. 예를 들어, A가 B보다 3배 중요하고 B가 C보다 2배 중요하다면, 완벽한 일관성 하에서 A는 C보다 6배 중요해야 합니다. 그러나 인간의 판단은 본질적으로 완벽한 일관성을 달성하기 어려우므로, AHP는 일정 수준의 비일관성을 허용하되 그 정도를 정량적으로 측정합니다.'
          : 'In AHP, consistency refers to the logical coherence of pairwise comparison judgments. For example, if A is 3 times more important than B and B is 2 times more important than C, then under perfect consistency, A should be 6 times more important than C. However, since human judgment inherently cannot achieve perfect consistency, AHP allows a certain degree of inconsistency while quantitatively measuring its extent.'}
      </p>

      <h3>{isKo ? '일관성 지수 (CI) 공식' : 'Consistency Index (CI) Formula'}</h3>
      <p>
        {isKo
          ? '일관성 지수(CI: Consistency Index)는 쌍대비교 행렬이 완벽한 일관성에서 얼마나 벗어났는지를 측정합니다. CI = (λ_max - n) / (n - 1). 여기서 λ_max는 쌍대비교 행렬의 최대 고유값(principal eigenvalue)이고, n은 비교 요소의 수입니다. 완벽하게 일관된 행렬에서는 λ_max = n이므로 CI = 0이 됩니다. 비일관성이 커질수록 λ_max > n이 되어 CI가 증가합니다.'
          : 'The Consistency Index (CI) measures how much the pairwise comparison matrix deviates from perfect consistency. CI = (λ_max - n) / (n - 1). Here, λ_max is the principal eigenvalue of the pairwise comparison matrix, and n is the number of elements being compared. In a perfectly consistent matrix, λ_max = n, so CI = 0. As inconsistency increases, λ_max > n, and CI increases.'}
      </p>

      <h3>{isKo ? '무작위 지수 (RI) 표' : 'Random Index (RI) Table'}</h3>
      <p>
        {isKo
          ? '무작위 지수(RI: Random Index)는 동일한 크기의 행렬에서 무작위로 생성된 쌍대비교의 평균적인 일관성 지수입니다. Saaty가 수천 개의 무작위 행렬을 시뮬레이션하여 도출했습니다. RI는 비교 요소의 수(n)에 따라 달라지며, 다음 표와 같습니다:'
          : 'The Random Index (RI) is the average consistency index of randomly generated pairwise comparisons for matrices of the same size. Saaty derived these values by simulating thousands of random matrices. RI varies according to the number of elements (n) as shown in the following table:'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>n</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>RI</strong></td>
              <td>0.00</td>
              <td>0.00</td>
              <td>0.58</td>
              <td>0.90</td>
              <td>1.12</td>
              <td>1.24</td>
              <td>1.32</td>
              <td>1.41</td>
              <td>1.45</td>
              <td>1.49</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>{isKo ? '일관성 비율 (CR) 공식' : 'Consistency Ratio (CR) Formula'}</h3>
      <p>
        {isKo
          ? '일관성 비율(CR: Consistency Ratio)은 일관성 지수(CI)를 무작위 지수(RI)로 나눈 값입니다. CR = CI / RI. CR은 해당 쌍대비교가 무작위적 판단에 비해 얼마나 일관적인지를 나타냅니다. CR 값이 작을수록 일관성이 높다는 것을 의미합니다.'
          : 'The Consistency Ratio (CR) is obtained by dividing the Consistency Index (CI) by the Random Index (RI). CR = CI / RI. CR indicates how consistent the pairwise comparison is relative to random judgments. A smaller CR value indicates higher consistency.'}
      </p>

      <h3>{isKo ? 'CR < 0.1 기준' : 'CR < 0.1 Threshold'}</h3>
      <p>
        {isKo
          ? 'Saaty(1980)는 CR이 0.1(10%) 미만이면 쌍대비교 판단이 "수용 가능한 일관성(acceptable consistency)"을 갖는다고 제안했습니다. 이 기준은 AHP 연구에서 가장 널리 사용됩니다. 일부 연구자들은 n이 3인 경우 CR < 0.05, n이 4인 경우 CR < 0.08을 더 엄격한 기준으로 적용하기도 합니다. n이 1 또는 2인 경우 RI = 0이므로 CR을 계산할 수 없으며, 이 경우 일관성은 항상 완벽합니다.'
          : 'Saaty (1980) proposed that a CR less than 0.1 (10%) indicates "acceptable consistency" in pairwise comparison judgments. This threshold is the most widely used standard in AHP research. Some researchers apply stricter thresholds: CR < 0.05 for n = 3 and CR < 0.08 for n = 4. When n is 1 or 2, RI = 0, so CR cannot be calculated; in these cases, consistency is always perfect.'}
      </p>

      <h3>{isKo ? 'CR > 0.1일 때의 대처 방법' : 'What to Do When CR > 0.1'}</h3>
      <p>
        {isKo
          ? 'CR이 0.1을 초과하면 쌍대비교 판단이 충분히 일관적이지 않다는 것을 의미하며, 다음과 같은 조치를 취해야 합니다:'
          : 'When CR exceeds 0.1, it means the pairwise comparison judgments are not sufficiently consistent, and the following actions should be taken:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '재평가 요청' : 'Request re-evaluation'}</strong> —{' '}
          {isKo
            ? '가장 비일관적인 비교 쌍을 식별하여 응답자에게 재검토를 요청합니다. 가장 비일관적인 쌍은 쌍대비교 행렬과 일관된 행렬 간의 차이가 가장 큰 요소를 분석하여 찾을 수 있습니다.'
            : 'Identify the most inconsistent comparison pairs and ask the respondent to reconsider. The most inconsistent pairs can be found by analyzing which elements show the largest difference between the pairwise comparison matrix and a consistent matrix.'}
        </li>
        <li>
          <strong>{isKo ? '기준 재검토' : 'Re-examine criteria'}</strong> —{' '}
          {isKo
            ? '비일관성이 지속되면 기준의 정의가 모호하거나 개념이 겹치는지 확인합니다. 기준을 더 명확히 정의하거나 재구성할 필요가 있을 수 있습니다.'
            : 'If inconsistency persists, check whether criterion definitions are ambiguous or concepts overlap. Criteria may need to be more clearly defined or restructured.'}
        </li>
        <li>
          <strong>{isKo ? '응답 제외' : 'Exclude response'}</strong> —{' '}
          {isKo
            ? '여러 차례 재평가 후에도 CR 기준을 충족하지 못하면, 해당 응답을 분석에서 제외하고 그 사유를 논문에 명시합니다.'
            : 'If the CR threshold is not met after multiple re-evaluations, exclude the response from the analysis and clearly state the reason in the paper.'}
        </li>
      </ol>

      <h3>{isKo ? '그룹 의사결정에서의 일관성' : 'Consistency in Group Decision-Making'}</h3>
      <p>
        {isKo
          ? 'AHP는 종종 여러 전문가의 판단을 종합하는 그룹 의사결정에 사용됩니다. 그룹 판단을 종합하는 방법에는 두 가지가 있습니다: (1) AIJ(Aggregation of Individual Judgments) — 개별 쌍대비교 값을 기하평균으로 종합하여 하나의 그룹 행렬을 구성합니다. 이 경우 그룹 행렬의 CR을 별도로 검증합니다. (2) AIP(Aggregation of Individual Priorities) — 개별 응답자의 가중치를 먼저 각각 산출한 뒤, 이를 기하평균(또는 산술평균)으로 종합합니다. 이 경우 각 개별 응답의 CR을 검증합니다. AIJ에서 기하평균을 사용하는 이유는 역수 성질을 보존하기 위해서입니다(Aczél & Saaty, 1983).'
          : 'AHP is frequently used in group decision-making that synthesizes judgments from multiple experts. There are two methods for aggregating group judgments: (1) AIJ (Aggregation of Individual Judgments) — individual pairwise comparison values are aggregated using the geometric mean to construct a single group matrix. The CR of the group matrix is then verified separately. (2) AIP (Aggregation of Individual Priorities) — individual weights are first calculated for each respondent, then aggregated using the geometric mean (or arithmetic mean). In this case, the CR of each individual response is verified. The geometric mean is used in AIJ to preserve the reciprocal property (Aczél & Saaty, 1983).'}
      </p>

      <TipBox type="important" title={isKo ? '일관성 검증의 중요성' : 'Importance of Consistency Verification'}>
        <p>
          {isKo
            ? '일관성 검증은 AHP의 품질 보증 메커니즘입니다. CR을 보고하지 않는 AHP 논문은 심사 과정에서 반드시 지적을 받습니다. 모든 쌍대비교 행렬의 CR 값을 명시하고, CR > 0.1인 응답의 처리 방법을 반드시 기술하십시오. 또한 개별 응답자별 CR과 그룹 종합 행렬의 CR을 모두 보고하는 것이 바람직합니다.'
            : 'Consistency verification is AHP\'s quality assurance mechanism. AHP papers that do not report CR will inevitably receive criticism during the review process. Always report the CR values for all pairwise comparison matrices and describe how responses with CR > 0.1 were handled. It is also advisable to report both individual respondent CR values and the CR of the aggregated group matrix.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 5 — AHP Software Applications                              */
/* ================================================================== */

function SoftwareSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-laptop-code" />
        {isKo ? 'AHP 소프트웨어 활용 (AHP Software Applications)' : 'AHP Software Applications'}
      </h2>

      <h3>{isKo ? 'Expert Choice' : 'Expert Choice'}</h3>
      <p>
        {isKo
          ? 'Expert Choice는 Saaty의 AHP 이론에 기반하여 개발된 상용 소프트웨어로, 가장 널리 사용되는 AHP 전문 도구입니다. 주요 기능은 다음과 같습니다:'
          : 'Expert Choice is a commercial software developed based on Saaty\'s AHP theory and is the most widely used dedicated AHP tool. Key features include:'}
      </p>
      <ul>
        <li>{isKo ? '직관적인 GUI를 통한 계층구조 모델링' : 'Intuitive GUI-based hierarchy modeling'}</li>
        <li>{isKo ? '쌍대비교 입력 지원 (수치, 그래픽, 언어적 모드)' : 'Pairwise comparison input support (numerical, graphical, verbal modes)'}</li>
        <li>{isKo ? '자동 일관성 비율 계산 및 비일관성 식별' : 'Automatic consistency ratio calculation and inconsistency identification'}</li>
        <li>{isKo ? '민감도 분석 (성과 민감도, 동적 민감도, 기울기 민감도, 2차원 민감도, head-to-head 비교)' : 'Sensitivity analysis (performance, dynamic, gradient, two-dimensional, head-to-head)'}</li>
        <li>{isKo ? '다중 참여자 지원 및 그룹 의사결정 기능' : 'Multi-participant support and group decision-making features'}</li>
        <li>{isKo ? '결과 보고서 자동 생성' : 'Automatic result report generation'}</li>
      </ul>
      <p>
        {isKo
          ? 'Expert Choice의 일반적인 워크플로우는: (1) 프로젝트 생성 및 목표 설정 → (2) 기준 및 하위기준 입력 → (3) 대안 입력 → (4) 쌍대비교 수행 → (5) 일관성 확인 및 수정 → (6) 결과 종합 및 민감도 분석 → (7) 보고서 출력 순서입니다.'
          : 'The typical Expert Choice workflow is: (1) Create project and set goal → (2) Enter criteria and sub-criteria → (3) Enter alternatives → (4) Perform pairwise comparisons → (5) Check and adjust consistency → (6) Synthesize results and run sensitivity analysis → (7) Generate reports.'}
      </p>

      <h3>{isKo ? 'Super Decisions' : 'Super Decisions'}</h3>
      <p>
        {isKo
          ? 'Super Decisions는 Saaty가 설립한 Creative Decisions Foundation에서 개발한 무료 소프트웨어로, AHP뿐만 아니라 ANP(Analytic Network Process)도 지원합니다. 기준 간 상호 의존성과 피드백 구조를 모델링할 수 있어, AHP의 독립성 가정이 성립하지 않는 복잡한 문제에 적합합니다. 클러스터와 노드 개념을 사용하여 네트워크 모델을 구축하며, 초행렬(supermatrix) 계산을 통해 최종 우선순위를 도출합니다.'
          : 'Super Decisions is free software developed by the Creative Decisions Foundation established by Saaty. It supports not only AHP but also ANP (Analytic Network Process). It can model interdependencies and feedback structures among criteria, making it suitable for complex problems where AHP\'s independence assumption does not hold. It uses cluster and node concepts to build network models and derives final priorities through supermatrix calculations.'}
      </p>

      <h3>{isKo ? 'Excel을 이용한 AHP 계산' : 'Excel-Based AHP Calculation'}</h3>
      <p>
        {isKo
          ? 'Microsoft Excel은 별도의 소프트웨어 없이 AHP를 수행할 수 있는 접근성 높은 도구입니다. 다음은 Excel에서 AHP를 단계별로 수행하는 방법입니다:'
          : 'Microsoft Excel is an accessible tool for performing AHP without additional software. The following is a step-by-step guide to performing AHP in Excel:'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '쌍대비교 행렬 입력' : 'Enter pairwise comparison matrix'}</strong> —{' '}
          {isKo
            ? 'n x n 행렬을 셀에 입력합니다. 대각선은 1, 하삼각은 =1/상삼각셀 수식으로 자동 계산합니다.'
            : 'Enter the n x n matrix in cells. Diagonals are 1, and the lower triangle uses =1/upper_cell formula for automatic calculation.'}
        </li>
        <li>
          <strong>{isKo ? '열 합계 계산' : 'Calculate column sums'}</strong> —{' '}
          {isKo ? 'SUM 함수로 각 열의 합계를 구합니다.' : 'Use the SUM function to calculate the sum of each column.'}
        </li>
        <li>
          <strong>{isKo ? '정규화 행렬 생성' : 'Create normalized matrix'}</strong> —{' '}
          {isKo ? '각 셀을 해당 열 합계로 나눕니다.' : 'Divide each cell by its column sum.'}
        </li>
        <li>
          <strong>{isKo ? '가중치 산출' : 'Calculate weights'}</strong> —{' '}
          {isKo ? '정규화 행렬의 각 행 평균을 구합니다. 이것이 각 기준의 가중치입니다.' : 'Calculate the average of each row in the normalized matrix. These are the weights for each criterion.'}
        </li>
        <li>
          <strong>{isKo ? 'λ_max 계산' : 'Calculate λ_max'}</strong> —{' '}
          {isKo
            ? '원래 행렬에 가중치 벡터를 곱한 후(MMULT 함수), 각 결과를 해당 가중치로 나누고, 그 평균이 λ_max입니다.'
            : 'Multiply the original matrix by the weight vector (MMULT function), divide each result by its corresponding weight, and the average is λ_max.'}
        </li>
        <li>
          <strong>{isKo ? 'CI 및 CR 계산' : 'Calculate CI and CR'}</strong> —{' '}
          {isKo ? 'CI = (λ_max - n)/(n - 1), CR = CI/RI 공식을 적용합니다.' : 'Apply formulas CI = (λ_max - n)/(n - 1) and CR = CI/RI.'}
        </li>
      </ol>

      <h3>{isKo ? 'R 패키지 (ahp)' : 'R Packages (ahp)'}</h3>
      <p>
        {isKo
          ? 'R에서는 ahp 패키지를 사용하여 AHP 분석을 자동화할 수 있습니다. 이 패키지는 YAML 형식으로 계층구조와 쌍대비교를 정의하고, 가중치 산출, 일관성 검증, 시각화 기능을 제공합니다. 또한 ahpsurvey 패키지는 설문 데이터에서 AHP 분석을 수행하기 위한 전용 패키지로, 다수 응답자의 데이터를 효율적으로 처리할 수 있습니다. 기본적인 행렬 연산만으로도 R에서 AHP를 구현할 수 있으므로, 커스텀 분석이 필요한 경우 직접 코딩하는 것도 가능합니다.'
          : 'In R, the ahp package can be used to automate AHP analysis. This package defines hierarchies and pairwise comparisons in YAML format and provides weight calculation, consistency verification, and visualization features. The ahpsurvey package is specifically designed for performing AHP analysis on survey data and can efficiently process data from multiple respondents. AHP can also be implemented in R using basic matrix operations, so custom coding is possible when customized analysis is needed.'}
      </p>

      <h3>{isKo ? 'Python 구현' : 'Python Implementations'}</h3>
      <p>
        {isKo
          ? 'Python에서는 pyahp, ahpy 등의 라이브러리를 사용하거나, NumPy와 SciPy를 활용하여 AHP를 직접 구현할 수 있습니다. NumPy의 linalg.eig() 함수로 고유벡터를 계산하고, 이를 정규화하여 가중치를 산출합니다. Python은 데이터 전처리, 시각화(matplotlib, seaborn), 보고서 자동화와의 통합이 용이하여, 대규모 AHP 연구에서 특히 유용합니다.'
          : 'In Python, libraries such as pyahp and ahpy can be used, or AHP can be directly implemented using NumPy and SciPy. The NumPy linalg.eig() function calculates eigenvectors, which are normalized to derive weights. Python is particularly useful for large-scale AHP studies due to its easy integration with data preprocessing, visualization (matplotlib, seaborn), and report automation.'}
      </p>

      <h3>{isKo ? '소프트웨어 비교표' : 'Software Comparison Table'}</h3>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '도구' : 'Tool'}</th>
              <th>{isKo ? '비용' : 'Cost'}</th>
              <th>{isKo ? 'ANP 지원' : 'ANP Support'}</th>
              <th>{isKo ? '민감도 분석' : 'Sensitivity Analysis'}</th>
              <th>{isKo ? '그룹 의사결정' : 'Group Decision'}</th>
              <th>{isKo ? '난이도' : 'Difficulty'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Expert Choice</td>
              <td>{isKo ? '유료 (상용)' : 'Paid (commercial)'}</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td>{isKo ? '매우 강력' : 'Very powerful'}</td>
              <td>{isKo ? '강력 지원' : 'Strong support'}</td>
              <td>{isKo ? '쉬움' : 'Easy'}</td>
            </tr>
            <tr>
              <td>Super Decisions</td>
              <td>{isKo ? '무료' : 'Free'}</td>
              <td>{isKo ? '완전 지원' : 'Full support'}</td>
              <td>{isKo ? '지원' : 'Supported'}</td>
              <td>{isKo ? '기본 지원' : 'Basic support'}</td>
              <td>{isKo ? '중간' : 'Medium'}</td>
            </tr>
            <tr>
              <td>Excel</td>
              <td>{isKo ? 'Office 라이선스' : 'Office license'}</td>
              <td>{isKo ? '수동 구현' : 'Manual'}</td>
              <td>{isKo ? '수동 구현' : 'Manual'}</td>
              <td>{isKo ? '수동 구현' : 'Manual'}</td>
              <td>{isKo ? '중간' : 'Medium'}</td>
            </tr>
            <tr>
              <td>R (ahp/ahpsurvey)</td>
              <td>{isKo ? '무료 (오픈소스)' : 'Free (open source)'}</td>
              <td>{isKo ? '제한적' : 'Limited'}</td>
              <td>{isKo ? '코딩으로 구현' : 'Via coding'}</td>
              <td>{isKo ? '코딩으로 구현' : 'Via coding'}</td>
              <td>{isKo ? '높음 (코딩 필요)' : 'High (coding required)'}</td>
            </tr>
            <tr>
              <td>Python (NumPy)</td>
              <td>{isKo ? '무료 (오픈소스)' : 'Free (open source)'}</td>
              <td>{isKo ? '코딩으로 구현' : 'Via coding'}</td>
              <td>{isKo ? '코딩으로 구현' : 'Via coding'}</td>
              <td>{isKo ? '코딩으로 구현' : 'Via coding'}</td>
              <td>{isKo ? '높음 (코딩 필요)' : 'High (coding required)'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox type="tip" title={isKo ? '소프트웨어 선택 가이드' : 'Software Selection Guide'}>
        <p>
          {isKo
            ? '초보 연구자에게는 Expert Choice 또는 Excel이 적합합니다. Expert Choice는 직관적인 인터페이스와 강력한 민감도 분석 기능을 제공하며, Excel은 별도 소프트웨어 구매 없이 AHP의 기본 원리를 이해하는 데 유용합니다. ANP를 적용해야 하는 경우 Super Decisions를 사용하십시오. 대규모 데이터 분석이나 커스텀 분석이 필요한 경우 R이나 Python이 적합합니다. 어떤 도구를 사용하든 결과의 타당성은 소프트웨어가 아닌 올바른 계층구조 설계와 일관된 판단에 의해 결정됩니다.'
            : 'For beginner researchers, Expert Choice or Excel is suitable. Expert Choice provides an intuitive interface and powerful sensitivity analysis, while Excel is useful for understanding the basic principles of AHP without additional software purchases. Use Super Decisions when ANP needs to be applied. R or Python is suitable when large-scale data analysis or custom analysis is needed. Regardless of the tool used, the validity of results is determined by proper hierarchy design and consistent judgments, not by the software.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ================================================================== */
/*  Section 6 — Writing AHP Papers                                     */
/* ================================================================== */

function PaperWritingSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-pen-to-square" />
        {isKo ? 'AHP 논문작성 (Writing AHP Papers)' : 'Writing AHP Papers'}
      </h2>

      <h3>{isKo ? 'AHP 논문의 기본 구조' : 'Basic Structure of an AHP Paper'}</h3>
      <p>
        {isKo
          ? 'AHP 연구 논문은 일반적인 학술 논문의 구조(서론-문헌검토-연구방법-분석결과-결론)를 따르되, AHP 특유의 요소들을 포함해야 합니다:'
          : 'AHP research papers follow the general academic paper structure (Introduction-Literature Review-Methodology-Results-Conclusion) while including AHP-specific elements:'}
      </p>
      <ol>
        <li><strong>{isKo ? '서론' : 'Introduction'}</strong> — {isKo ? '연구의 배경, 목적, AHP 적용의 필요성' : 'Research background, objectives, necessity of AHP application'}</li>
        <li><strong>{isKo ? '이론적 배경 및 문헌검토' : 'Theoretical Background & Literature Review'}</strong> — {isKo ? 'AHP 이론 소개, 해당 분야의 AHP 선행연구 검토' : 'Introduction to AHP theory, review of prior AHP studies in the field'}</li>
        <li><strong>{isKo ? '연구방법' : 'Methodology'}</strong> — {isKo ? '계층구조 설계, 기준 도출 과정, 설문 설계, 응답자 선정, 분석 방법' : 'Hierarchy design, criteria derivation process, questionnaire design, respondent selection, analysis method'}</li>
        <li><strong>{isKo ? '분석 결과' : 'Results'}</strong> — {isKo ? '쌍대비교 행렬, 가중치, CR 값, 최종 우선순위, 민감도 분석' : 'Pairwise comparison matrices, weights, CR values, final priorities, sensitivity analysis'}</li>
        <li><strong>{isKo ? '결론 및 시사점' : 'Conclusion & Implications'}</strong> — {isKo ? '핵심 발견, 학문적·실무적 시사점, 한계와 향후 과제' : 'Key findings, academic and practical implications, limitations and future research'}</li>
      </ol>

      <h3>{isKo ? '계층구조 도표 제시 방법' : 'How to Present the Hierarchy Diagram'}</h3>
      <p>
        {isKo
          ? '계층구조 도표는 AHP 논문에서 가장 핵심적인 시각 자료입니다. 효과적인 계층구조 도표는 다음 요소를 포함해야 합니다: (1) 최상위에 목표(Goal)를 명확히 표시합니다. (2) 중간 수준에 기준(Criteria)과 하위기준(Sub-criteria)을 배치합니다. (3) 최하위에 대안(Alternatives)을 나열합니다. (4) 수준 간 연결선을 표시합니다. (5) 각 수준의 레이블(Level 1, Level 2 등)을 명시합니다. 도표는 Figure 또는 그림으로 번호를 부여하고, 본문에서 반드시 참조합니다.'
          : 'The hierarchy diagram is the most essential visual material in an AHP paper. An effective hierarchy diagram should include: (1) Clearly display the Goal at the top. (2) Place Criteria and Sub-criteria at intermediate levels. (3) List Alternatives at the bottom. (4) Show connecting lines between levels. (5) Label each level (Level 1, Level 2, etc.). Number the diagram as a Figure and always reference it in the text.'}
      </p>

      <h3>{isKo ? '쌍대비교 행렬 제시 형식' : 'Pairwise Comparison Matrix Presentation Format'}</h3>
      <p>
        {isKo
          ? '쌍대비교 행렬은 표(Table) 형식으로 제시합니다. 모든 쌍대비교 행렬을 논문에 포함하는 것이 이상적이지만, 행렬 수가 많을 경우 주요 행렬만 본문에 포함하고 나머지는 부록(Appendix)에 제시할 수 있습니다. 그룹 의사결정의 경우, 개별 응답의 기하평균으로 종합된 그룹 행렬을 제시합니다. 행렬 내 분수(1/3, 1/5 등)는 소수 표기(0.333, 0.200)보다 분수 표기가 더 직관적입니다.'
          : 'Pairwise comparison matrices are presented in table format. Including all pairwise comparison matrices in the paper is ideal, but when there are many matrices, present only the key ones in the body and the rest in the Appendix. For group decision-making, present the group matrix aggregated by the geometric mean of individual responses. Fractions (1/3, 1/5, etc.) in matrices are more intuitive than decimal notation (0.333, 0.200).'}
      </p>

      <h3>{isKo ? '가중치 결과표 형식' : 'Weight Table Format'}</h3>
      <p>
        {isKo
          ? '가중치 결과는 종합적인 표로 정리하여 제시합니다. 이 표에는 다음 정보가 포함되어야 합니다:'
          : 'Weight results should be presented in a comprehensive table that includes the following information:'}
      </p>
      <div className="table-responsive">
        <table className="guide-table">
          <thead>
            <tr>
              <th>{isKo ? '주기준' : 'Main Criteria'}</th>
              <th>{isKo ? '가중치' : 'Weight'}</th>
              <th>{isKo ? '순위' : 'Rank'}</th>
              <th>{isKo ? '하위기준' : 'Sub-criteria'}</th>
              <th>{isKo ? '지역 가중치' : 'Local Weight'}</th>
              <th>{isKo ? '전역 가중치' : 'Global Weight'}</th>
              <th>{isKo ? '전역 순위' : 'Global Rank'}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}>{isKo ? '경제성 (0.450)' : 'Economy (0.450)'}</td>
              <td rowSpan={2}>0.450</td>
              <td rowSpan={2}>1</td>
              <td>{isKo ? '초기 비용' : 'Initial Cost'}</td>
              <td>0.600</td>
              <td>0.270</td>
              <td>1</td>
            </tr>
            <tr>
              <td>{isKo ? '운영 비용' : 'Operating Cost'}</td>
              <td>0.400</td>
              <td>0.180</td>
              <td>2</td>
            </tr>
            <tr>
              <td rowSpan={2}>{isKo ? '기술성 (0.350)' : 'Technology (0.350)'}</td>
              <td rowSpan={2}>0.350</td>
              <td rowSpan={2}>2</td>
              <td>{isKo ? '성능' : 'Performance'}</td>
              <td>0.500</td>
              <td>0.175</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{isKo ? '확장성' : 'Scalability'}</td>
              <td>0.500</td>
              <td>0.175</td>
              <td>3</td>
            </tr>
            <tr>
              <td>{isKo ? '편의성 (0.200)' : 'Usability (0.200)'}</td>
              <td>0.200</td>
              <td>3</td>
              <td>—</td>
              <td>—</td>
              <td>0.200</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        {isKo
          ? '지역 가중치(local weight)는 해당 상위기준 내에서의 상대적 중요도이고, 전역 가중치(global weight)는 상위기준의 가중치에 지역 가중치를 곱한 최종 가중치입니다. 전역 가중치의 합은 1이 되어야 합니다.'
          : 'Local weight is the relative importance within the parent criterion, while global weight is the final weight obtained by multiplying the parent criterion\'s weight by the local weight. The sum of all global weights must equal 1.'}
      </p>

      <h3>{isKo ? 'CR 보고 방법' : 'How to Report CR'}</h3>
      <p>
        {isKo
          ? 'CR은 모든 쌍대비교 행렬에 대해 보고해야 합니다. 보고 방법의 예: "모든 쌍대비교 행렬의 일관성 비율(CR)은 0.1 미만으로, 수용 가능한 일관성이 확인되었다(Saaty, 1980). 주기준 비교의 CR은 0.045, 경제성 하위기준의 CR은 0.032, 기술성 하위기준의 CR은 0.028이었다." 개별 응답자의 CR 분포를 기술통계(평균, 표준편차, 범위)로 보고하고, CR > 0.1인 응답을 어떻게 처리했는지 명시하는 것이 좋습니다.'
          : 'CR must be reported for all pairwise comparison matrices. Example reporting: "The consistency ratios (CR) for all pairwise comparison matrices were below 0.1, confirming acceptable consistency (Saaty, 1980). The CR for main criteria comparison was 0.045, for economy sub-criteria was 0.032, and for technology sub-criteria was 0.028." It is recommended to report the distribution of individual respondents\' CR values using descriptive statistics (mean, standard deviation, range) and specify how responses with CR > 0.1 were handled.'}
      </p>

      <h3>{isKo ? '민감도 분석' : 'Sensitivity Analysis'}</h3>
      <p>
        {isKo
          ? '민감도 분석(sensitivity analysis)은 AHP 결과의 강건성(robustness)을 검증하는 중요한 과정입니다. 주기준의 가중치를 변경했을 때 최종 대안 순위가 어떻게 변하는지를 분석합니다. 대표적인 방법으로는: (1) 한 기준의 가중치를 ±10%, ±20% 변경하여 순위 변화 관찰, (2) 한 기준의 가중치를 0에서 1까지 변화시키며 다른 기준은 비례적으로 조정하여 순위 역전(rank reversal)이 발생하는 임계점 확인, (3) What-if 시나리오 분석 등이 있습니다.'
          : 'Sensitivity analysis is an important process for verifying the robustness of AHP results. It analyzes how the final alternative ranking changes when the weights of main criteria are modified. Representative methods include: (1) Changing one criterion\'s weight by ±10%, ±20% and observing ranking changes, (2) Varying one criterion\'s weight from 0 to 1 while proportionally adjusting others to identify critical points where rank reversal occurs, (3) What-if scenario analysis.'}
      </p>

      <h3>{isKo ? '문헌검토 섹션: AHP 선행연구 정리' : 'Literature Review Section: Reviewing Prior AHP Studies'}</h3>
      <p>
        {isKo
          ? '문헌검토에서는 (1) AHP 방법론 자체에 대한 주요 문헌(Saaty 1980, 2008 등)을 인용하고, (2) 해당 연구 분야에서 AHP를 적용한 선행연구들을 체계적으로 정리합니다. 선행연구 정리 시에는 연구 목적, 사용된 기준, 응답자 수, 주요 결과를 비교 표로 만들면 효과적입니다. 이를 통해 본 연구의 차별성과 기여를 명확히 할 수 있습니다.'
          : 'In the literature review, (1) cite key references on AHP methodology itself (Saaty 1980, 2008, etc.), and (2) systematically organize prior studies that applied AHP in the relevant research field. When summarizing prior studies, creating a comparison table of research purposes, criteria used, number of respondents, and key results is effective. This helps clarify the differentiation and contribution of the current study.'}
      </p>

      <h3>{isKo ? '연구방법론 기술 템플릿' : 'Methodology Description Template'}</h3>
      <p>
        {isKo
          ? 'AHP 논문의 연구방법 섹션에는 다음 사항을 반드시 기술해야 합니다:'
          : 'The methodology section of an AHP paper must describe the following:'}
      </p>
      <ul>
        <li>{isKo ? '계층구조 설계: 기준 도출 방법(문헌연구, 전문가 인터뷰, 델파이 등)과 최종 확정된 계층구조' : 'Hierarchy design: Criteria derivation method (literature review, expert interview, Delphi, etc.) and the finalized hierarchy'}</li>
        <li>{isKo ? '설문 설계: 9점 척도 사용 여부, 설문 구성, 파일럿 테스트 실시 여부' : 'Questionnaire design: Use of 9-point scale, questionnaire structure, whether pilot test was conducted'}</li>
        <li>{isKo ? '응답자 선정: 전문가 패널의 구성, 선정 기준, 인원 수, 전문성 근거' : 'Respondent selection: Expert panel composition, selection criteria, number of participants, basis for expertise'}</li>
        <li>{isKo ? '데이터 수집: 수집 기간, 방법(대면, 이메일, 온라인), 유효 응답 수' : 'Data collection: Collection period, method (face-to-face, email, online), number of valid responses'}</li>
        <li>{isKo ? '분석 방법: 사용한 소프트웨어, 가중치 산출 방법(고유벡터법/기하평균법), 그룹 종합 방법(AIJ/AIP), CR 기준' : 'Analysis method: Software used, weight calculation method (eigenvector/geometric mean), group aggregation method (AIJ/AIP), CR threshold'}</li>
      </ul>

      <h3>{isKo ? '심사위원의 주요 지적사항' : 'Common Reviewer Comments'}</h3>
      <p>
        {isKo
          ? 'AHP 논문 심사에서 자주 받는 지적사항과 대응 방법입니다:'
          : 'Common criticisms in AHP paper reviews and how to address them:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '"기준 도출 근거가 불충분하다"' : '"Insufficient basis for criteria derivation"'}</strong> —{' '}
          {isKo
            ? '문헌연구와 전문가 검증 과정을 상세히 기술하고, 기준 선정의 이론적 근거를 강화하세요.'
            : 'Describe the literature review and expert validation process in detail, and strengthen the theoretical basis for criteria selection.'}
        </li>
        <li>
          <strong>{isKo ? '"응답자 수가 부족하다"' : '"Insufficient number of respondents"'}</strong> —{' '}
          {isKo
            ? 'AHP는 전문가 패널 방법이므로, 응답자 수보다 전문성이 중요합니다. 그러나 10명 이상의 전문가 패널이 권장됩니다. 응답자의 전문성을 구체적으로 기술하세요.'
            : 'Since AHP is an expert panel method, expertise is more important than the number of respondents. However, a panel of 10 or more experts is recommended. Describe respondents\' expertise in specific terms.'}
        </li>
        <li>
          <strong>{isKo ? '"CR 보고가 누락되었다"' : '"CR reporting is missing"'}</strong> —{' '}
          {isKo
            ? '모든 쌍대비교 행렬의 CR을 반드시 보고하세요. CR > 0.1인 응답의 처리 방법도 명시해야 합니다.'
            : 'Always report the CR for all pairwise comparison matrices. How responses with CR > 0.1 were handled must also be specified.'}
        </li>
        <li>
          <strong>{isKo ? '"민감도 분석이 없다"' : '"No sensitivity analysis"'}</strong> —{' '}
          {isKo
            ? '민감도 분석을 반드시 포함하여 결과의 강건성을 보여주세요.'
            : 'Always include sensitivity analysis to demonstrate the robustness of results.'}
        </li>
        <li>
          <strong>{isKo ? '"AHP를 사용한 이유가 불명확하다"' : '"The reason for using AHP is unclear"'}</strong> —{' '}
          {isKo
            ? '다른 MCDM 기법 대비 AHP의 장점과 해당 연구에 적합한 이유를 명확히 기술하세요.'
            : 'Clearly state the advantages of AHP over other MCDM techniques and why it is suitable for the specific study.'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? '논문의 완성도를 높이는 체크리스트' : 'Checklist for Improving Paper Quality'}>
        <p>
          {isKo
            ? '(1) 계층구조 도표가 명확하고 완전한가? (2) 기준 도출 과정이 체계적으로 기술되었는가? (3) 응답자의 전문성과 선정 기준이 명시되었는가? (4) 모든 쌍대비교 행렬의 CR이 보고되었는가? (5) 가중치 결과표에 지역 가중치와 전역 가중치가 모두 포함되었는가? (6) 민감도 분석이 수행되었는가? (7) AHP 사용의 정당성이 충분히 설명되었는가? (8) 선행연구와의 비교 분석이 이루어졌는가? 이 체크리스트를 투고 전 반드시 확인하십시오.'
            : '(1) Is the hierarchy diagram clear and complete? (2) Is the criteria derivation process systematically described? (3) Are respondents\' expertise and selection criteria specified? (4) Are CR values reported for all pairwise comparison matrices? (5) Does the weight result table include both local and global weights? (6) Has sensitivity analysis been performed? (7) Is the justification for using AHP sufficiently explained? (8) Has comparison with prior studies been conducted? Be sure to check this checklist before submission.'}
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
        <p>{isKo ? 'AHP 연구방법론 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of AHP methodology.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Saaty, T. L. (1980). <em>The Analytic Hierarchy Process: Planning, Priority Setting, Resource Allocation</em>. McGraw-Hill.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Saaty, T. L. (2008). Decision making with the analytic hierarchy process. <em>International Journal of Services Sciences</em>, 1(1), 83-98.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>조근태, 조용곤, 강현수 (2005). <em>앞서가는 리더들의 계층분석적 의사결정</em>. 동현출판사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Vaidya, O. S., & Kumar, S. (2006). Analytic hierarchy process: An overview of applications. <em>European Journal of Operational Research</em>, 169(1), 1-29.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Ishizaka, A., & Labib, A. (2011). Review of the main developments in the analytic hierarchy process. <em>Expert Systems with Applications</em>, 38(11), 14336-14345.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Brunelli, M. (2015). <em>Introduction to the Analytic Hierarchy Process</em>. Springer.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Wind, Y., & Saaty, T. L. (1980). Marketing applications of the analytic hierarchy process. <em>Management Science</em>, 26(7), 641-658.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Forman, E. H., & Gass, S. I. (2001). The analytic hierarchy process: An exposition. <em>Operations Research</em>, 49(4), 469-486.</li>
        </ul>
      </div>
    </>
  );
}

/* ================================================================== */
/*  Main page component                                                */
/* ================================================================== */

export default function Ahp(): ReactElement {
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
        title={isKo ? 'AHP 연구방법론 | Research Master' : 'AHP Methodology | Research Master'}
        description={
          isKo
            ? 'AHP(분석적 계층화 과정)의 이론, 계층구조 설계, 쌍대비교, 일관성 검증, 소프트웨어 활용, 논문작성을 체계적으로 학습합니다.'
            : 'Systematically learn AHP theory, hierarchy design, pairwise comparison, consistency verification, software applications, and paper writing.'
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
            {activeSection === 'overview' && <OverviewSection isKo={isKo} />}
            {activeSection === 'hierarchy' && <HierarchySection isKo={isKo} />}
            {activeSection === 'pairwise' && <PairwiseSection isKo={isKo} />}
            {activeSection === 'consistency' && <ConsistencySection isKo={isKo} />}
            {activeSection === 'software' && <SoftwareSection isKo={isKo} />}
            {activeSection === 'paper-writing' && <PaperWritingSection isKo={isKo} />}
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
