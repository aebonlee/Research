import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'foundations', icon: 'fa-flask', ko: '실험연구의 기초', en: 'Foundations of Experimental Research' },
  { id: 'designs', icon: 'fa-table-cells', ko: '실험 설계 유형', en: 'Types of Experimental Designs' },
  { id: 'validity', icon: 'fa-shield-halved', ko: '내적타당도와 외적타당도', en: 'Internal & External Validity' },
  { id: 'control', icon: 'fa-sliders', ko: '통제 기법', en: 'Control Techniques' },
  { id: 'quasi', icon: 'fa-code-branch', ko: '준실험설계와 현장실험', en: 'Quasi-experiments & Field Experiments' },
  { id: 'cases', icon: 'fa-magnifying-glass-chart', ko: '실험연구 사례', en: 'Experimental Research Cases' },
];

/* ------------------------------------------------------------------ */
/*  Section 1 : Foundations                                           */
/* ------------------------------------------------------------------ */
function FoundationsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-flask" />
        {isKo ? '실험연구의 기초' : 'Foundations of Experimental Research'}
      </h2>

      <h3>{isKo ? '실험연구란 무엇인가?' : 'What Is Experimental Research?'}</h3>
      <p>
        {isKo
          ? '실험연구(Experimental Research)는 연구자가 하나 이상의 독립변수를 의도적으로 조작(manipulation)하고, 외생변수를 통제(control)하며, 참가자를 무작위로 배정(randomization)하여 독립변수가 종속변수에 미치는 인과적 효과를 검증하는 연구 방법입니다. 실험연구는 사회과학, 자연과학, 의학 등 다양한 분야에서 인과관계를 가장 강력하게 추론할 수 있는 방법으로 인정받고 있습니다.'
          : 'Experimental research is a method in which the researcher deliberately manipulates one or more independent variables, controls extraneous variables, and randomly assigns participants to conditions in order to test the causal effect of the independent variable on the dependent variable. It is widely recognized as the most powerful method for inferring causation across the social sciences, natural sciences, and medicine.'}
      </p>

      <h3>{isKo ? '핵심 특성: 조작, 통제, 무작위배정' : 'Key Characteristics: Manipulation, Control, Randomization'}</h3>
      <p>
        {isKo
          ? '진정한 실험(true experiment)은 세 가지 핵심 요소를 갖추어야 합니다. 첫째, 연구자가 독립변수를 직접 조작하여 처치(treatment)를 가합니다. 둘째, 실험 결과에 영향을 줄 수 있는 외생변수를 체계적으로 통제합니다. 셋째, 참가자를 실험집단과 통제집단에 무작위로 배정하여 사전에 존재하는 집단 간 차이를 확률적으로 동등하게 만듭니다.'
          : 'A true experiment requires three essential elements. First, the researcher directly manipulates the independent variable by administering a treatment. Second, extraneous variables that could influence the outcome are systematically controlled. Third, participants are randomly assigned to experimental and control groups, making pre-existing group differences probabilistically equivalent.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '조작 (Manipulation)' : 'Manipulation'}</strong>:{' '}
          {isKo
            ? '연구자가 독립변수의 수준이나 조건을 의도적으로 변화시키는 것입니다. 예를 들어, 새로운 교수법의 효과를 검증하기 위해 실험집단에는 새 교수법을, 통제집단에는 기존 교수법을 적용합니다.'
            : 'The researcher intentionally varies the levels or conditions of the independent variable. For example, to test a new teaching method, the experimental group receives the new method while the control group receives the conventional one.'}
        </li>
        <li>
          <strong>{isKo ? '통제 (Control)' : 'Control'}</strong>:{' '}
          {isKo
            ? '종속변수에 영향을 미칠 수 있는 외생변수(extraneous variables)를 제거하거나 일정하게 유지하는 것입니다. 실험 환경, 시간, 절차 등을 표준화하여 독립변수 이외의 요인이 결과에 미치는 영향을 최소화합니다.'
            : 'Eliminating or holding constant extraneous variables that could affect the dependent variable. By standardizing the experimental environment, timing, and procedures, the influence of factors other than the independent variable on the outcome is minimized.'}
        </li>
        <li>
          <strong>{isKo ? '무작위배정 (Randomization)' : 'Randomization'}</strong>:{' '}
          {isKo
            ? '참가자를 각 조건에 무작위로 배정하여 알려진 혹은 알려지지 않은 혼란변수의 효과를 확률적으로 균등하게 분배합니다. 이를 통해 집단 간 동질성을 확보할 수 있습니다.'
            : 'Randomly assigning participants to conditions distributes the effects of known and unknown confounding variables probabilistically across groups, thereby ensuring group equivalence.'}
        </li>
      </ul>

      <h3>{isKo ? '독립변수와 종속변수' : 'Independent and Dependent Variables'}</h3>
      <p>
        {isKo
          ? '독립변수(Independent Variable, IV)는 연구자가 조작하는 변수로, 처치 또는 개입(intervention)이라고도 합니다. 종속변수(Dependent Variable, DV)는 독립변수의 조작에 따라 변화가 예상되는 결과 변수입니다. 예를 들어, 약물 투여량(IV)이 환자의 회복 속도(DV)에 미치는 영향을 연구할 수 있습니다. 실험연구의 핵심 목적은 IV의 변화가 DV에 인과적 영향을 미치는지 검증하는 것입니다.'
          : 'The independent variable (IV) is the variable manipulated by the researcher, also called the treatment or intervention. The dependent variable (DV) is the outcome variable expected to change as a result of the IV manipulation. For example, a study might examine the effect of drug dosage (IV) on patient recovery rate (DV). The core purpose of experimental research is to test whether changes in the IV causally affect the DV.'}
      </p>

      <h3>{isKo ? '실험집단 vs 통제집단' : 'Experimental Group vs Control Group'}</h3>
      <p>
        {isKo
          ? '실험집단(Experimental Group)은 연구자가 관심 있는 처치를 받는 집단이며, 통제집단(Control Group)은 처치를 받지 않거나 위약(placebo)을 받는 비교 집단입니다. 두 집단의 종속변수 차이를 비교함으로써 처치의 효과를 추론합니다. 통제집단이 없으면 관찰된 변화가 처치 때문인지 다른 요인 때문인지 판단할 수 없습니다.'
          : 'The experimental group receives the treatment of interest, while the control group receives no treatment or a placebo for comparison. By comparing the difference in the dependent variable between the two groups, we infer the effect of the treatment. Without a control group, it is impossible to determine whether observed changes are due to the treatment or other factors.'}
      </p>

      <h3>{isKo ? '실험의 논리: Mill의 방법' : "The Logic of Experimentation: Mill's Methods"}</h3>
      <p>
        {isKo
          ? '실험연구의 논리적 기초는 19세기 철학자 John Stuart Mill이 제안한 인과추론 방법에 있습니다. 특히 "차이법(Method of Difference)"은 실험의 핵심 논리를 반영합니다. 두 상황이 하나의 조건을 제외하고 모든 면에서 동일할 때, 그 조건이 결과의 차이를 설명한다는 원리입니다. 실험에서 실험집단과 통제집단이 처치 여부만 다르고 나머지 조건이 동일하다면, 두 집단 간 종속변수 차이는 처치에 의한 것으로 귀인할 수 있습니다.'
          : "The logical foundation of experimental research lies in the causal inference methods proposed by 19th-century philosopher John Stuart Mill. In particular, the \"Method of Difference\" reflects the core logic of experimentation: when two situations are identical in every respect except one condition, that condition explains the difference in outcomes. If the experimental and control groups differ only in whether they received the treatment and all other conditions are identical, then the difference in the dependent variable between the groups can be attributed to the treatment."}
      </p>

      <h3>{isKo ? '실험실 실험 vs 현장 실험' : 'Laboratory vs Field Experiments'}</h3>
      <p>
        {isKo
          ? '실험실 실험(Laboratory Experiment)은 통제된 환경에서 수행되어 높은 내적타당도를 확보할 수 있지만, 인위적 환경으로 인해 외적타당도(일반화 가능성)가 낮을 수 있습니다. 반면 현장 실험(Field Experiment)은 실제 생활 환경에서 수행되어 높은 외적타당도를 가지지만, 외생변수의 통제가 어려워 내적타당도가 위협받을 수 있습니다. 연구 목적과 맥락에 따라 적절한 실험 유형을 선택해야 합니다.'
          : 'Laboratory experiments are conducted in controlled settings, providing high internal validity, but may suffer from low external validity (generalizability) due to the artificial environment. Field experiments, on the other hand, are conducted in real-world settings and have high external validity, but controlling extraneous variables is more difficult, potentially threatening internal validity. The appropriate type of experiment should be selected based on research objectives and context.'}
      </p>

      <h3>{isKo ? '사회과학 실험의 장점과 한계' : 'Advantages and Limitations of Experiments in Social Science'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '장점' : 'Advantages'}</strong>:{' '}
          {isKo
            ? '인과관계의 강력한 추론, 변수 간 관계의 정밀한 검증, 반복 가능성(replicability), 체계적인 가설 검증'
            : 'Strong causal inference, precise testing of variable relationships, replicability, systematic hypothesis testing'}
        </li>
        <li>
          <strong>{isKo ? '한계' : 'Limitations'}</strong>:{' '}
          {isKo
            ? '인위적 실험 환경의 비현실성, 윤리적 제약(무작위배정의 어려움), 호손 효과(Hawthorne effect), 요구 특성(demand characteristics), 일부 사회현상의 실험적 조작 불가능성'
            : 'Artificiality of experimental settings, ethical constraints (difficulty of random assignment), Hawthorne effect, demand characteristics, inability to experimentally manipulate some social phenomena'}
        </li>
      </ul>

      <TipBox type="important" title={isKo ? '진정한 실험의 3대 필수 요소' : 'Three Essential Elements of a True Experiment'}>
        <p>
          {isKo
            ? '진정한 실험(true experiment)이 되기 위해서는 반드시 다음 세 가지 요소를 갖추어야 합니다:'
            : 'For a study to qualify as a true experiment, it must include all three of the following elements:'}
        </p>
        <ol>
          <li>
            <strong>{isKo ? '독립변수의 조작' : 'Manipulation of the independent variable'}</strong> &mdash;{' '}
            {isKo ? '연구자가 직접 처치를 가함' : 'the researcher directly administers the treatment'}
          </li>
          <li>
            <strong>{isKo ? '무작위배정' : 'Random assignment'}</strong> &mdash;{' '}
            {isKo ? '참가자를 조건에 확률적으로 배정' : 'participants are probabilistically assigned to conditions'}
          </li>
          <li>
            <strong>{isKo ? '통제집단의 사용' : 'Use of a control group'}</strong> &mdash;{' '}
            {isKo ? '비교를 위한 기준 집단 확보' : 'a baseline group for comparison is established'}
          </li>
        </ol>
        <p>
          {isKo
            ? '이 세 요소 중 하나라도 빠지면 준실험설계(quasi-experimental design)나 비실험설계(non-experimental design)로 분류됩니다. 특히 무작위배정이 없으면 선택편향(selection bias)을 배제할 수 없어 인과추론의 강도가 크게 약해집니다.'
            : 'If any of these elements is missing, the design is classified as quasi-experimental or non-experimental. In particular, without random assignment, selection bias cannot be ruled out and the strength of causal inference is substantially weakened.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 2 : Designs                                               */
/* ------------------------------------------------------------------ */
function DesignsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-table-cells" />
        {isKo ? '실험 설계 유형' : 'Types of Experimental Designs'}
      </h2>

      <h3>{isKo ? '실험설계 표기법 (O, X, R)' : 'Notation System (O, X, R)'}</h3>
      <p>
        {isKo
          ? '실험설계를 기술할 때 표준화된 표기법을 사용합니다. R은 무작위배정(Random assignment), X는 처치(Treatment), O는 관찰 또는 측정(Observation)을 의미합니다. 예를 들어, "R O₁ X O₂"는 무작위배정 후 사전측정, 처치, 사후측정을 순서대로 수행함을 나타냅니다. 이 표기법을 통해 다양한 실험설계의 구조를 간결하고 명확하게 비교할 수 있습니다.'
          : 'A standardized notation system is used to describe experimental designs. R stands for Random assignment, X for Treatment, and O for Observation (measurement). For example, "R O₁ X O₂" indicates random assignment followed by pretest, treatment, and posttest in sequence. This notation allows for concise and clear comparison of the structures of various experimental designs.'}
      </p>

      <h3>{isKo ? '사전-사후 통제집단설계' : 'Pretest-Posttest Control Group Design'}</h3>
      <p>
        {isKo
          ? '가장 고전적이고 널리 사용되는 실험설계입니다. 참가자를 무작위로 실험집단과 통제집단에 배정한 후, 양 집단 모두에 사전측정(pretest)을 실시합니다. 이후 실험집단에만 처치를 가하고, 양 집단 모두에 사후측정(posttest)을 실시합니다. 처치 효과는 실험집단과 통제집단의 사전-사후 변화 차이로 평가됩니다.'
          : 'This is the most classic and widely used experimental design. Participants are randomly assigned to experimental and control groups, and both groups receive a pretest. The treatment is then administered only to the experimental group, followed by a posttest for both groups. The treatment effect is evaluated by comparing the pretest-posttest change differences between the experimental and control groups.'}
      </p>
      <div className="guide-code-block">
        <pre>
          {isKo
            ? `실험집단:  R  O₁  X  O₂
통제집단:  R  O₃     O₄
처치 효과 = (O₂ - O₁) - (O₄ - O₃)`
            : `Experimental:  R  O₁  X  O₂
Control:       R  O₃     O₄
Treatment effect = (O₂ - O₁) - (O₄ - O₃)`}
        </pre>
      </div>

      <h3>{isKo ? '사후측정 통제집단설계' : 'Posttest-Only Control Group Design'}</h3>
      <p>
        {isKo
          ? '사전측정을 생략하고 무작위배정 후 처치와 사후측정만 실시하는 설계입니다. 무작위배정을 통해 두 집단의 동질성이 확보되므로 사전측정이 필수적이지 않습니다. 이 설계는 사전측정이 처치 효과에 영향을 줄 수 있는 검사 효과(testing effect)를 제거할 수 있다는 장점이 있습니다. 또한 사전측정이 불가능하거나 비실용적인 상황에서 유용합니다.'
          : 'This design omits the pretest and conducts only the treatment and posttest after random assignment. Because random assignment ensures group equivalence, a pretest is not strictly necessary. This design has the advantage of eliminating testing effects where the pretest itself might influence the treatment outcome. It is also useful in situations where pretesting is impractical or impossible.'}
      </p>
      <div className="guide-code-block">
        <pre>
          {isKo
            ? `실험집단:  R  X  O₁
통제집단:  R     O₂
처치 효과 = O₁ - O₂`
            : `Experimental:  R  X  O₁
Control:       R     O₂
Treatment effect = O₁ - O₂`}
        </pre>
      </div>

      <h3>{isKo ? '솔로몬 4집단설계' : 'Solomon Four-Group Design'}</h3>
      <p>
        {isKo
          ? '솔로몬 4집단설계는 사전측정의 영향(검사 효과)과 처치 효과를 동시에 평가할 수 있는 가장 엄격한 실험설계입니다. 네 개의 집단을 사용합니다: (1) 사전측정 + 처치 + 사후측정, (2) 사전측정 + 사후측정만, (3) 처치 + 사후측정만, (4) 사후측정만. 이를 통해 처치 효과, 검사 효과, 그리고 처치와 검사의 상호작용 효과를 모두 분리하여 평가할 수 있습니다. 그러나 네 개 집단이 필요하므로 비용과 시간이 많이 소요됩니다.'
          : 'The Solomon four-group design is the most rigorous experimental design, capable of simultaneously evaluating testing effects and treatment effects. It uses four groups: (1) pretest + treatment + posttest, (2) pretest + posttest only, (3) treatment + posttest only, (4) posttest only. This allows separate evaluation of the treatment effect, the testing effect, and the interaction between treatment and testing. However, it requires four groups, making it costly and time-consuming.'}
      </p>
      <div className="guide-code-block">
        <pre>
          {isKo
            ? `집단 1:  R  O₁  X  O₂
집단 2:  R  O₃     O₄
집단 3:  R      X  O₅
집단 4:  R         O₆`
            : `Group 1:  R  O₁  X  O₂
Group 2:  R  O₃     O₄
Group 3:  R      X  O₅
Group 4:  R         O₆`}
        </pre>
      </div>

      <h3>{isKo ? '요인설계 (Factorial Designs)' : 'Factorial Designs'}</h3>
      <p>
        {isKo
          ? '요인설계는 두 개 이상의 독립변수(요인)를 동시에 조작하여 각 요인의 주효과(main effect)와 요인 간 상호작용효과(interaction effect)를 검증하는 설계입니다. 가장 단순한 형태는 2x2 설계로, 두 개의 독립변수가 각각 2개의 수준을 가집니다. 2x3 설계는 하나의 독립변수가 2수준, 다른 하나가 3수준인 경우입니다.'
          : 'Factorial designs simultaneously manipulate two or more independent variables (factors) to test the main effect of each factor and the interaction effects between factors. The simplest form is the 2x2 design, where two independent variables each have two levels. A 2x3 design has one independent variable with two levels and another with three levels.'}
      </p>
      <p>
        {isKo
          ? '주효과란 한 요인이 종속변수에 미치는 독립적 영향이고, 상호작용효과란 한 요인의 효과가 다른 요인의 수준에 따라 달라지는 현상입니다. 예를 들어, 교수법(강의식 vs 토론식)과 학습 환경(교실 vs 온라인)의 2x2 설계에서, 토론식 교수법의 효과가 교실 환경에서는 크지만 온라인에서는 작다면 상호작용효과가 존재하는 것입니다.'
          : 'A main effect is the independent influence of one factor on the dependent variable, while an interaction effect occurs when the effect of one factor differs depending on the level of another factor. For example, in a 2x2 design of teaching method (lecture vs discussion) and learning environment (classroom vs online), if the effect of discussion-based teaching is large in classrooms but small online, an interaction effect exists.'}
      </p>

      <h3>{isKo ? '피험자 간 설계 vs 피험자 내 설계' : 'Between-Subjects vs Within-Subjects Designs'}</h3>
      <p>
        {isKo
          ? '피험자 간 설계(Between-subjects design)에서는 각 참가자가 하나의 실험 조건에만 참여합니다. 이 설계는 이월 효과(carryover effect)가 없지만 더 많은 참가자가 필요하고 개인차가 오차 변량을 증가시킬 수 있습니다. 피험자 내 설계(Within-subjects design)에서는 모든 참가자가 모든 실험 조건을 경험합니다. 이 설계는 적은 참가자로 높은 통계적 검정력을 확보할 수 있지만, 연습 효과, 피로 효과, 순서 효과 등의 이월 효과가 발생할 수 있습니다.'
          : 'In a between-subjects design, each participant is exposed to only one experimental condition. This design eliminates carryover effects but requires more participants and individual differences can increase error variance. In a within-subjects design, all participants experience all experimental conditions. This design achieves higher statistical power with fewer participants but can produce carryover effects such as practice effects, fatigue effects, and order effects.'}
      </p>

      <h3>{isKo ? '반복측정 설계' : 'Repeated Measures Design'}</h3>
      <p>
        {isKo
          ? '반복측정 설계(Repeated Measures Design)는 피험자 내 설계의 한 형태로, 동일한 참가자를 여러 시점에서 반복적으로 측정합니다. 시간 경과에 따른 변화를 추적하는 데 특히 유용합니다. 예를 들어, 치료 프로그램의 효과를 치료 전, 치료 중, 치료 후, 추적 관찰 시점에서 반복 측정하여 변화 궤적을 분석할 수 있습니다. 분석에는 반복측정 분산분석(Repeated Measures ANOVA)이나 다층모형(multilevel modeling)이 사용됩니다.'
          : 'A repeated measures design is a form of within-subjects design in which the same participants are measured repeatedly at multiple time points. It is particularly useful for tracking changes over time. For example, the effectiveness of a therapy program can be analyzed by repeatedly measuring at pre-treatment, during treatment, post-treatment, and follow-up time points to analyze the trajectory of change. Analysis typically uses repeated measures ANOVA or multilevel modeling.'}
      </p>

      <TipBox type="tip" title={isKo ? '올바른 실험설계 선택하기' : 'Choosing the Right Experimental Design'}>
        <p>
          {isKo
            ? '실험설계를 선택할 때 고려해야 할 핵심 요소들입니다:'
            : 'Key factors to consider when selecting an experimental design:'}
        </p>
        <ul>
          <li>
            {isKo
              ? '사전측정이 처치에 영향을 줄 수 있다면 사후측정 전용 설계나 솔로몬 4집단설계를 고려하세요.'
              : 'If the pretest might influence the treatment, consider a posttest-only design or Solomon four-group design.'}
          </li>
          <li>
            {isKo
              ? '여러 독립변수의 상호작용을 검증하려면 요인설계를 사용하세요.'
              : 'Use a factorial design if you want to test interactions between multiple independent variables.'}
          </li>
          <li>
            {isKo
              ? '참가자 수가 제한적이면 피험자 내 설계를 고려하되, 역균형화(counterbalancing)를 반드시 적용하세요.'
              : 'If participants are limited, consider a within-subjects design but be sure to apply counterbalancing.'}
          </li>
          <li>
            {isKo
              ? '시간에 따른 변화를 추적해야 한다면 반복측정 설계가 적합합니다.'
              : 'If you need to track changes over time, a repeated measures design is appropriate.'}
          </li>
          <li>
            {isKo
              ? '가장 엄격한 통제가 필요하다면 솔로몬 4집단설계를 선택하되, 자원 요구량을 고려하세요.'
              : 'For the most rigorous control, choose the Solomon four-group design, but consider the resource requirements.'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 3 : Validity                                              */
/* ------------------------------------------------------------------ */
function ValiditySection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-shield-halved" />
        {isKo ? '내적타당도와 외적타당도' : 'Internal & External Validity'}
      </h2>

      <h3>{isKo ? '내적타당도 (Internal Validity)' : 'Internal Validity'}</h3>
      <p>
        {isKo
          ? '내적타당도는 "관찰된 결과가 실제로 독립변수의 조작에 의해 발생한 것인가?"라는 질문에 답합니다. 즉, 인과관계 추론의 정확성을 나타내는 개념입니다. 내적타당도가 높다는 것은 종속변수의 변화가 독립변수의 조작 때문이라고 확신할 수 있다는 의미입니다. 실험연구에서 내적타당도를 확보하는 것은 가장 근본적인 목표이며, 이를 위해 다양한 위협 요인을 인식하고 통제해야 합니다.'
          : 'Internal validity answers the question: "Were the observed results actually caused by the manipulation of the independent variable?" It represents the accuracy of causal inference. High internal validity means we can be confident that changes in the dependent variable were due to the manipulation of the independent variable. Securing internal validity is the most fundamental goal in experimental research, requiring awareness and control of various threats.'}
      </p>

      <h3>{isKo ? '내적타당도 위협 요인' : 'Threats to Internal Validity'}</h3>
      <p>
        {isKo
          ? 'Campbell과 Stanley(1963)가 체계화한 내적타당도 위협 요인은 실험연구자가 반드시 숙지해야 하는 핵심 개념입니다. 이러한 위협은 독립변수 이외의 대안적 설명을 제공하여 인과추론을 약화시킵니다.'
          : 'The threats to internal validity systematized by Campbell and Stanley (1963) are core concepts that experimental researchers must master. These threats provide alternative explanations other than the independent variable, weakening causal inference.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '역사 (History)' : 'History'}</strong>:{' '}
          {isKo
            ? '실험 기간 중 처치 이외의 외부 사건이 종속변수에 영향을 미치는 것입니다. 예를 들어, 교육 프로그램의 효과를 측정하는 도중 관련 뉴스 사건이 발생하여 참가자들의 태도가 변할 수 있습니다.'
            : 'External events other than the treatment affecting the dependent variable during the experiment. For example, a relevant news event occurring during an education program study could change participants\' attitudes.'}
        </li>
        <li>
          <strong>{isKo ? '성숙 (Maturation)' : 'Maturation'}</strong>:{' '}
          {isKo
            ? '시간 경과에 따른 참가자의 자연적 변화(성장, 피로, 노화 등)가 종속변수에 영향을 미치는 것입니다. 장기 실험에서 특히 중요합니다.'
            : 'Natural changes in participants over time (growth, fatigue, aging, etc.) affecting the dependent variable. Especially important in long-term experiments.'}
        </li>
        <li>
          <strong>{isKo ? '검사 효과 (Testing)' : 'Testing'}</strong>:{' '}
          {isKo
            ? '사전측정(pretest) 경험이 사후측정(posttest) 수행에 영향을 미치는 것입니다. 참가자가 사전검사를 통해 학습하거나 민감해져서 사후검사에서 더 나은 성과를 보일 수 있습니다.'
            : 'The experience of taking a pretest influencing posttest performance. Participants may learn from or become sensitized by the pretest, leading to better performance on the posttest.'}
        </li>
        <li>
          <strong>{isKo ? '도구 변화 (Instrumentation)' : 'Instrumentation'}</strong>:{' '}
          {isKo
            ? '측정 도구의 변화가 결과에 영향을 미치는 것입니다. 관찰자의 기준 변화, 설문지의 수정, 측정 장비의 보정 변화 등이 해당됩니다.'
            : 'Changes in measurement instruments affecting results. This includes changes in observer standards, questionnaire modifications, and changes in equipment calibration.'}
        </li>
        <li>
          <strong>{isKo ? '통계적 회귀 (Regression to the Mean)' : 'Regression to the Mean'}</strong>:{' '}
          {isKo
            ? '극단적인 점수를 가진 참가자를 선발하면, 재측정 시 평균 쪽으로 회귀하는 경향이 있습니다. 이를 처치 효과로 오인할 수 있습니다.'
            : 'When participants are selected based on extreme scores, their scores tend to regress toward the mean upon retesting. This can be mistaken for a treatment effect.'}
        </li>
        <li>
          <strong>{isKo ? '선택편향 (Selection Bias)' : 'Selection Bias'}</strong>:{' '}
          {isKo
            ? '실험집단과 통제집단이 처치 이전부터 체계적으로 다른 경우입니다. 무작위배정이 이루어지지 않았을 때 발생합니다.'
            : 'When experimental and control groups systematically differ before the treatment. This occurs when random assignment is not implemented.'}
        </li>
        <li>
          <strong>{isKo ? '실험 탈락 (Experimental Mortality)' : 'Experimental Mortality'}</strong>:{' '}
          {isKo
            ? '실험 도중 참가자가 탈락하는 것으로, 특히 탈락이 집단에 따라 차별적으로 발생하면 집단 간 동질성이 깨집니다.'
            : 'Participants dropping out during the experiment. When attrition occurs differentially across groups, it destroys group equivalence.'}
        </li>
        <li>
          <strong>{isKo ? '처치 확산 (Diffusion of Treatment)' : 'Diffusion of Treatment'}</strong>:{' '}
          {isKo
            ? '실험집단의 처치 내용이 통제집단에 전달되는 현상입니다. 같은 학교의 다른 교실에서 실험과 통제가 진행될 때 학생들 간 정보 교환이 일어날 수 있습니다.'
            : 'The treatment administered to the experimental group spreads to the control group. When the experiment and control conditions take place in different classrooms of the same school, information exchange between students can occur.'}
        </li>
      </ul>

      <h3>{isKo ? '외적타당도 (External Validity)' : 'External Validity'}</h3>
      <p>
        {isKo
          ? '외적타당도는 "실험 결과를 다른 사람, 다른 상황, 다른 시점에 일반화할 수 있는가?"라는 질문에 답합니다. 아무리 인과관계가 명확하더라도 그 결과가 특정 실험 상황에만 국한된다면 이론적, 실용적 가치가 제한됩니다.'
          : 'External validity answers the question: "Can the experimental results be generalized to other people, other settings, and other times?" No matter how clear the causal relationship, if the results are limited to a specific experimental situation, their theoretical and practical value is limited.'}
      </p>

      <h3>{isKo ? '외적타당도 위협 요인' : 'Threats to External Validity'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '모집단 타당도 (Population Validity)' : 'Population Validity'}</strong>:{' '}
          {isKo
            ? '실험 참가자(표본)가 연구 결과를 일반화하고자 하는 모집단을 대표하는가의 문제입니다. 대학생만을 대상으로 한 실험 결과를 전체 성인에게 일반화하기 어려울 수 있습니다.'
            : 'Whether the experimental participants (sample) represent the population to which results are to be generalized. Results from experiments using only college students may be difficult to generalize to all adults.'}
        </li>
        <li>
          <strong>{isKo ? '생태학적 타당도 (Ecological Validity)' : 'Ecological Validity'}</strong>:{' '}
          {isKo
            ? '실험이 수행된 환경이 일반화하려는 실제 환경과 유사한가의 문제입니다. 인위적 실험실 환경에서 발견된 효과가 자연스러운 일상 환경에서도 동일하게 나타나는지 확인해야 합니다.'
            : 'Whether the experimental setting is similar to the real-world environment to which results are to be generalized. Effects found in artificial laboratory settings must be verified as replicable in natural everyday environments.'}
        </li>
        <li>
          <strong>{isKo ? '시간적 타당도 (Temporal Validity)' : 'Temporal Validity'}</strong>:{' '}
          {isKo
            ? '실험 결과가 다른 시점에도 동일하게 유지되는가의 문제입니다. 사회 변화, 기술 발전 등으로 인해 과거의 실험 결과가 현재에는 타당하지 않을 수 있습니다.'
            : 'Whether experimental results hold at different time points. Due to social changes, technological advances, etc., past experimental findings may no longer be valid in the present.'}
        </li>
      </ul>

      <h3>{isKo ? '내적타당도-외적타당도 트레이드오프' : 'The Internal-External Validity Trade-off'}</h3>
      <p>
        {isKo
          ? '내적타당도와 외적타당도 사이에는 본질적인 긴장 관계가 존재합니다. 내적타당도를 높이기 위해 실험 환경을 엄격하게 통제하면, 그 환경이 현실과 동떨어져 외적타당도가 감소합니다. 반대로, 자연스러운 환경에서 실험을 수행하여 외적타당도를 높이면, 통제가 어려워져 내적타당도가 위협받습니다. 이상적으로는 두 가지 타당도를 모두 최대화하는 것이 바람직하지만, 실제로는 연구 목적에 따라 우선순위를 정하게 됩니다. 이론 검증을 위한 기초 연구는 내적타당도를, 정책 적용을 위한 응용 연구는 외적타당도를 우선시하는 경향이 있습니다.'
          : 'An inherent tension exists between internal and external validity. Strictly controlling the experimental environment to increase internal validity makes it dissimilar to reality, decreasing external validity. Conversely, conducting experiments in natural settings to increase external validity makes control difficult, threatening internal validity. Ideally, both types of validity should be maximized, but in practice, priorities are set based on research objectives. Basic research for theory testing tends to prioritize internal validity, while applied research for policy implementation tends to prioritize external validity.'}
      </p>

      <TipBox type="warning" title={isKo ? 'Campbell & Stanley의 고전적 위협 요인' : "Campbell & Stanley's Classic Threats"}>
        <p>
          {isKo
            ? 'Campbell과 Stanley(1963)의 저서 "Experimental and Quasi-experimental Designs for Research"는 실험설계의 바이블로 불립니다. 그들이 정리한 8가지 내적타당도 위협(역사, 성숙, 검사, 도구, 통계적 회귀, 선택, 탈락, 선택과 성숙의 상호작용)과 4가지 외적타당도 위협은 반세기가 지난 지금도 모든 실험연구의 설계와 평가에서 핵심 참조 틀로 사용됩니다.'
            : 'Campbell and Stanley\'s (1963) "Experimental and Quasi-experimental Designs for Research" is considered the bible of experimental design. Their eight threats to internal validity (history, maturation, testing, instrumentation, statistical regression, selection, mortality, and selection-maturation interaction) and four threats to external validity remain the core reference framework for designing and evaluating all experimental research, even half a century later.'}
        </p>
        <p>
          {isKo
            ? '연구 설계 단계에서 이 위협 요인들을 체크리스트처럼 활용하여, 각 위협이 본인의 연구에서 어떻게 통제되고 있는지 명확히 기술할 수 있어야 합니다. 심사위원과 논문 리뷰어는 이러한 위협에 대한 대응을 반드시 확인합니다.'
            : 'During the research design phase, use these threats as a checklist and be prepared to clearly describe how each threat is controlled in your study. Reviewers and dissertation committees will always check for responses to these threats.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 4 : Control                                               */
/* ------------------------------------------------------------------ */
function ControlSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-sliders" />
        {isKo ? '통제 기법' : 'Control Techniques'}
      </h2>

      <h3>{isKo ? '무작위배정 (Random Assignment): 골드 스탠더드' : 'Random Assignment: The Gold Standard'}</h3>
      <p>
        {isKo
          ? '무작위배정은 실험연구에서 가장 강력한 통제 기법입니다. 참가자를 난수표, 동전 던지기, 컴퓨터 난수 생성기 등을 이용하여 각 실험 조건에 무작위로 배정함으로써, 알려진 혼란변수뿐 아니라 알려지지 않은 혼란변수까지도 확률적으로 균등하게 분배합니다. 표본 크기가 충분히 크면, 무작위배정만으로도 집단 간 동질성을 확보할 수 있습니다. 이것이 실험연구가 관찰연구보다 인과추론에서 우월한 가장 근본적인 이유입니다.'
          : 'Random assignment is the most powerful control technique in experimental research. By randomly assigning participants to experimental conditions using random number tables, coin flips, computer random number generators, etc., both known and unknown confounding variables are probabilistically distributed equally. With a sufficiently large sample size, random assignment alone can ensure group equivalence. This is the most fundamental reason experimental research is superior to observational research for causal inference.'}
      </p>
      <p>
        {isKo
          ? '주의할 점은 무작위배정(random assignment)과 무작위표집(random sampling)은 다른 개념이라는 것입니다. 무작위표집은 모집단에서 표본을 선정하는 방법으로 외적타당도와 관련되고, 무작위배정은 선정된 표본을 실험 조건에 배치하는 방법으로 내적타당도와 관련됩니다.'
          : 'It is important to note that random assignment and random sampling are different concepts. Random sampling is a method for selecting a sample from a population and relates to external validity, while random assignment is a method for allocating the selected sample to experimental conditions and relates to internal validity.'}
      </p>

      <h3>{isKo ? '매칭 (Matching)' : 'Matching'}</h3>
      <p>
        {isKo
          ? '매칭은 특정 변수에서 유사한 참가자들을 쌍으로 묶어 각 집단에 하나씩 배정하는 방법입니다. 개별 매칭(individual matching)은 참가자를 1:1로 짝지어 배정하고, 집단 매칭(group matching)은 집단 수준에서 평균이나 분포를 동등하게 맞춥니다. 매칭은 무작위배정과 함께 사용되면 특히 효과적입니다. 예를 들어, 먼저 IQ 점수를 기준으로 참가자를 쌍으로 묶은 후, 각 쌍 내에서 무작위로 실험집단과 통제집단에 배정합니다. 이를 블록 무작위배정(block randomization)이라고도 합니다.'
          : 'Matching pairs participants who are similar on a specific variable and assigns one from each pair to each group. Individual matching pairs participants 1:1, while group matching equalizes means or distributions at the group level. Matching is particularly effective when used in combination with random assignment. For example, participants are first paired based on IQ scores, and then within each pair, they are randomly assigned to experimental and control groups. This is also called block randomization.'}
      </p>

      <h3>{isKo ? '이중맹검법 (Double-Blind Procedure)' : 'Double-Blind Procedure'}</h3>
      <p>
        {isKo
          ? '이중맹검법은 참가자와 실험자 모두 참가자가 어떤 조건(실험집단/통제집단)에 속하는지 모르게 하는 절차입니다. 이를 통해 두 가지 편향을 동시에 통제합니다. 첫째, 참가자 편향(participant bias): 참가자가 자신이 처치를 받고 있다는 것을 알면 기대 효과나 위약 효과가 발생할 수 있습니다. 둘째, 실험자 편향(experimenter bias): 실험자가 참가자의 조건을 알면 무의식적으로 차별적인 행동을 할 수 있습니다. 의학 연구에서 특히 중요한 절차이며, 사회과학에서도 가능한 한 적용하는 것이 바람직합니다.'
          : 'The double-blind procedure ensures that neither participants nor experimenters know which condition (experimental/control) participants belong to. This simultaneously controls two types of bias. First, participant bias: if participants know they are receiving the treatment, expectancy or placebo effects can occur. Second, experimenter bias: if experimenters know participants\' conditions, they may unconsciously behave differently. This procedure is especially important in medical research and should be applied whenever possible in social science as well.'}
      </p>

      <h3>{isKo ? '위약 통제 (Placebo Control)' : 'Placebo Control'}</h3>
      <p>
        {isKo
          ? '위약 통제는 통제집단에 실제 처치와 외형적으로 동일하지만 유효 성분이 없는 위약(placebo)을 제공하는 방법입니다. 이를 통해 처치 자체의 효과와 "처치를 받고 있다"는 심리적 기대의 효과를 분리할 수 있습니다. 약물 연구에서의 설탕 알약이 대표적이며, 사회과학에서는 관심 프로그램과 시간과 관심의 양이 동일하지만 핵심 내용이 없는 대안 프로그램을 제공하는 방식으로 적용됩니다.'
          : 'Placebo control provides the control group with a placebo that appears identical to the actual treatment but lacks the active ingredient. This separates the effect of the treatment itself from the psychological expectation effect of "receiving treatment." Sugar pills in drug research are a classic example. In social science, this is applied by providing an alternative program that matches the time and attention of the program of interest but lacks the core content.'}
      </p>

      <h3>{isKo ? '역균형화 (Counterbalancing)' : 'Counterbalancing'}</h3>
      <p>
        {isKo
          ? '역균형화는 피험자 내 설계에서 순서 효과(order effect)를 통제하기 위해 조건의 제시 순서를 참가자마다 다르게 배열하는 기법입니다. 완전 역균형화(complete counterbalancing)는 모든 가능한 순서 조합을 사용하고, 라틴 정방형 설계(Latin square design)는 조건이 많을 때 효율적으로 순서를 배분합니다. 예를 들어, A와 B 두 조건이 있다면, 참가자의 절반은 A-B 순서로, 나머지 절반은 B-A 순서로 경험합니다.'
          : 'Counterbalancing is a technique used in within-subjects designs to control order effects by varying the sequence of conditions across participants. Complete counterbalancing uses all possible order combinations, while Latin square design efficiently distributes orders when there are many conditions. For example, with two conditions A and B, half the participants experience A-B order and the other half experience B-A order.'}
      </p>

      <h3>{isKo ? '통계적 통제 (ANCOVA)' : 'Statistical Control (ANCOVA)'}</h3>
      <p>
        {isKo
          ? '공분산분석(ANCOVA, Analysis of Covariance)은 실험적 통제가 완벽하지 않을 때 통계적으로 외생변수의 영향을 제거하는 방법입니다. 사전측정 점수나 인구통계학적 변수를 공변량(covariate)으로 투입하여, 이 변수의 영향을 통계적으로 조정한 후 집단 간 차이를 비교합니다. ANCOVA는 무작위배정을 대체하는 것이 아니라 보완하는 도구로 사용해야 합니다.'
          : 'Analysis of Covariance (ANCOVA) is a method for statistically removing the influence of extraneous variables when experimental control is imperfect. By entering pretest scores or demographic variables as covariates, their influence is statistically adjusted before comparing group differences. ANCOVA should be used as a supplement to random assignment, not a replacement for it.'}
      </p>

      <h3>{isKo ? '조작 점검 (Manipulation Checks)' : 'Manipulation Checks'}</h3>
      <p>
        {isKo
          ? '조작 점검은 독립변수의 조작이 의도한 대로 작동했는지 확인하는 절차입니다. 처치 직후 참가자에게 처치 내용에 대한 인식, 이해, 경험을 측정합니다. 예를 들어, "스트레스 유발" 조작을 한 경우, 참가자가 실제로 스트레스를 경험했는지 자기보고 척도로 확인합니다. 조작 점검에 실패하면 종속변수에서 차이가 나타나지 않더라도 처치가 효과가 없는 것이 아니라 처치 자체가 제대로 이루어지지 않은 것일 수 있습니다.'
          : 'Manipulation checks verify that the manipulation of the independent variable worked as intended. Immediately after the treatment, participants\' perceptions, understanding, and experience of the treatment content are measured. For example, if a "stress induction" manipulation was used, self-report scales confirm whether participants actually experienced stress. If manipulation checks fail, the absence of differences in the dependent variable may not mean the treatment was ineffective but rather that the treatment itself was not properly implemented.'}
      </p>

      <TipBox type="tip" title={isKo ? '통제 유지를 위한 실용적 팁' : 'Practical Tips for Maintaining Control'}>
        <ul>
          <li>
            {isKo
              ? '무작위배정은 가능한 한 컴퓨터 기반 난수 생성기를 사용하고, 배정 과정을 문서화하세요.'
              : 'Use computer-based random number generators for random assignment whenever possible, and document the allocation process.'}
          </li>
          <li>
            {isKo
              ? '이중맹검이 불가능하면 최소한 단일맹검(참가자만 모르게)이라도 적용하세요.'
              : 'If double-blinding is not possible, at least apply single-blinding (keeping participants unaware).'}
          </li>
          <li>
            {isKo
              ? '실험 절차를 표준화된 프로토콜(매뉴얼)로 작성하여 모든 실험자가 동일하게 수행하도록 하세요.'
              : 'Create a standardized protocol (manual) for experimental procedures so all experimenters perform them identically.'}
          </li>
          <li>
            {isKo
              ? '조작 점검은 종속변수 측정 전에 실시하되, 조작 점검 자체가 종속변수에 영향을 미치지 않도록 주의하세요.'
              : 'Conduct manipulation checks before measuring the dependent variable, but be careful that the check itself does not influence the dependent variable.'}
          </li>
          <li>
            {isKo
              ? '참가자 탈락을 최소화하기 위해 실험 기간을 가능한 짧게 유지하고, 참여 동기를 높이는 인센티브를 제공하세요.'
              : 'Minimize participant attrition by keeping the experimental period as short as possible and providing incentives to maintain motivation.'}
          </li>
          <li>
            {isKo
              ? '실험 후 디브리핑(debriefing)을 실시하여 기만이 사용된 경우 참가자에게 설명하고 처치 확산을 방지하세요.'
              : 'Conduct post-experiment debriefing to explain any deception used and prevent treatment diffusion.'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 5 : Quasi-experiments                                     */
/* ------------------------------------------------------------------ */
function QuasiSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-code-branch" />
        {isKo ? '준실험설계와 현장실험' : 'Quasi-experiments & Field Experiments'}
      </h2>

      <h3>{isKo ? '준실험설계란 무엇인가?' : 'What Is Quasi-Experimental Design?'}</h3>
      <p>
        {isKo
          ? '준실험설계(Quasi-experimental Design)는 독립변수의 조작은 이루어지지만, 무작위배정이 불가능하거나 비윤리적인 상황에서 사용되는 실험 설계입니다. "준(quasi)"이라는 접두사는 "유사한" 또는 "거의"라는 의미로, 진정한 실험과 유사하지만 무작위배정이라는 핵심 요소가 빠져 있음을 나타냅니다. 교육, 정책, 공중보건 등 사회과학 분야에서는 윤리적, 실용적 제약으로 인해 무작위배정이 불가능한 경우가 많아 준실험설계가 널리 활용됩니다.'
          : 'A quasi-experimental design is an experimental design used when the independent variable is manipulated but random assignment is impossible or unethical. The prefix "quasi" means "resembling" or "almost," indicating that it resembles a true experiment but lacks the key element of random assignment. In social science fields such as education, policy, and public health, quasi-experimental designs are widely used because ethical and practical constraints often make random assignment impossible.'}
      </p>

      <h3>{isKo ? '비동등 통제집단설계' : 'Nonequivalent Control Group Design'}</h3>
      <p>
        {isKo
          ? '비동등 통제집단설계(Nonequivalent Control Group Design)는 준실험설계 중 가장 널리 사용되는 유형입니다. 기존에 형성된 집단(예: 학급, 부서, 지역)을 실험집단과 통제집단으로 활용합니다. 두 집단 모두에 사전-사후 측정을 실시하고, 실험집단에만 처치를 가합니다. 무작위배정이 없으므로 두 집단이 사전에 동질적이라는 보장이 없어, 선택편향이 주요 위협 요인입니다. 이를 보완하기 위해 사전측정 점수를 공변량으로 통제하거나 성향점수 매칭(propensity score matching)을 사용할 수 있습니다.'
          : 'The nonequivalent control group design is the most widely used type of quasi-experimental design. It uses pre-existing groups (e.g., classrooms, departments, regions) as experimental and control groups. Both groups receive pretest and posttest measurements, and only the experimental group receives the treatment. Without random assignment, there is no guarantee that the two groups were equivalent beforehand, making selection bias a major threat. To compensate, pretest scores can be controlled as covariates or propensity score matching can be used.'}
      </p>

      <h3>{isKo ? '중단시계열설계' : 'Interrupted Time Series Design'}</h3>
      <p>
        {isKo
          ? '중단시계열설계(Interrupted Time Series Design)는 처치(개입) 전후로 여러 시점에서 종속변수를 반복 측정하여, 처치 시점에서의 추세 변화를 분석하는 설계입니다. 예를 들어, 새로운 교통 법규 시행 전후 24개월간 월별 교통사고 수를 분석합니다. 단일 사전-사후 측정보다 역사나 성숙 효과를 통제하는 데 우수하며, 시각적 분석과 함께 세그먼트 회귀분석(segmented regression analysis)을 통해 수준 변화와 추세 변화를 정량화합니다.'
          : 'The interrupted time series design repeatedly measures the dependent variable at multiple time points before and after the treatment (intervention) to analyze trend changes at the treatment point. For example, analyzing monthly traffic accident counts for 24 months before and after implementing a new traffic law. It is superior to single pretest-posttest measurement in controlling for history and maturation effects, using visual analysis alongside segmented regression analysis to quantify level changes and trend changes.'}
      </p>

      <h3>{isKo ? '회귀단절설계' : 'Regression Discontinuity Design'}</h3>
      <p>
        {isKo
          ? '회귀단절설계(Regression Discontinuity Design, RDD)는 특정 점수(절단점, cutoff)를 기준으로 처치 여부가 결정되는 상황에서 사용됩니다. 예를 들어, 시험 점수 60점 미만인 학생만 보충 교육을 받는 경우, 절단점 근처의 학생들을 비교하여 처치 효과를 추정합니다. RDD는 무작위배정 없이도 인과추론이 가능한 것으로 인정받는 강력한 준실험설계이며, 최근 경제학, 정치학, 교육학에서 활발히 활용되고 있습니다.'
          : 'The regression discontinuity design (RDD) is used in situations where treatment assignment is determined by a specific score (cutoff point). For example, if only students scoring below 60 on an exam receive supplementary education, the treatment effect is estimated by comparing students near the cutoff point. RDD is recognized as a powerful quasi-experimental design that allows causal inference without random assignment and has been actively used in economics, political science, and education in recent years.'}
      </p>

      <h3>{isKo ? '자연실험 (Natural Experiments)' : 'Natural Experiments'}</h3>
      <p>
        {isKo
          ? '자연실험은 연구자가 의도적으로 조작하지 않았지만, 자연적 또는 정책적 사건이 마치 무작위배정처럼 처치를 배분한 상황을 활용하는 연구 전략입니다. 예를 들어, 베트남 전쟁 징병 추첨(draft lottery)은 생년월일에 따라 징집 여부가 결정되어, 군 복무의 장기적 영향을 연구하는 자연실험으로 활용되었습니다. 자연실험은 윤리적으로 불가능한 처치의 효과를 연구할 수 있다는 장점이 있지만, 처치의 "무작위성"에 대한 엄밀한 검증이 필요합니다.'
          : 'Natural experiments are a research strategy that exploits situations where a natural or policy event distributed treatment as if it were random assignment, without the researcher\'s intentional manipulation. For example, the Vietnam War draft lottery determined conscription based on birth dates and was used as a natural experiment to study the long-term effects of military service. Natural experiments have the advantage of studying treatment effects that would be ethically impossible to implement, but require rigorous verification of the "randomness" of the treatment assignment.'}
      </p>

      <h3>{isKo ? '현장실험 (Field Experiments)' : 'Field Experiments in Real-World Settings'}</h3>
      <p>
        {isKo
          ? '현장실험(Field Experiment)은 실제 생활 환경에서 무작위배정을 포함한 실험을 수행하는 연구 방법입니다. 실험실의 인위적 환경이 아닌 학교, 병원, 지역사회, 기업 등 실제 현장에서 이루어지므로 외적타당도가 높습니다. 개발경제학에서의 무작위통제시험(RCT), 공공정책 평가, 마케팅의 A/B 테스트 등이 현장실험의 대표적 예입니다. 다만, 실험실 실험에 비해 통제가 어렵고, 처치의 이행 충실도(fidelity) 확보가 중요한 과제입니다.'
          : 'Field experiments are research methods that conduct experiments including random assignment in real-world settings. Because they take place in actual settings such as schools, hospitals, communities, and businesses rather than artificial laboratory environments, they have high external validity. Randomized controlled trials (RCTs) in development economics, public policy evaluation, and A/B testing in marketing are representative examples. However, control is more difficult than in laboratory experiments, and ensuring treatment implementation fidelity is a key challenge.'}
      </p>

      <h3>{isKo ? '진정한 실험 대비 장단점' : 'Strengths and Weaknesses Compared to True Experiments'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '장점' : 'Strengths'}</strong>:{' '}
          {isKo
            ? '윤리적으로 무작위배정이 불가능한 상황에서 활용 가능, 실제 현장 적용성이 높음, 외적타당도 확보에 유리, 정책 및 프로그램 평가에 적합'
            : 'Applicable when random assignment is ethically impossible, high real-world applicability, advantageous for external validity, suitable for policy and program evaluation'}
        </li>
        <li>
          <strong>{isKo ? '약점' : 'Weaknesses'}</strong>:{' '}
          {isKo
            ? '선택편향의 위험, 내적타당도가 진정한 실험보다 낮음, 혼란변수의 완전한 통제가 어려움, 인과추론의 확신도가 낮음'
            : 'Risk of selection bias, lower internal validity than true experiments, difficulty in fully controlling confounding variables, lower confidence in causal inference'}
        </li>
      </ul>

      <TipBox type="tip" title={isKo ? '준실험설계가 최선의 선택인 경우' : 'When Quasi-Experiments Are the Best Option'}>
        <p>
          {isKo
            ? '다음과 같은 상황에서는 준실험설계가 가장 적절한 연구 전략입니다:'
            : 'Quasi-experimental designs are the most appropriate research strategy in the following situations:'}
        </p>
        <ul>
          <li>
            {isKo
              ? '무작위배정이 윤리적으로 불가능한 경우 (예: 흡연, 빈곤, 학대의 효과 연구)'
              : 'When random assignment is ethically impossible (e.g., studying effects of smoking, poverty, abuse)'}
          </li>
          <li>
            {isKo
              ? '기존 집단을 활용해야 하는 경우 (예: 학급 단위 교육 프로그램 평가)'
              : 'When pre-existing groups must be used (e.g., evaluating classroom-based education programs)'}
          </li>
          <li>
            {isKo
              ? '정책이나 제도 변화의 효과를 사후적으로 평가해야 하는 경우'
              : 'When the effect of policy or institutional changes must be evaluated retrospectively'}
          </li>
          <li>
            {isKo
              ? '실험실 환경이 아닌 실제 현장에서의 효과를 확인해야 하는 경우'
              : 'When effects need to be verified in real-world settings rather than laboratory environments'}
          </li>
          <li>
            {isKo
              ? '대규모 사회 개입의 효과를 평가해야 하는 경우'
              : 'When evaluating the effects of large-scale social interventions'}
          </li>
        </ul>
        <p>
          {isKo
            ? '준실험설계를 사용할 때는 내적타당도 위협을 최소화하기 위해 여러 통제 전략을 병행하고, 연구의 한계를 솔직하게 기술해야 합니다. 가능하다면 다양한 분석 방법(ANCOVA, 성향점수 매칭, 도구변수법 등)을 사용하여 결과의 강건성(robustness)을 확인하세요.'
            : 'When using quasi-experimental designs, employ multiple control strategies to minimize threats to internal validity and honestly describe the limitations of the study. If possible, use various analytical methods (ANCOVA, propensity score matching, instrumental variables, etc.) to verify the robustness of results.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section 6 : Cases                                                 */
/* ------------------------------------------------------------------ */
function CasesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>
        <i className="fa-solid fa-magnifying-glass-chart" />
        {isKo ? '실험연구 사례' : 'Experimental Research Cases'}
      </h2>

      <h3>{isKo ? '고전적 사회과학 실험' : 'Classic Social Science Experiments'}</h3>
      <p>
        {isKo
          ? '사회과학 역사에서 가장 영향력 있는 실험들은 인간 행동에 대한 우리의 이해를 근본적으로 바꾸었습니다. 이 실험들은 방법론적 통찰과 윤리적 교훈을 동시에 제공합니다.'
          : 'The most influential experiments in social science history have fundamentally changed our understanding of human behavior. These experiments provide both methodological insights and ethical lessons.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? 'Milgram 복종 실험 (1963)' : 'Milgram Obedience Study (1963)'}</strong>:{' '}
          {isKo
            ? 'Stanley Milgram은 참가자들이 권위자의 지시에 따라 다른 사람에게 치명적인 수준의 전기 충격을 가할 수 있는지 연구했습니다. 참가자의 65%가 최대 전압(450V)까지 충격을 가했습니다. 이 실험은 권위에 대한 복종의 심리적 메커니즘을 밝혔으나, 참가자에게 심각한 심리적 고통을 야기하여 연구 윤리에 대한 중대한 논의를 촉발했습니다.'
            : 'Stanley Milgram investigated whether participants would administer lethal levels of electric shocks to another person when instructed by an authority figure. 65% of participants administered the maximum voltage (450V). This experiment revealed the psychological mechanisms of obedience to authority but caused severe psychological distress to participants, sparking significant discussions about research ethics.'}
        </li>
        <li>
          <strong>{isKo ? 'Stanford 감옥 실험 (1971)' : 'Stanford Prison Experiment (1971)'}</strong>:{' '}
          {isKo
            ? 'Philip Zimbardo는 대학생들을 무작위로 교도관과 재소자 역할에 배정하여 상황적 힘이 행동에 미치는 영향을 연구했습니다. 교도관 역할의 참가자들은 빠르게 권위적이고 가학적인 행동을 보였고, 재소자 역할의 참가자들은 수동적이고 우울한 반응을 나타냈습니다. 2주 예정이었던 실험은 6일 만에 중단되었습니다. 이 실험은 상황주의(situationism)의 강력한 증거로 인용되지만, 실험자의 개입과 요구 특성 등 방법론적 문제로 비판을 받기도 합니다.'
            : 'Philip Zimbardo randomly assigned college students to guard and prisoner roles to study the influence of situational forces on behavior. Guard-role participants quickly exhibited authoritarian and sadistic behavior, while prisoner-role participants showed passive and depressive responses. The experiment, planned for two weeks, was terminated after six days. While cited as powerful evidence for situationism, it has been criticized for methodological issues including experimenter intervention and demand characteristics.'}
        </li>
        <li>
          <strong>{isKo ? 'Asch 동조 실험 (1951)' : 'Asch Conformity Experiment (1951)'}</strong>:{' '}
          {isKo
            ? 'Solomon Asch는 참가자에게 명백히 정답이 드러나는 시각 판단 과제를 제시하되, 나머지 참가자(실제로는 공모자)가 모두 오답을 말하는 상황을 조성했습니다. 참가자의 약 75%가 최소 한 번 이상 집단에 동조하여 명백한 오답을 선택했습니다. 이 실험은 사회적 압력이 개인의 판단에 미치는 강력한 영향을 보여주었습니다.'
            : 'Solomon Asch presented participants with a visual judgment task where the correct answer was obvious, but all other participants (actually confederates) gave an incorrect answer. About 75% of participants conformed to the group and selected the obviously wrong answer at least once. This experiment demonstrated the powerful influence of social pressure on individual judgment.'}
        </li>
      </ul>

      <h3>{isKo ? '현대 실험연구 사례' : 'Modern Experimental Research Examples'}</h3>
      <p>
        {isKo
          ? '현대의 실험연구는 정책, 교육, 마케팅 등 다양한 분야에서 활발히 이루어지고 있으며, 보다 정교한 설계와 엄격한 윤리 기준을 적용합니다.'
          : 'Modern experimental research is actively conducted in various fields including policy, education, and marketing, applying more sophisticated designs and stricter ethical standards.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '정책 평가' : 'Policy Evaluation'}</strong>:{' '}
          {isKo
            ? '조건부 현금이전 프로그램(예: 멕시코의 PROGRESA/Oportunidades)의 효과를 무작위배정을 통해 평가하여, 빈곤 감소와 교육 참여 증가 효과를 입증한 사례는 증거 기반 정책 수립의 모범적 예입니다.'
            : 'Evaluating the effects of conditional cash transfer programs (e.g., Mexico\'s PROGRESA/Oportunidades) through random assignment, demonstrating poverty reduction and increased educational participation, serves as an exemplary case of evidence-based policymaking.'}
        </li>
        <li>
          <strong>{isKo ? '교육 연구' : 'Education Research'}</strong>:{' '}
          {isKo
            ? 'Project STAR(Student/Teacher Achievement Ratio)는 학급 규모의 효과를 연구한 대규모 현장실험으로, 학생과 교사를 소규모 학급과 일반 학급에 무작위 배정하여 소규모 학급의 장기적 학업 성취 효과를 입증했습니다.'
            : 'Project STAR (Student/Teacher Achievement Ratio) was a large-scale field experiment studying class size effects. Students and teachers were randomly assigned to small and regular classes, demonstrating the long-term academic achievement effects of smaller class sizes.'}
        </li>
        <li>
          <strong>{isKo ? '마케팅' : 'Marketing'}</strong>:{' '}
          {isKo
            ? '가격 전략, 광고 메시지, 제품 디자인 등의 효과를 실험적으로 검증합니다. 소비자를 무작위로 다른 조건에 노출시켜 구매 행동, 브랜드 인식, 고객 만족도 등의 차이를 비교합니다.'
            : 'Effects of pricing strategies, advertising messages, and product designs are experimentally tested. Consumers are randomly exposed to different conditions to compare differences in purchasing behavior, brand perception, and customer satisfaction.'}
        </li>
      </ul>

      <h3>{isKo ? '디지털 환경의 A/B 테스트' : 'A/B Testing in Digital Contexts'}</h3>
      <p>
        {isKo
          ? 'A/B 테스트는 디지털 환경에서 가장 널리 사용되는 실험 방법입니다. 웹사이트 방문자, 앱 사용자, 이메일 수신자 등을 무작위로 두 개 이상의 버전(A: 기존 버전, B: 새 버전)에 배정하여, 클릭률, 전환율, 체류 시간 등의 핵심 지표를 비교합니다. Google, Amazon, Netflix 등 대형 기술 기업들은 매년 수천 건의 A/B 테스트를 수행하여 데이터 기반 의사결정을 합니다. A/B 테스트의 장점은 대규모 표본 확보가 용이하고, 자동화된 무작위배정이 가능하며, 실시간 데이터 수집이 가능하다는 점입니다.'
          : 'A/B testing is the most widely used experimental method in digital environments. Website visitors, app users, email recipients, etc., are randomly assigned to two or more versions (A: existing version, B: new version) to compare key metrics such as click-through rates, conversion rates, and dwell time. Major technology companies like Google, Amazon, and Netflix conduct thousands of A/B tests annually for data-driven decision-making. The advantages of A/B testing include easy access to large samples, automated random assignment, and real-time data collection.'}
      </p>

      <h3>{isKo ? '사회 프로그램의 무작위통제시험 (RCTs)' : 'Randomized Controlled Trials (RCTs) in Social Programs'}</h3>
      <p>
        {isKo
          ? '무작위통제시험(RCT)은 사회 프로그램의 효과를 평가하는 가장 엄격한 방법으로 인정받고 있습니다. 개발경제학 분야에서 Esther Duflo, Abhijit Banerjee 등의 연구자들은 빈곤 퇴치 프로그램, 건강 개입, 교육 정책의 효과를 현장 RCT를 통해 평가하여, 2019년 노벨 경제학상을 수상했습니다. RCT는 "무엇이 효과가 있는가"에 대한 신뢰할 수 있는 증거를 제공하지만, 비용이 많이 들고, 윤리적 문제(일부 참가자에게 효과적인 처치를 제공하지 않는 것)가 발생할 수 있으며, 특정 맥락에서의 효과가 다른 맥락에서도 동일하게 나타나는지(외적타당도)는 보장되지 않습니다.'
          : 'Randomized controlled trials (RCTs) are recognized as the most rigorous method for evaluating the effectiveness of social programs. In development economics, researchers including Esther Duflo and Abhijit Banerjee evaluated the effects of poverty alleviation programs, health interventions, and education policies through field RCTs, earning the 2019 Nobel Prize in Economics. While RCTs provide reliable evidence about "what works," they are expensive, can raise ethical issues (withholding effective treatment from some participants), and do not guarantee that effects in one context will replicate in another (external validity).'}
      </p>

      <h3>{isKo ? '실험연구의 윤리적 고려사항' : 'Ethical Considerations in Experimental Research'}</h3>
      <p>
        {isKo
          ? '실험연구는 참가자에게 직접적인 개입을 가하기 때문에 윤리적 고려가 특히 중요합니다. 핵심 원칙은 다음과 같습니다:'
          : 'Ethical considerations are especially important in experimental research because it involves direct intervention with participants. Key principles include:'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '충분한 정보에 입각한 동의 (Informed Consent)' : 'Informed Consent'}</strong>:{' '}
          {isKo
            ? '참가자에게 연구 목적, 절차, 잠재적 위험과 이익을 충분히 설명하고 자발적 동의를 얻어야 합니다.'
            : 'Participants must be fully informed about the research purpose, procedures, and potential risks and benefits, and must give voluntary consent.'}
        </li>
        <li>
          <strong>{isKo ? '해악 최소화 (Minimizing Harm)' : 'Minimizing Harm'}</strong>:{' '}
          {isKo
            ? '참가자에게 신체적, 심리적 해를 최소화해야 하며, 예상되는 이익이 위험을 상회해야 합니다.'
            : 'Physical and psychological harm to participants must be minimized, and anticipated benefits must outweigh risks.'}
        </li>
        <li>
          <strong>{isKo ? '기만의 제한 (Limiting Deception)' : 'Limiting Deception'}</strong>:{' '}
          {isKo
            ? '기만(deception)은 불가피한 경우에만 사용하고, 실험 후 반드시 디브리핑을 통해 설명해야 합니다.'
            : 'Deception should be used only when unavoidable and must be explained through post-experiment debriefing.'}
        </li>
        <li>
          <strong>{isKo ? '철회의 자유 (Right to Withdraw)' : 'Right to Withdraw'}</strong>:{' '}
          {isKo
            ? '참가자는 언제든지 불이익 없이 실험 참여를 중단할 수 있어야 합니다.'
            : 'Participants must be able to withdraw from the experiment at any time without penalty.'}
        </li>
        <li>
          <strong>{isKo ? 'IRB 승인' : 'IRB Approval'}</strong>:{' '}
          {isKo
            ? '모든 실험연구는 기관생명윤리위원회(IRB)의 사전 승인을 받아야 합니다.'
            : 'All experimental research must receive prior approval from an Institutional Review Board (IRB).'}
        </li>
      </ul>

      <h3>{isKo ? '유명 실험에서 배운 교훈' : 'Lessons Learned from Famous Experiments'}</h3>
      <p>
        {isKo
          ? 'Milgram 실험과 Stanford 감옥 실험은 참가자 보호의 중요성을 일깨워 현대 연구 윤리 규정의 기초가 되었습니다. Tuskegee 매독 연구(1932-1972)는 참가자에게 치료를 제공하지 않은 비윤리적 연구로, 미국의 인간 대상 연구 규정(Belmont Report, 1979)이 만들어지는 직접적 계기가 되었습니다. 이러한 역사적 사례들은 과학적 엄밀성과 윤리적 책임이 양립해야 함을 보여주며, 오늘날의 연구자들에게 "목적이 수단을 정당화하지 않는다"는 원칙을 상기시킵니다.'
          : 'The Milgram experiment and Stanford prison experiment highlighted the importance of participant protection and became the foundation for modern research ethics regulations. The Tuskegee syphilis study (1932-1972) was an unethical study that withheld treatment from participants, directly leading to the creation of the Belmont Report (1979) for human subjects research regulations in the United States. These historical cases demonstrate that scientific rigor and ethical responsibility must coexist, reminding today\'s researchers that "the ends do not justify the means."'}
      </p>

      <TipBox type="warning" title={isKo ? '실험연구의 윤리적 경계' : 'Ethical Boundaries in Experimentation'}>
        <p>
          {isKo
            ? '실험연구를 설계할 때 반드시 다음 윤리적 경계를 준수하세요:'
            : 'When designing experimental research, always observe the following ethical boundaries:'}
        </p>
        <ul>
          <li>
            {isKo
              ? '참가자에게 심각한 신체적, 심리적 해를 가하는 실험은 절대 수행하지 마세요.'
              : 'Never conduct experiments that cause serious physical or psychological harm to participants.'}
          </li>
          <li>
            {isKo
              ? '효과가 입증된 처치를 통제집단에 제공하지 않는 것이 정당화될 수 있는지 신중히 검토하세요. 대기자 명단 통제(waitlist control) 설계가 윤리적 대안이 될 수 있습니다.'
              : 'Carefully consider whether withholding a proven treatment from the control group is justified. A waitlist control design can be an ethical alternative.'}
          </li>
          <li>
            {isKo
              ? '취약 집단(아동, 노인, 수감자 등)을 대상으로 한 실험은 추가적인 보호 조치가 필요합니다.'
              : 'Experiments involving vulnerable populations (children, elderly, prisoners, etc.) require additional protective measures.'}
          </li>
          <li>
            {isKo
              ? '연구 결과가 부정적이더라도 투명하게 보고해야 하며, 출판 편향(publication bias)에 기여하지 마세요.'
              : 'Report results transparently even if they are negative, and do not contribute to publication bias.'}
          </li>
          <li>
            {isKo
              ? '실험 프로토콜을 사전 등록(pre-registration)하여 연구의 투명성과 재현 가능성을 높이세요.'
              : 'Pre-register experimental protocols to increase research transparency and reproducibility.'}
          </li>
        </ul>
      </TipBox>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */
export default function Experiment(): ReactElement {
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
        title={isKo ? '실험연구 | Research Master' : 'Experimental Research | Research Master'}
        description={
          isKo
            ? '실험 설계의 유형과 타당도, 통제 기법을 체계적으로 학습합니다.'
            : 'Learn experimental design types, validity, and control techniques systematically.'
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
            {activeSection === 'foundations' && <FoundationsSection isKo={isKo} />}
            {activeSection === 'designs' && <DesignsSection isKo={isKo} />}
            {activeSection === 'validity' && <ValiditySection isKo={isKo} />}
            {activeSection === 'control' && <ControlSection isKo={isKo} />}
            {activeSection === 'quasi' && <QuasiSection isKo={isKo} />}
            {activeSection === 'cases' && <CasesSection isKo={isKo} />}

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
