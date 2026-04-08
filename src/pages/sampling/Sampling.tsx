import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'population', icon: 'fa-users', ko: '모집단과 표본', en: 'Population & Sample' },
  { id: 'probability', icon: 'fa-dice', ko: '확률표본추출', en: 'Probability Sampling' },
  { id: 'non-probability', icon: 'fa-hand-pointer', ko: '비확률표본추출', en: 'Non-probability Sampling' },
  { id: 'sample-size', icon: 'fa-calculator', ko: '표본크기 결정', en: 'Determining Sample Size' },
  { id: 'error', icon: 'fa-exclamation-triangle', ko: '표본오차와 신뢰구간', en: 'Sampling Error & Confidence Intervals' },
  { id: 'practice', icon: 'fa-clipboard-check', ko: '표본추출 실전', en: 'Sampling in Practice' },
  { id: 'references', icon: 'fa-book', ko: '참고문헌', en: 'References' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 - Population & Sample                                   */
/* ------------------------------------------------------------------ */
function PopulationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-users" />
        {isKo ? '모집단과 표본' : 'Population & Sample'}
      </h2>

      {/* What is a population? */}
      <h3>{isKo ? '모집단이란 무엇인가?' : 'What Is a Population?'}</h3>
      <p>
        {isKo
          ? '모집단(母集團, population)이란 연구자가 관심을 갖고 연구 결과를 일반화하고자 하는 전체 대상의 집합입니다. 예를 들어, "한국 대학생의 취업 스트레스"를 연구한다면 모집단은 한국의 모든 대학생이 됩니다. 모집단은 연구 문제에 따라 정의되며, 연구의 범위와 일반화 가능성을 결정짓는 핵심 개념입니다.'
          : 'A population refers to the entire set of individuals, objects, or events that a researcher is interested in studying and to which the findings are intended to be generalized. For instance, if you are researching "job-search stress among Korean university students," the population consists of every university student in Korea. The population is defined by the research question and is the foundational concept that determines the scope and generalizability of a study.'}
      </p>

      <h4>{isKo ? '목표 모집단 vs 접근 가능 모집단' : 'Target Population vs Accessible Population'}</h4>
      <p>
        {isKo
          ? '연구에서는 두 가지 수준의 모집단을 구분합니다. 목표 모집단(target population)은 연구자가 궁극적으로 결과를 일반화하고자 하는 이상적인 전체 집단입니다. 접근 가능 모집단(accessible population)은 현실적 제약(시간, 비용, 지리적 한계 등)을 고려하여 실제로 접근할 수 있는 모집단의 부분집합입니다. 예를 들어, 목표 모집단이 "한국 전체 대학생"이라 하더라도, 접근 가능 모집단은 "서울 소재 4년제 대학교 재학생"으로 제한될 수 있습니다.'
          : 'Research distinguishes between two levels of population. The target population is the ideal, complete group to which the researcher ultimately wants to generalize the findings. The accessible population is the subset of the target population that can actually be reached given practical constraints such as time, budget, and geography. For example, while the target population might be "all university students in Korea," the accessible population might be limited to "students enrolled at four-year universities in Seoul."'}
      </p>

      {/* What is a sample? */}
      <h3>{isKo ? '표본이란 무엇인가?' : 'What Is a Sample?'}</h3>
      <p>
        {isKo
          ? '표본(標本, sample)은 모집단에서 실제로 선택된 구성원들의 부분 집합입니다. 연구자는 표본을 조사하여 그 결과를 모집단 전체에 대해 추론합니다. 표본추출(sampling)이 필요한 이유는 명확합니다: 모집단 전체를 조사하는 것(전수조사, census)은 대부분의 경우 시간과 비용 측면에서 비현실적이기 때문입니다.'
          : 'A sample is a subset of members actually selected from the population. Researchers study the sample and then make inferences about the entire population based on the results. The rationale for sampling is straightforward: surveying every single member of the population (a census) is impractical in most cases due to constraints of time and cost.'}
      </p>
      <p>
        {isKo
          ? '잘 설계된 표본은 모집단의 특성을 충실히 반영합니다. 이를 대표성(representativeness)이라 하며, 표본의 대표성이 확보되어야만 연구 결과를 모집단으로 일반화할 수 있습니다. 대표성이 부족한 표본에 기반한 연구는 편향된 결론을 도출할 위험이 있습니다.'
          : 'A well-designed sample faithfully reflects the characteristics of the population. This quality is called representativeness, and only when it is achieved can findings be generalized from the sample to the population. Research based on a sample that lacks representativeness risks drawing biased conclusions.'}
      </p>

      {/* Sampling frame */}
      <h3>{isKo ? '표본틀(Sampling Frame)' : 'The Sampling Frame'}</h3>
      <p>
        {isKo
          ? '표본틀이란 모집단의 구성원 목록으로, 실제 표본을 추출하는 기초 자료가 됩니다. 예를 들어, 대학생 연구에서 표본틀은 학생 명부, 유권자 연구에서는 선거인 명부가 될 수 있습니다. 표본틀이 모집단을 완전히 포함하지 못하면 "포괄 오차(coverage error)"가 발생합니다. 이는 특정 집단이 표본에서 체계적으로 배제되는 결과를 초래할 수 있습니다.'
          : 'A sampling frame is the list of all members of the population from which the sample is actually drawn. For example, in a study of university students the sampling frame might be the enrollment roster; in a voter study it might be the electoral register. If the sampling frame does not fully cover the population, "coverage error" occurs, which can systematically exclude certain groups from the sample.'}
      </p>

      {/* Parameters vs statistics */}
      <h3>{isKo ? '모수와 통계량' : 'Parameters vs Statistics'}</h3>
      <p>
        {isKo
          ? '모수(parameter)는 모집단의 특성을 나타내는 수치(예: 모평균 \u03BC, 모표준편차 \u03C3)이며, 통계량(statistic)은 표본에서 계산된 수치(예: 표본평균 x\u0304, 표본표준편차 s)입니다. 연구의 궁극적 목적은 통계량을 통해 모수를 추정하는 것입니다. 좋은 표본추출 방법을 사용하면 통계량이 모수에 가까워질 가능성이 높아집니다.'
          : 'A parameter is a numerical characteristic of the population (e.g., population mean \u03BC, population standard deviation \u03C3), while a statistic is a numerical characteristic calculated from the sample (e.g., sample mean x\u0304, sample standard deviation s). The ultimate goal of research is to estimate parameters through statistics. Using sound sampling methods increases the likelihood that statistics will closely approximate the true parameters.'}
      </p>

      {/* Census vs sampling */}
      <h3>{isKo ? '전수조사 vs 표본조사' : 'Census vs Sampling'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '전수조사(Census)' : 'Census'}:</strong>{' '}
          {isKo
            ? '모집단의 모든 구성원을 조사합니다. 인구총조사가 대표적인 예입니다. 정확하지만 비용과 시간이 많이 소요됩니다.'
            : 'Every member of the population is surveyed. A national population census is a classic example. It is accurate but extremely expensive and time-consuming.'}
        </li>
        <li>
          <strong>{isKo ? '표본조사(Sample Survey)' : 'Sample Survey'}:</strong>{' '}
          {isKo
            ? '모집단의 일부만 조사합니다. 적절한 표본추출 방법을 사용하면 적은 비용으로도 모집단의 특성을 정확하게 추정할 수 있습니다.'
            : 'Only a portion of the population is surveyed. With appropriate sampling methods, population characteristics can be estimated accurately at a fraction of the cost.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '대부분의 사회과학 연구에서는 전수조사가 불가능하므로, 표본조사가 기본적인 연구 방법이 됩니다. 중요한 것은 표본이 모집단을 얼마나 잘 대표하느냐 입니다.'
          : 'In most social-science research a census is infeasible, making sample surveys the default methodology. The critical question is how well the sample represents the population.'}
      </p>

      <TipBox type="tip" title={isKo ? '대표성 확보의 중요성' : 'The Importance of Representative Sampling'}>
        <p>
          {isKo
            ? '표본의 크기가 아무리 크더라도 대표성이 없으면 의미 없는 결과를 얻게 됩니다. 1936년 미국 대선에서 Literary Digest 잡지는 240만 명을 대상으로 여론조사를 실시했지만, 전화번호부와 자동차 등록부에서 표본을 추출했기 때문에 부유층에 편향되어 선거 결과를 크게 잘못 예측했습니다. 반면, George Gallup은 5만 명의 대표적 표본으로 정확한 예측을 해냈습니다. 표본의 "질"이 "양"보다 중요합니다.'
            : 'No matter how large a sample is, it is meaningless without representativeness. In the 1936 U.S. presidential election, Literary Digest magazine polled 2.4 million respondents, yet predicted the outcome incorrectly because the sample was drawn from telephone directories and automobile registrations, skewing it toward wealthier citizens. In contrast, George Gallup accurately predicted the result with a representative sample of just 50,000. The "quality" of a sample matters far more than its "quantity."'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 - Probability Sampling                                  */
/* ------------------------------------------------------------------ */
function ProbabilitySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-dice" />
        {isKo ? '확률표본추출' : 'Probability Sampling'}
      </h2>

      <p>
        {isKo
          ? '확률표본추출(probability sampling)은 모집단의 각 구성원이 표본에 선택될 확률이 알려져 있고, 0보다 큰 추출 방법입니다. 이 방법을 사용하면 통계적 추론이 가능하고, 표본오차를 계산할 수 있어 연구 결과의 일반화에 대한 과학적 근거를 제공합니다.'
          : 'Probability sampling is a method in which every member of the population has a known, non-zero probability of being selected. Using this approach enables statistical inference and the calculation of sampling error, providing a scientific basis for generalizing research findings.'}
      </p>

      {/* Simple random sampling */}
      <h3>{isKo ? '1. 단순무작위표본추출 (Simple Random Sampling)' : '1. Simple Random Sampling (SRS)'}</h3>
      <p>
        {isKo
          ? '단순무작위표본추출은 가장 기본적인 확률표본추출 방법으로, 모집단의 모든 구성원이 동일한 확률로 선택됩니다. 또한 가능한 모든 표본 조합이 동일한 선택 확률을 가집니다. 이는 "공정한 추첨"과 같은 원리입니다.'
          : 'Simple random sampling (SRS) is the most fundamental probability sampling method, in which every member of the population has an equal chance of being selected and every possible sample of a given size has an equal probability of being chosen. It is analogous to a "fair lottery."'}
      </p>
      <p>
        {isKo ? '구현 방법:' : 'Implementation methods:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '난수표(Random Number Table)' : 'Random Number Table'}:</strong>{' '}
          {isKo
            ? '모집단 구성원에 번호를 부여한 후, 난수표에서 무작위로 번호를 선택합니다. 전통적이지만 대규모 연구에서는 비효율적입니다.'
            : 'Assign a number to each population member, then select numbers randomly from the table. Traditional but inefficient for large-scale research.'}
        </li>
        <li>
          <strong>{isKo ? '컴퓨터 생성 난수' : 'Computer-Generated Random Numbers'}:</strong>{' '}
          {isKo
            ? 'Excel, R, SPSS, Python 등의 소프트웨어를 사용하여 난수를 생성합니다. 현대 연구에서 가장 일반적인 방법입니다.'
            : 'Use software such as Excel, R, SPSS, or Python to generate random numbers. This is the most common method in modern research.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '장점: 편향이 없고, 통계 분석이 단순합니다. 단점: 완전한 표본틀이 필요하고, 모집단이 크면 비용이 많이 들 수 있으며, 소수 집단이 과소 대표될 수 있습니다.'
          : 'Advantages: Unbiased; statistical analysis is straightforward. Disadvantages: Requires a complete sampling frame; can be costly for large populations; minority subgroups may be underrepresented.'}
      </p>

      {/* Systematic sampling */}
      <h3>{isKo ? '2. 체계적 표본추출 (Systematic Sampling)' : '2. Systematic Sampling'}</h3>
      <p>
        {isKo
          ? '체계적 표본추출은 모집단 목록에서 일정한 간격(k번째)으로 표본을 선택하는 방법입니다. 먼저 표본추출 간격 k를 계산합니다 (k = N/n, N은 모집단 크기, n은 원하는 표본 크기). 그런 다음 1부터 k 사이에서 무작위로 시작점을 선택하고, 이후 매 k번째 요소를 선택합니다.'
          : 'Systematic sampling selects every k-th element from a population list. First, compute the sampling interval k (k = N/n, where N is the population size and n is the desired sample size). Then randomly choose a starting point between 1 and k, and select every k-th element thereafter.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, 모집단이 1,000명이고 표본 크기가 100이면, k = 10입니다. 1~10 사이에서 무작위로 시작점(예: 7)을 선택하면, 7번, 17번, 27번, 37번, ... 순으로 추출합니다.'
          : 'For example, if the population is 1,000 and the desired sample size is 100, then k = 10. If the random starting point is 7, the selected elements are 7, 17, 27, 37, and so on.'}
      </p>
      <p>
        {isKo
          ? '장점: 단순무작위표본추출보다 실행이 간편합니다. 단점: 모집단 목록에 주기적 패턴이 있으면 편향이 발생할 수 있습니다 (예: 기숙사 방 배정이 규칙적인 경우).'
          : 'Advantages: Easier to implement than SRS. Disadvantages: Can introduce bias if the population list has a periodic pattern (e.g., regularly ordered dormitory room assignments).'}
      </p>

      {/* Stratified sampling */}
      <h3>{isKo ? '3. 층화표본추출 (Stratified Sampling)' : '3. Stratified Sampling'}</h3>
      <p>
        {isKo
          ? '층화표본추출은 모집단을 동질적인 하위 집단(층, stratum)으로 나눈 후, 각 층에서 독립적으로 표본을 추출하는 방법입니다. 층화 변수는 종속변수와 관련이 있어야 효과적입니다 (예: 성별, 연령대, 지역, 소득 수준 등).'
          : 'Stratified sampling divides the population into homogeneous subgroups (strata) and then independently draws a sample from each stratum. The stratification variable should be related to the dependent variable for maximum effectiveness (e.g., gender, age group, region, income level).'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '비례층화추출 (Proportionate)' : 'Proportionate Stratified Sampling'}:</strong>{' '}
          {isKo
            ? '각 층의 표본 크기가 모집단에서 해당 층이 차지하는 비율에 비례합니다. 예: 모집단에서 여성이 60%이면 표본에서도 60%를 여성으로 구성합니다.'
            : 'The sample size from each stratum is proportional to the stratum\'s share of the total population. Example: if 60% of the population is female, 60% of the sample is drawn from the female stratum.'}
        </li>
        <li>
          <strong>{isKo ? '불비례층화추출 (Disproportionate)' : 'Disproportionate Stratified Sampling'}:</strong>{' '}
          {isKo
            ? '특정 층의 표본 비율을 의도적으로 다르게 설정합니다. 소수 집단을 충분히 분석하고 싶을 때 유용합니다. 분석 시 가중치(weight)를 적용하여 모집단 비율을 복원해야 합니다.'
            : 'The proportion of the sample drawn from certain strata is intentionally different from their population share. This is useful when researchers want sufficient data to analyze minority subgroups. Weights must be applied during analysis to restore population proportions.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '장점: 각 층에 대한 추정 정밀도가 높고, 단순무작위표본추출보다 표본오차가 작을 수 있습니다. 단점: 층화 변수에 대한 사전 정보가 필요하며, 설계와 분석이 복잡합니다.'
          : 'Advantages: Higher precision for estimates within each stratum; potentially smaller sampling error than SRS. Disadvantages: Requires prior information about stratification variables; design and analysis are more complex.'}
      </p>

      {/* Cluster sampling */}
      <h3>{isKo ? '4. 군집표본추출 (Cluster Sampling)' : '4. Cluster Sampling'}</h3>
      <p>
        {isKo
          ? '군집표본추출은 모집단을 자연적으로 존재하는 집단(군집, cluster)으로 나눈 후, 군집 단위로 무작위 선택하는 방법입니다. 층화추출과 달리, 군집 내부는 이질적(다양)이고 군집 간에는 동질적인 것이 이상적입니다.'
          : 'Cluster sampling divides the population into naturally occurring groups (clusters) and then randomly selects entire clusters. Unlike stratified sampling, the ideal is for clusters to be internally heterogeneous (diverse) and for clusters to be homogeneous relative to each other.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '1단계 군집추출 (Single-stage)' : 'Single-Stage Cluster Sampling'}:</strong>{' '}
          {isKo
            ? '선택된 군집의 모든 구성원을 조사합니다. 예: 학교 10곳을 무작위로 선택한 후 해당 학교의 모든 학생을 조사합니다.'
            : 'All members of the selected clusters are surveyed. Example: Randomly select 10 schools, then survey every student in those schools.'}
        </li>
        <li>
          <strong>{isKo ? '다단계 군집추출 (Multi-stage)' : 'Multi-Stage Cluster Sampling'}:</strong>{' '}
          {isKo
            ? '여러 단계에 걸쳐 추출합니다. 예: 1단계에서 시/도를 선택, 2단계에서 구/군을 선택, 3단계에서 개인을 선택합니다. 전국 규모 조사에서 흔히 사용됩니다.'
            : 'Sampling occurs in multiple stages. Example: Stage 1 selects provinces, Stage 2 selects districts within them, Stage 3 selects individuals. Commonly used in nationwide surveys.'}
        </li>
      </ul>
      <p>
        {isKo
          ? '장점: 표본틀이 완전하지 않아도 사용할 수 있고, 지리적으로 분산된 모집단에 경제적입니다. 단점: 단순무작위표본추출보다 표본오차가 크며, 설계 효과(design effect)를 고려해야 합니다.'
          : 'Advantages: Can be used even without a complete sampling frame; economical for geographically dispersed populations. Disadvantages: Larger sampling error than SRS; the design effect must be taken into account.'}
      </p>

      <TipBox type="tip" title={isKo ? '어떤 방법을 선택할까?' : 'Which Method Should You Choose?'}>
        <ul>
          <li>
            {isKo
              ? '모집단 목록이 완전하고, 모집단이 크지 않다면 → 단순무작위추출'
              : 'Complete sampling frame and a manageable population size --> Simple random sampling'}
          </li>
          <li>
            {isKo
              ? '모집단 목록이 있고 빠른 추출이 필요하다면 → 체계적 추출'
              : 'Sampling frame available and speed is needed --> Systematic sampling'}
          </li>
          <li>
            {isKo
              ? '모집단 내 하위 집단 간 차이가 크다면 → 층화추출'
              : 'Substantial differences between subgroups --> Stratified sampling'}
          </li>
          <li>
            {isKo
              ? '모집단이 지리적으로 넓게 분포되어 있다면 → 군집추출'
              : 'Geographically dispersed population --> Cluster sampling'}
          </li>
          <li>
            {isKo
              ? '실제 연구에서는 이러한 방법들을 조합하여 사용하는 경우가 많습니다 (예: 층화군집추출).'
              : 'In practice, these methods are often combined (e.g., stratified cluster sampling).'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 - Non-probability Sampling                              */
/* ------------------------------------------------------------------ */
function NonProbabilitySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-hand-pointer" />
        {isKo ? '비확률표본추출' : 'Non-probability Sampling'}
      </h2>

      <p>
        {isKo
          ? '비확률표본추출(non-probability sampling)은 모집단의 각 구성원이 선택될 확률을 알 수 없는 추출 방법입니다. 확률표본추출에 비해 편리하고 비용이 적게 들지만, 통계적 추론의 근거가 약해지며, 표본오차를 정확히 계산할 수 없습니다. 그럼에도 탐색적 연구, 질적 연구, 또는 확률추출이 현실적으로 불가능한 상황에서 광범위하게 사용됩니다.'
          : 'Non-probability sampling is a method in which the probability of each population member being selected is unknown. While it is more convenient and less costly than probability sampling, it weakens the basis for statistical inference and makes it impossible to calculate sampling error precisely. Nevertheless, it is widely used in exploratory research, qualitative research, or situations where probability sampling is practically impossible.'}
      </p>

      {/* Convenience sampling */}
      <h3>{isKo ? '1. 편의표본추출 (Convenience Sampling)' : '1. Convenience Sampling'}</h3>
      <p>
        {isKo
          ? '편의표본추출은 연구자가 접근하기 쉬운 대상을 표본으로 선택하는 방법입니다. 예를 들어, 캠퍼스에서 지나가는 학생에게 설문지를 배포하거나, 온라인 커뮤니티에 설문 링크를 게시하는 것이 이에 해당합니다. 가장 간편하고 비용이 적게 들지만, 선택 편향(selection bias)이 매우 클 수 있습니다.'
          : 'Convenience sampling selects participants who are easiest for the researcher to access. For example, distributing questionnaires to students passing by on campus or posting a survey link in an online community. It is the simplest and cheapest method, but selection bias can be very large.'}
      </p>
      <p>
        {isKo
          ? '편의표본추출은 예비조사(pilot study)나 탐색적 연구에서 흔히 사용됩니다. 그러나 연구 결과를 모집단에 일반화하기 어렵기 때문에, 학술 논문에서는 이 방법의 한계를 반드시 명시해야 합니다.'
          : 'Convenience sampling is commonly used in pilot studies and exploratory research. However, because findings are difficult to generalize to the population, academic papers must clearly state the limitations of this method.'}
      </p>

      {/* Purposive sampling */}
      <h3>{isKo ? '2. 판단표본추출 (Purposive / Judgmental Sampling)' : '2. Purposive / Judgmental Sampling'}</h3>
      <p>
        {isKo
          ? '판단표본추출은 연구자의 전문적 판단에 따라 연구 목적에 적합한 대상을 의도적으로 선택하는 방법입니다. 질적 연구에서 특히 많이 사용되며, 특정 현상을 깊이 있게 이해하기 위해 정보가 풍부한 사례(information-rich cases)를 선택합니다.'
          : 'Purposive (or judgmental) sampling deliberately selects participants based on the researcher\'s expert judgment about who will best serve the research objectives. It is especially common in qualitative research, where information-rich cases are chosen to gain a deep understanding of a specific phenomenon.'}
      </p>
      <p>
        {isKo
          ? '하위 유형으로는 극단적/일탈적 사례 추출, 전형적 사례 추출, 최대 변이 추출, 동질적 추출 등이 있습니다. 연구자의 편견이 개입될 수 있다는 것이 주요 한계입니다.'
          : 'Sub-types include extreme/deviant case sampling, typical case sampling, maximum variation sampling, and homogeneous sampling. The main limitation is that researcher bias may influence participant selection.'}
      </p>

      {/* Quota sampling */}
      <h3>{isKo ? '3. 할당표본추출 (Quota Sampling)' : '3. Quota Sampling'}</h3>
      <p>
        {isKo
          ? '할당표본추출은 모집단의 특성(성별, 연령, 직업 등)에 따라 하위 집단별 할당량을 정한 후, 각 할당량을 편의표본추출로 채우는 방법입니다. 층화추출과 유사하게 보이지만, 각 층 내에서의 추출이 무작위가 아니라는 점에서 근본적으로 다릅니다.'
          : 'Quota sampling sets quotas for subgroups based on population characteristics (gender, age, occupation, etc.) and then fills each quota using convenience sampling. It resembles stratified sampling in appearance, but differs fundamentally because selection within each stratum is not random.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, 남성 50명, 여성 50명을 할당한 후, 조사원이 각각의 할당량을 채울 때까지 편의적으로 응답자를 모집합니다. 시장조사에서 많이 사용되며, 비용 효율적이지만 할당 기준 외의 변수에서 편향이 발생할 수 있습니다.'
          : 'For example, after setting a quota of 50 males and 50 females, the interviewer recruits respondents conveniently until each quota is filled. It is widely used in market research and is cost-effective, but bias can arise in variables other than the quota criteria.'}
      </p>

      {/* Snowball sampling */}
      <h3>{isKo ? '4. 눈덩이표본추출 (Snowball Sampling)' : '4. Snowball Sampling'}</h3>
      <p>
        {isKo
          ? '눈덩이표본추출(또는 연쇄추천표본추출)은 초기 참여자가 다른 잠재적 참여자를 소개하는 방식으로 표본을 확대해 나가는 방법입니다. 접근하기 어려운 모집단(hidden population)을 연구할 때 특히 유용합니다.'
          : 'Snowball sampling (also called chain-referral sampling) expands the sample by having initial participants refer other potential participants. It is particularly useful when studying hard-to-reach or hidden populations.'}
      </p>
      <p>
        {isKo
          ? '예를 들어, 불법 이민자, 약물 사용자, 특정 희귀 질환 환자 등 공식적인 명부가 존재하지 않는 집단에 접근할 때 사용합니다. 초기 참여자의 사회적 네트워크에 의존하기 때문에, 유사한 특성을 가진 사람들이 과대 대표될 수 있습니다.'
          : 'For example, it is used to reach groups without official registers, such as undocumented immigrants, drug users, or patients with rare diseases. Because it relies on the social networks of initial participants, people with similar characteristics may be over-represented.'}
      </p>

      {/* When appropriate */}
      <h3>{isKo ? '비확률표본추출이 적절한 경우' : 'When Non-probability Sampling Is Appropriate'}</h3>
      <ul>
        <li>{isKo ? '탐색적 연구나 예비조사 단계' : 'Exploratory research or pilot study phases'}</li>
        <li>{isKo ? '모집단의 명확한 표본틀이 존재하지 않을 때' : 'When no clear sampling frame for the population exists'}</li>
        <li>{isKo ? '접근이 어려운 은닉 모집단(hidden population)을 연구할 때' : 'When studying hard-to-reach hidden populations'}</li>
        <li>{isKo ? '질적 연구에서 깊이 있는 이해를 위해 사례를 선택할 때' : 'When selecting cases for in-depth understanding in qualitative research'}</li>
        <li>{isKo ? '시간과 예산이 극히 제한적일 때' : 'When time and budget are extremely limited'}</li>
        <li>{isKo ? '연구의 목적이 일반화가 아니라 특정 현상의 탐구일 때' : 'When the research goal is exploration of a phenomenon rather than generalization'}</li>
      </ul>

      <TipBox type="warning" title={isKo ? '비확률표본추출의 한계와 편향' : 'Limitations and Biases of Non-probability Sampling'}>
        <p>
          {isKo
            ? '비확률표본추출을 사용할 때는 다음 사항을 반드시 인지해야 합니다: (1) 표본오차를 정확히 계산할 수 없으므로 신뢰구간 설정이 제한됩니다. (2) 선택 편향(selection bias)이 발생할 가능성이 높습니다. (3) 연구 결과의 외적 타당도(external validity)가 낮아질 수 있습니다. (4) 학술 논문에서는 비확률표본추출을 사용한 이유와 그 한계를 명확히 기술해야 합니다. 특히, 편의표본을 사용하면서 "무작위 표본"이라고 기술하는 것은 학술적 윤리 위반에 해당합니다.'
            : 'When using non-probability sampling, you must be aware of the following: (1) Sampling error cannot be calculated precisely, so constructing confidence intervals is limited. (2) Selection bias is highly likely. (3) The external validity of findings may be reduced. (4) Academic papers must clearly state the rationale for using non-probability sampling and its limitations. In particular, describing a convenience sample as a "random sample" constitutes a violation of academic ethics.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 - Determining Sample Size                               */
/* ------------------------------------------------------------------ */
function SampleSizeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-calculator" />
        {isKo ? '표본크기 결정' : 'Determining Sample Size'}
      </h2>

      <p>
        {isKo
          ? '표본크기(sample size)는 연구의 정밀도와 통계적 검정력에 직접적인 영향을 미칩니다. 표본이 너무 작으면 의미 있는 차이를 탐지하지 못하고, 너무 크면 불필요한 비용이 발생합니다. 적절한 표본크기를 결정하는 것은 연구 설계의 핵심 단계 중 하나입니다.'
          : 'Sample size directly affects the precision of a study and its statistical power. If the sample is too small, meaningful differences will go undetected; if too large, unnecessary costs are incurred. Determining the appropriate sample size is one of the key steps in research design.'}
      </p>

      {/* Factors */}
      <h3>{isKo ? '표본크기에 영향을 미치는 요인' : 'Factors Affecting Sample Size'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '신뢰수준 (Confidence Level)' : 'Confidence Level'}:</strong>{' '}
          {isKo
            ? '일반적으로 95% 또는 99%를 사용합니다. 신뢰수준이 높을수록 더 큰 표본이 필요합니다. 95% 신뢰수준에서 Z = 1.96, 99%에서 Z = 2.576입니다.'
            : 'Typically 95% or 99%. A higher confidence level requires a larger sample. At 95%, Z = 1.96; at 99%, Z = 2.576.'}
        </li>
        <li>
          <strong>{isKo ? '허용 오차 (Margin of Error)' : 'Margin of Error'}:</strong>{' '}
          {isKo
            ? '연구자가 허용할 수 있는 표본오차의 최대 범위입니다. 허용 오차가 작을수록 더 큰 표본이 필요합니다. 사회과학에서는 일반적으로 +-3%~+-5%를 사용합니다.'
            : 'The maximum range of sampling error the researcher is willing to accept. A smaller margin of error requires a larger sample. In social sciences, +-3% to +-5% is common.'}
        </li>
        <li>
          <strong>{isKo ? '모집단 변동성 (Population Variability)' : 'Population Variability'}:</strong>{' '}
          {isKo
            ? '모집단 내 응답이 다양할수록(분산이 클수록) 더 큰 표본이 필요합니다. 비율 추정에서 변동성이 최대인 경우는 p = 0.5일 때입니다.'
            : 'The more diverse the responses within the population (larger variance), the larger the sample needed. For proportion estimation, variability is maximized when p = 0.5.'}
        </li>
      </ul>

      {/* Formulas */}
      <h3>{isKo ? '표본크기 공식' : 'Sample Size Formulas'}</h3>
      <h4>{isKo ? '비율 추정을 위한 공식' : 'Formula for Estimating Proportions'}</h4>
      <div className="guide-formula">
        <code>n = Z{'\u00B2'} * p(1-p) / e{'\u00B2'}</code>
      </div>
      <p>
        {isKo
          ? '여기서 n은 표본크기, Z는 신뢰수준에 해당하는 Z값, p는 예상 비율(모르면 0.5 사용), e는 허용 오차입니다. 예를 들어, 95% 신뢰수준(Z=1.96), 예상 비율 50%(p=0.5), 허용 오차 5%(e=0.05)이면: n = 1.96\u00B2 \u00D7 0.5 \u00D7 0.5 / 0.05\u00B2 = 384.16 \u2248 385명이 필요합니다.'
          : 'Where n is the sample size, Z is the Z-value for the desired confidence level, p is the expected proportion (use 0.5 if unknown), and e is the margin of error. For example, at 95% confidence (Z=1.96), expected proportion 50% (p=0.5), margin of error 5% (e=0.05): n = 1.96\u00B2 \u00D7 0.5 \u00D7 0.5 / 0.05\u00B2 = 384.16 \u2248 385 participants are needed.'}
      </p>

      <h4>{isKo ? '평균 추정을 위한 공식' : 'Formula for Estimating Means'}</h4>
      <div className="guide-formula">
        <code>n = Z{'\u00B2'} * {'\u03C3\u00B2'} / e{'\u00B2'}</code>
      </div>
      <p>
        {isKo
          ? '여기서 \u03C3는 모집단 표준편차(선행연구나 예비조사에서 추정), e는 허용 오차(원래 측정 단위)입니다.'
          : 'Where \u03C3 is the population standard deviation (estimated from prior studies or a pilot), and e is the margin of error (in the original unit of measurement).'}
      </p>

      {/* Finite population correction */}
      <h3>{isKo ? '유한 모집단 보정 (Finite Population Correction)' : 'Finite Population Correction'}</h3>
      <p>
        {isKo
          ? '모집단의 크기(N)가 유한하고, 표본이 모집단의 상당 부분(일반적으로 5% 이상)을 차지하는 경우, 유한 모집단 보정(FPC)을 적용하여 필요한 표본크기를 줄일 수 있습니다.'
          : 'When the population size (N) is finite and the sample constitutes a substantial portion of the population (typically 5% or more), the finite population correction (FPC) can be applied to reduce the required sample size.'}
      </p>
      <div className="guide-formula">
        <code>n_adj = n / (1 + (n - 1) / N)</code>
      </div>
      <p>
        {isKo
          ? '예를 들어, 계산된 표본크기가 384명이고 모집단이 2,000명이면: n_adj = 384 / (1 + 383/2000) = 384 / 1.1915 \u2248 322명으로 줄어듭니다.'
          : 'For example, if the calculated sample size is 384 and the population is 2,000: n_adj = 384 / (1 + 383/2000) = 384 / 1.1915 \u2248 322, reducing the required sample.'}
      </p>

      {/* Effect size and power */}
      <h3>{isKo ? '효과크기와 통계적 검정력' : 'Effect Size and Statistical Power'}</h3>
      <p>
        {isKo
          ? '가설검정을 위한 표본크기 결정에는 효과크기(effect size)와 통계적 검정력(statistical power)이 핵심 요소입니다. 효과크기는 연구에서 탐지하고자 하는 차이의 크기를 나타내며, 통계적 검정력은 실제 효과가 존재할 때 이를 탐지할 확률입니다(일반적으로 0.80 이상을 목표).'
          : 'For hypothesis testing, effect size and statistical power are key factors in determining sample size. Effect size indicates the magnitude of the difference the study aims to detect, while statistical power is the probability of detecting a real effect when one exists (typically targeting 0.80 or higher).'}
      </p>
      <p>
        {isKo
          ? 'G*Power와 같은 소프트웨어를 사용하면 검정 유형, 효과크기, 유의수준, 검정력을 입력하여 필요한 표본크기를 계산할 수 있습니다. Cohen(1988)의 기준에 따르면, 소효과(d=0.2), 중효과(d=0.5), 대효과(d=0.8)로 구분합니다.'
          : 'Software such as G*Power allows you to enter the test type, effect size, significance level, and desired power to calculate the required sample size. According to Cohen\'s (1988) conventions, effect sizes are classified as small (d = 0.2), medium (d = 0.5), and large (d = 0.8).'}
      </p>

      {/* Rules of thumb */}
      <h3>{isKo ? '연구 유형별 경험적 기준' : 'Rules of Thumb by Research Type'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '설문조사' : 'Survey Research'}:</strong>{' '}
          {isKo ? '최소 200~400명, 하위 집단 분석 시 각 집단당 최소 30명' : 'Minimum 200-400; at least 30 per subgroup for subgroup analysis'}
        </li>
        <li>
          <strong>{isKo ? '실험연구' : 'Experimental Research'}:</strong>{' '}
          {isKo ? '집단당 최소 15~30명 (중간 효과크기 기준)' : 'Minimum 15-30 per group (for medium effect sizes)'}
        </li>
        <li>
          <strong>{isKo ? '상관/회귀 분석' : 'Correlation / Regression'}:</strong>{' '}
          {isKo ? '독립변수당 최소 10~20명, 또는 최소 50+8k명 (k=독립변수 수, Tabachnick & Fidell 기준)' : 'Minimum 10-20 per predictor, or at least 50 + 8k (k = number of predictors, per Tabachnick & Fidell)'}
        </li>
        <li>
          <strong>{isKo ? '구조방정식(SEM)' : 'Structural Equation Modeling (SEM)'}:</strong>{' '}
          {isKo ? '최소 200명, 추정 모수당 10~20명' : 'Minimum 200; 10-20 cases per estimated parameter'}
        </li>
        <li>
          <strong>{isKo ? '요인분석' : 'Factor Analysis'}:</strong>{' '}
          {isKo ? '최소 300명 또는 변수당 5~10명' : 'Minimum 300, or 5-10 cases per variable'}
        </li>
        <li>
          <strong>{isKo ? '질적 연구' : 'Qualitative Research'}:</strong>{' '}
          {isKo ? '이론적 포화(theoretical saturation)에 도달할 때까지, 일반적으로 10~30명' : 'Until theoretical saturation is reached, typically 10-30 participants'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '실무적 고려사항' : 'Practical Considerations'}>
        <p>
          {isKo
            ? '공식으로 계산된 표본크기에 무응답률(non-response rate)을 반영하여 실제 배포 수를 늘려야 합니다. 예를 들어, 예상 무응답률이 30%라면, 필요한 표본크기를 0.7로 나누어 배포 수를 결정합니다 (385 / 0.7 \u2248 550부 배포). 또한 불성실 응답 제거 가능성도 고려하여 여유 있게 계획하는 것이 좋습니다. 연구 계획서에는 표본크기 결정의 근거(사용한 공식, 매개변수 값, 참고 문헌)를 명확히 기술해야 합니다.'
            : 'You must account for the expected non-response rate when determining the actual number of surveys to distribute. For example, if the anticipated non-response rate is 30%, divide the required sample size by 0.7 (385 / 0.7 \u2248 550 surveys distributed). Also plan extra for the possibility of removing careless responses. The research proposal should clearly document the rationale for the sample size (formula used, parameter values, references).'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 - Sampling Error & Confidence Intervals                 */
/* ------------------------------------------------------------------ */
function ErrorSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-exclamation-triangle" />
        {isKo ? '표본오차와 신뢰구간' : 'Sampling Error & Confidence Intervals'}
      </h2>

      {/* Sampling error vs non-sampling error */}
      <h3>{isKo ? '표본오차 vs 비표본오차' : 'Sampling Error vs Non-sampling Error'}</h3>
      <p>
        {isKo
          ? '표본오차(sampling error)는 모집단 전체가 아닌 일부(표본)만을 조사하기 때문에 발생하는 불가피한 오차입니다. 표본의 통계량(예: 표본평균)이 모집단의 모수(예: 모평균)와 다를 수밖에 없는데, 이 차이가 표본오차입니다. 표본크기를 늘리면 표본오차는 감소합니다.'
          : 'Sampling error is the unavoidable discrepancy that arises because only a portion (sample) of the population is surveyed rather than the entire population. The sample statistic (e.g., sample mean) inevitably differs from the population parameter (e.g., population mean), and this difference is the sampling error. Increasing the sample size reduces sampling error.'}
      </p>
      <p>
        {isKo
          ? '비표본오차(non-sampling error)는 표본추출 자체와 무관하게 발생하는 오차로, 전수조사에서도 발생할 수 있습니다. 측정 오류, 무응답 편향, 응답 편향(사회적 바람직성), 면접자 효과, 데이터 입력 오류 등이 포함됩니다. 비표본오차는 표본크기를 늘려도 줄어들지 않으며, 연구 설계와 실행 과정의 질적 관리를 통해 최소화해야 합니다.'
          : 'Non-sampling error occurs independently of the sampling process and can arise even in a census. It includes measurement error, non-response bias, response bias (social desirability), interviewer effects, and data-entry mistakes. Unlike sampling error, non-sampling error is not reduced by increasing sample size; it must be minimized through careful research design and quality control during data collection.'}
      </p>

      {/* Standard error */}
      <h3>{isKo ? '표준오차 (Standard Error)' : 'The Standard Error'}</h3>
      <p>
        {isKo
          ? '표준오차(SE)는 통계량의 표본분포(sampling distribution)의 표준편차입니다. 즉, 동일한 모집단에서 같은 크기의 표본을 반복 추출할 때, 표본 통계량이 얼마나 변동하는지를 나타냅니다. 표본평균의 표준오차는 다음과 같이 계산합니다:'
          : 'The standard error (SE) is the standard deviation of the sampling distribution of a statistic. In other words, it indicates how much the sample statistic would vary if samples of the same size were repeatedly drawn from the same population. The standard error of the sample mean is calculated as:'}
      </p>
      <div className="guide-formula">
        <code>SE = s / {'\u221A'}n</code>
      </div>
      <p>
        {isKo
          ? '여기서 s는 표본표준편차, n은 표본크기입니다. 표본크기가 커질수록 표준오차는 작아지며, 이는 추정의 정밀도가 높아짐을 의미합니다. 그러나 표준오차는 \u221An에 비례하여 감소하므로, 정밀도를 두 배로 높이려면 표본크기를 네 배로 늘려야 합니다.'
          : 'Where s is the sample standard deviation and n is the sample size. As the sample size increases, the standard error decreases, meaning the estimate becomes more precise. However, SE decreases proportionally to \u221An, so doubling precision requires quadrupling the sample size.'}
      </p>

      {/* Confidence intervals */}
      <h3>{isKo ? '신뢰구간 (Confidence Interval)' : 'Confidence Interval Construction'}</h3>
      <p>
        {isKo
          ? '신뢰구간은 모수가 포함될 것으로 기대되는 값의 범위를 나타냅니다. 95% 신뢰구간이란, 동일한 방법으로 100번 표본을 추출하여 신뢰구간을 구성하면 그 중 약 95개의 구간이 실제 모수를 포함한다는 의미입니다.'
          : 'A confidence interval represents the range of values within which the population parameter is expected to fall. A 95% confidence interval means that if we were to draw 100 samples using the same method and construct a confidence interval from each, approximately 95 of those intervals would contain the true parameter.'}
      </p>
      <div className="guide-formula">
        <code>{isKo ? '신뢰구간' : 'CI'} = x{'\u0304'} {'\u00B1'} Z * (s / {'\u221A'}n)</code>
      </div>
      <p>
        {isKo ? '주요 신뢰수준별 Z값:' : 'Z-values for common confidence levels:'}
      </p>
      <ul>
        <li><strong>90% {isKo ? '신뢰수준' : 'confidence'}:</strong> Z = 1.645</li>
        <li><strong>95% {isKo ? '신뢰수준' : 'confidence'}:</strong> Z = 1.960</li>
        <li><strong>99% {isKo ? '신뢰수준' : 'confidence'}:</strong> Z = 2.576</li>
      </ul>
      <p>
        {isKo
          ? '예를 들어, 표본평균이 72점, 표본표준편차가 10점, 표본크기가 100명일 때 95% 신뢰구간은: 72 \u00B1 1.96 \u00D7 (10/\u221A100) = 72 \u00B1 1.96 = [70.04, 73.96]입니다. 즉, 모평균이 70.04점에서 73.96점 사이에 있을 것으로 95% 신뢰합니다.'
          : 'For example, if the sample mean is 72, sample standard deviation is 10, and sample size is 100, the 95% CI is: 72 \u00B1 1.96 \u00D7 (10/\u221A100) = 72 \u00B1 1.96 = [70.04, 73.96]. We are 95% confident that the population mean lies between 70.04 and 73.96.'}
      </p>

      {/* Margin of error */}
      <h3>{isKo ? '오차한계 (Margin of Error)' : 'Margin of Error Interpretation'}</h3>
      <p>
        {isKo
          ? '오차한계(margin of error, MOE)는 신뢰구간의 반폭(half-width)으로, MOE = Z \u00D7 SE로 계산됩니다. 여론조사에서 흔히 "오차범위 \u00B13.1%포인트 (95% 신뢰수준)"와 같이 보고됩니다. 이는 조사 결과에 \u00B13.1%포인트의 불확실성이 있다는 의미입니다.'
          : 'The margin of error (MOE) is the half-width of the confidence interval, calculated as MOE = Z \u00D7 SE. In opinion polls it is commonly reported as "margin of error \u00B13.1 percentage points (95% confidence level)." This indicates that the survey result has an uncertainty of \u00B13.1 percentage points.'}
      </p>

      {/* Central limit theorem */}
      <h3>{isKo ? '중심극한정리 (Central Limit Theorem)' : 'Central Limit Theorem Basics'}</h3>
      <p>
        {isKo
          ? '중심극한정리(CLT)는 표본추출과 통계적 추론의 이론적 기초입니다. 이 정리에 따르면, 모집단의 분포 형태에 관계없이, 표본크기가 충분히 크면(일반적으로 n \u2265 30) 표본평균의 분포는 정규분포에 근사합니다. 이 원리 덕분에 모집단이 정규분포가 아니더라도 표본평균을 이용한 신뢰구간 구성과 가설검정이 가능합니다.'
          : 'The Central Limit Theorem (CLT) is the theoretical foundation of sampling and statistical inference. It states that regardless of the shape of the population distribution, if the sample size is sufficiently large (generally n \u2265 30), the distribution of sample means approximates a normal distribution. Thanks to this principle, confidence intervals and hypothesis tests based on sample means are valid even when the population is not normally distributed.'}
      </p>
      <p>
        {isKo
          ? '중심극한정리의 핵심 의미는 다음과 같습니다: (1) 표본평균의 기대값은 모평균과 같습니다. (2) 표본평균의 표준편차(표준오차)는 \u03C3/\u221An입니다. (3) 표본이 클수록 표본평균의 분포는 더 정규분포에 가까워집니다.'
          : 'The key implications of the CLT are: (1) The expected value of the sample mean equals the population mean. (2) The standard deviation of the sample mean (standard error) is \u03C3/\u221An. (3) The larger the sample, the more closely the distribution of sample means approximates a normal distribution.'}
      </p>

      <TipBox type="important" title={isKo ? '흔한 오해들' : 'Common Misinterpretations'}>
        <ul>
          <li>
            <strong>{isKo ? '오해 1' : 'Misconception 1'}:</strong>{' '}
            {isKo
              ? '"95% 신뢰구간은 모수가 이 구간에 있을 확률이 95%이다." \u2192 틀린 해석입니다. 모수는 고정된 값이므로 확률의 대상이 아닙니다. 올바른 해석: 이 방법으로 반복 추출하면 구성된 구간의 95%가 모수를 포함합니다.'
              : '"A 95% CI means there is a 95% probability the parameter lies within this interval." --> Incorrect. The parameter is a fixed value; it is not subject to probability. Correct interpretation: If we repeat the sampling method, 95% of the constructed intervals will contain the parameter.'}
          </li>
          <li>
            <strong>{isKo ? '오해 2' : 'Misconception 2'}:</strong>{' '}
            {isKo
              ? '"표본크기가 크면 비표본오차도 줄어든다." \u2192 틀린 생각입니다. 비표본오차(측정 오류, 무응답 편향 등)는 표본크기와 무관하며, 오히려 대규모 조사에서 관리가 어려워져 증가할 수 있습니다.'
              : '"A larger sample size also reduces non-sampling error." --> Incorrect. Non-sampling error (measurement error, non-response bias, etc.) is independent of sample size and may actually increase in large surveys due to management difficulties.'}
          </li>
          <li>
            <strong>{isKo ? '오해 3' : 'Misconception 3'}:</strong>{' '}
            {isKo
              ? '"오차한계 \u00B13%는 결과가 정확히 3% 이내로 맞다는 뜻이다." \u2192 오차한계는 확률적 개념이며, 신뢰수준과 함께 해석해야 합니다. 95% 신뢰수준에서 \u00B13%라는 것은, 이 방법으로 조사를 반복하면 95%의 경우 결과가 실제 값의 \u00B13% 이내에 들어온다는 의미입니다.'
              : '"A margin of error of \u00B13% means the result is accurate to within exactly 3%." --> The margin of error is a probabilistic concept and must be interpreted alongside the confidence level. At 95% confidence, \u00B13% means that in 95% of repeated surveys using this method, the result will fall within \u00B13% of the true value.'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 - Sampling in Practice                                  */
/* ------------------------------------------------------------------ */
function PracticeSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2 className="guide-section-title">
        <i className="fa-solid fa-clipboard-check" />
        {isKo ? '표본추출 실전' : 'Sampling in Practice'}
      </h2>

      <p>
        {isKo
          ? '이론적 지식을 실제 연구에 적용하는 것은 별도의 역량을 요구합니다. 현실 세계에서는 완벽한 표본틀, 충분한 예산, 높은 응답률을 동시에 확보하기 어려운 경우가 대부분입니다. 이 섹션에서는 실제 연구에서 표본추출을 수행할 때 필요한 절차와 실무적 고려사항을 다룹니다.'
          : 'Applying theoretical knowledge to actual research requires a distinct set of skills. In the real world, it is rarely possible to simultaneously secure a perfect sampling frame, sufficient budget, and high response rates. This section covers the procedures and practical considerations needed when conducting sampling in actual research.'}
      </p>

      {/* Step-by-step procedure */}
      <h3>{isKo ? '표본추출 절차' : 'Step-by-step Sampling Procedure'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '모집단 정의' : 'Define the Population'}:</strong>{' '}
          {isKo
            ? '연구 문제에 기반하여 목표 모집단과 접근 가능 모집단을 명확히 정의합니다. 포함/배제 기준을 구체적으로 설정합니다.'
            : 'Based on the research question, clearly define the target and accessible populations. Establish specific inclusion and exclusion criteria.'}
        </li>
        <li>
          <strong>{isKo ? '표본틀 확보' : 'Obtain the Sampling Frame'}:</strong>{' '}
          {isKo
            ? '가능한 한 완전하고 최신의 모집단 목록을 확보합니다. 표본틀의 포괄성과 정확성을 평가합니다.'
            : 'Obtain as complete and current a list of the population as possible. Evaluate the comprehensiveness and accuracy of the frame.'}
        </li>
        <li>
          <strong>{isKo ? '표본추출 방법 선택' : 'Select the Sampling Method'}:</strong>{' '}
          {isKo
            ? '연구 목적, 모집단 특성, 가용 자원을 고려하여 적절한 추출 방법을 선택합니다.'
            : 'Choose the appropriate sampling method considering research objectives, population characteristics, and available resources.'}
        </li>
        <li>
          <strong>{isKo ? '표본크기 결정' : 'Determine Sample Size'}:</strong>{' '}
          {isKo
            ? '통계적 공식이나 검정력 분석을 사용하여 적정 표본크기를 산출하고, 무응답률을 감안하여 조정합니다.'
            : 'Calculate the appropriate sample size using statistical formulas or power analysis, then adjust for anticipated non-response.'}
        </li>
        <li>
          <strong>{isKo ? '표본추출 실행' : 'Execute the Sampling'}:</strong>{' '}
          {isKo
            ? '선택된 방법에 따라 실제로 표본을 추출합니다. 추출 과정을 문서화합니다.'
            : 'Actually draw the sample according to the chosen method. Document the sampling process.'}
        </li>
        <li>
          <strong>{isKo ? '표본 평가' : 'Evaluate the Sample'}:</strong>{' '}
          {isKo
            ? '추출된 표본이 모집단을 잘 대표하는지 인구통계학적 특성을 비교하여 확인합니다.'
            : 'Verify that the drawn sample represents the population well by comparing demographic characteristics.'}
        </li>
      </ol>

      {/* Common mistakes */}
      <h3>{isKo ? '표본추출에서 흔한 실수' : 'Common Mistakes in Sampling'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '불완전한 표본틀 사용' : 'Using an Incomplete Sampling Frame'}:</strong>{' '}
          {isKo
            ? '표본틀이 모집단을 완전히 포괄하지 못하면 포괄 오차가 발생합니다. 예: 전화번호부만 사용하면 전화가 없는 가구가 배제됩니다.'
            : 'When the sampling frame does not fully cover the population, coverage error occurs. Example: Using only a phone directory excludes households without phones.'}
        </li>
        <li>
          <strong>{isKo ? '자원봉사자 편향' : 'Volunteer Bias'}:</strong>{' '}
          {isKo
            ? '자발적 참여자는 비참여자와 체계적으로 다를 수 있습니다. 자발적 응답은 더 강한 의견을 가진 사람에게 편향될 가능성이 높습니다.'
            : 'Volunteers may differ systematically from non-volunteers. Voluntary responses tend to be biased toward people with stronger opinions.'}
        </li>
        <li>
          <strong>{isKo ? '표본크기 부족' : 'Insufficient Sample Size'}:</strong>{' '}
          {isKo
            ? '통계적 검정력이 낮아 실제 존재하는 효과를 탐지하지 못합니다 (제2종 오류 증가).'
            : 'Low statistical power means real effects go undetected (increased Type II error).'}
        </li>
        <li>
          <strong>{isKo ? '편의표본을 무작위표본으로 오인' : 'Treating a Convenience Sample as Random'}:</strong>{' '}
          {isKo
            ? '연구 방법 기술에서 편의표본을 "무작위"로 잘못 표기하는 것은 심각한 오류입니다.'
            : 'Mislabeling a convenience sample as "random" in the methods section is a serious error.'}
        </li>
        <li>
          <strong>{isKo ? '과도한 일반화' : 'Over-generalization'}:</strong>{' '}
          {isKo
            ? '특정 집단(예: 대학생)에서 얻은 결과를 전체 모집단으로 무리하게 일반화하는 것은 위험합니다.'
            : 'It is risky to generalize findings obtained from a specific group (e.g., university students) to the entire population without justification.'}
        </li>
      </ul>

      {/* Dealing with non-response */}
      <h3>{isKo ? '무응답 처리' : 'Dealing with Non-response'}</h3>
      <p>
        {isKo
          ? '무응답(non-response)은 거의 모든 조사연구에서 발생하며, 무응답자가 응답자와 체계적으로 다를 때 편향이 발생합니다. 무응답률이 높을수록 결과의 신뢰성이 떨어집니다.'
          : 'Non-response occurs in nearly every survey study, and bias arises when non-respondents differ systematically from respondents. Higher non-response rates diminish the reliability of results.'}
      </p>
      <p>{isKo ? '무응답을 줄이기 위한 전략:' : 'Strategies to reduce non-response:'}</p>
      <ul>
        <li>{isKo ? '사전 통지서 발송 (advance notification)' : 'Send advance notification letters'}</li>
        <li>{isKo ? '인센티브 제공 (사례금, 기프트카드 등)' : 'Offer incentives (cash, gift cards, etc.)'}</li>
        <li>{isKo ? '설문 길이 최소화 및 응답 편의성 향상' : 'Minimize survey length and improve response convenience'}</li>
        <li>{isKo ? '반복 접촉 시도 (최소 3회 이상)' : 'Make repeated contact attempts (at least 3 times)'}</li>
        <li>{isKo ? '다양한 접촉 방법 사용 (우편, 전화, 이메일, 방문)' : 'Use multiple contact methods (mail, phone, email, in-person)'}</li>
        <li>{isKo ? '무응답자 후속 분석 실시' : 'Conduct follow-up analysis of non-respondents'}</li>
      </ul>

      {/* Weighting adjustments */}
      <h3>{isKo ? '가중치 조정 (Weighting Adjustments)' : 'Weighting Adjustments'}</h3>
      <p>
        {isKo
          ? '표본의 구성이 모집단과 차이가 있을 때, 가중치(weight)를 적용하여 모집단 비율을 복원할 수 있습니다. 가중치 조정이 필요한 대표적인 경우는 다음과 같습니다:'
          : 'When the composition of the sample differs from the population, weights can be applied to restore population proportions. Common situations requiring weighting include:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '불비례층화추출 보정' : 'Correcting Disproportionate Stratification'}:</strong>{' '}
          {isKo
            ? '의도적으로 불균형하게 추출된 표본을 모집단 비율로 복원합니다.'
            : 'Restore population proportions for samples that were intentionally drawn disproportionately.'}
        </li>
        <li>
          <strong>{isKo ? '무응답 보정' : 'Non-response Adjustment'}:</strong>{' '}
          {isKo
            ? '특정 하위 집단의 무응답률이 높을 때, 해당 집단의 응답자에게 더 높은 가중치를 부여합니다.'
            : 'When non-response rates are higher in certain subgroups, assign higher weights to respondents in those groups.'}
        </li>
        <li>
          <strong>{isKo ? '사후 층화 (Post-stratification)' : 'Post-stratification'}:</strong>{' '}
          {isKo
            ? '표본의 인구통계학적 분포를 인구조사 등 알려진 모집단 분포에 맞추어 조정합니다.'
            : 'Adjust the demographic distribution of the sample to match the known population distribution from sources such as census data.'}
        </li>
      </ul>

      {/* Practical checklist */}
      <h3>{isKo ? '표본추출 계획 체크리스트' : 'Practical Checklist for a Sampling Plan'}</h3>
      <ul>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '모집단이 명확하게 정의되었는가?' : 'Is the population clearly defined?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '포함/배제 기준이 구체적인가?' : 'Are inclusion/exclusion criteria specific?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '표본틀이 확보되었고, 그 한계를 인지하고 있는가?' : 'Has the sampling frame been obtained, and are its limitations recognized?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '표본추출 방법의 선택 근거가 명확한가?' : 'Is the rationale for the chosen sampling method clear?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '표본크기 산출 근거(공식, 검정력 분석)가 문서화되었는가?' : 'Is the sample size calculation (formula, power analysis) documented?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '무응답률을 고려하여 충분한 여유분을 확보했는가?' : 'Has a sufficient buffer been included to account for non-response?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '무응답 추적 및 대응 전략이 수립되었는가?' : 'Has a non-response tracking and mitigation strategy been established?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? 'IRB(연구윤리심의위원회) 승인이 필요한 경우 절차를 진행했는가?' : 'If IRB approval is required, has the process been initiated?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '가중치 적용 계획이 필요한 경우 준비되었는가?' : 'If weighting is needed, has a plan been prepared?'}
        </li>
        <li>
          <input type="checkbox" disabled />{' '}
          {isKo ? '표본의 대표성을 사후 검증할 방법이 있는가?' : 'Is there a method to verify sample representativeness after data collection?'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '현실적 고려사항' : 'Real-world Considerations'}>
        <p>
          {isKo
            ? '실제 연구에서는 이론적으로 완벽한 표본추출이 어렵습니다. 중요한 것은 한계를 인식하고 투명하게 보고하는 것입니다. 연구 방법 섹션에는 다음을 반드시 포함하세요: (1) 사용한 표본추출 방법과 선택 이유, (2) 표본크기 결정 근거, (3) 응답률과 무응답 처리 방법, (4) 표본의 인구통계학적 특성과 모집단 비교, (5) 표본추출의 한계점과 이로 인한 일반화 제약. 이러한 투명한 보고가 연구의 신뢰성을 오히려 높여줍니다. 또한 예비조사(pilot study)를 통해 설문지의 적절성과 표본추출 절차의 실행 가능성을 사전에 확인하는 것을 강력히 권장합니다.'
            : 'In practice, theoretically perfect sampling is difficult to achieve. What matters is acknowledging limitations and reporting them transparently. Your methods section should always include: (1) the sampling method used and the rationale for its selection, (2) the basis for determining sample size, (3) the response rate and how non-response was handled, (4) demographic characteristics of the sample compared to the population, and (5) limitations of the sampling and resulting constraints on generalizability. Transparent reporting of this kind actually enhances research credibility. Additionally, conducting a pilot study to verify the appropriateness of the questionnaire and the feasibility of the sampling procedure beforehand is strongly recommended.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 7 - References                                            */
/* ------------------------------------------------------------------ */
function ReferencesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <>
      <div className="guide-content-header">
        <h1>{isKo ? '참고문헌' : 'References'}</h1>
        <p>{isKo ? '표본추출 학습에 활용된 주요 참고문헌입니다.' : 'Key references used in the study of sampling methods.'}</p>
      </div>
      <div className="guide-section">
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Cochran, W. G. (1977). <em>Sampling Techniques</em> (3rd ed.). John Wiley & Sons.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Lohr, S. L. (2022). <em>Sampling: Design and Analysis</em> (3rd ed.). CRC Press.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Thompson, S. K. (2012). <em>Sampling</em> (3rd ed.). John Wiley & Sons.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Levy, P. S., & Lemeshow, S. (2008). <em>Sampling of Populations: Methods and Applications</em> (4th ed.). John Wiley & Sons.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Kish, L. (1995). <em>Survey Sampling</em>. John Wiley & Sons.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>남궁근 (2021). <em>행정조사방법론</em> (제6판). 법문사.</li>
          <li style={{ marginBottom: '12px', lineHeight: 1.8, fontSize: '14px', color: 'var(--text-secondary)' }}>Babbie, E. (2021). <em>The Practice of Social Research</em> (15th ed.). Cengage Learning.</li>
        </ul>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */
export default function Sampling(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('population');
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
        title={isKo ? '표본추출 | Research Master' : 'Sampling Methods | Research Master'}
        description={
          isKo
            ? '확률 및 비확률 표본추출 방법과 표본크기 결정 방법을 학습합니다.'
            : 'Learn probability and non-probability sampling methods and how to determine sample size.'
        }
      />
      <div className="guide-page">
        <div className="guide-layout">
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
          <main className="guide-content">
            {activeSection === 'population' && <PopulationSection isKo={isKo} />}
            {activeSection === 'probability' && <ProbabilitySection isKo={isKo} />}
            {activeSection === 'non-probability' && <NonProbabilitySection isKo={isKo} />}
            {activeSection === 'sample-size' && <SampleSizeSection isKo={isKo} />}
            {activeSection === 'error' && <ErrorSection isKo={isKo} />}
            {activeSection === 'practice' && <PracticeSection isKo={isKo} />}
            {activeSection === 'references' && <ReferencesSection isKo={isKo} />}

            <div className="guide-section-nav">
              <button
                className="guide-nav-btn prev"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
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
