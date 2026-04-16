export default {
    theme: {
        colors: {
            bg: '#fdfaf5',
            bg2: '#f4efe6',
            card: '#ffffff',
            border: '#e8e2d5',
            text: '#5a5461',
            heading: '#352e3b',
            muted: '#9e97a3',
            accent: '#ff8fab',
            accent2: '#fca75a',
            accent3: '#73b2ef',
            green: '#74c496',
            red: '#fa7a7a'
        }
    },
    shortcuts: {
        'slide': 'absolute inset-0 hidden px-[30px] py-[40px] md:px-[80px] md:py-[64px] flex-col justify-center bg-bg overflow-hidden text-text',
        'slide-active': '!flex animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)]',

        'section-label': 'inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-accent font-bold bg-accent/10 px-3.5 py-1.5 rounded-full mb-6',
        'heading-1': 'font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[1.05] text-heading font-bold mb-6 tracking-tight',
        'heading-2': 'font-serif text-[clamp(2rem,3.5vw,3.6rem)] leading-[1.1] text-heading font-bold mb-5 tracking-tight',
        'heading-3': 'font-sans text-[1.2rem] font-bold tracking-[0.02em] text-heading mb-2',
        'text-p': 'text-[1.1rem] leading-[1.8] max-w-[800px] mb-[18px] [&>strong]:text-heading [&>strong]:font-bold [&>em]:text-accent [&>em]:not-italic [&>em]:font-bold',

        'callout': 'border-2 rounded-2xl p-[24px_28px] my-6 max-w-[860px] text-text shadow-sm',
        'callout-red': 'border-red/30 bg-red/5 callout',
        'callout-green': 'border-green/30 bg-green/5 callout',
        'callout-yellow': 'border-accent2/30 bg-accent2/5 callout',
        'callout-blue': 'border-accent3/30 bg-accent3/5 callout',
        'card': 'bg-card border-2 border-border rounded-2xl p-[24px_28px] shadow-sm hover:shadow-md transition-shadow duration-300',

        'clean-list': 'list-none my-4 max-w-[860px]',
        'clean-list-item': 'py-3 pl-[24px] border-b border-border text-[1.05rem] text-text leading-[1.6] relative before:content-[""] before:absolute before:left-0 before:top-[20px] before:w-[8px] before:h-[8px] before:bg-accent2 before:rounded-full [&>strong]:text-heading [&>strong]:font-bold last:border-0',
        'two-col': 'grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mt-6',
        'two-col-wide': 'grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 max-w-[1100px] mt-6',
        'three-col': 'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mt-6',

        'action-grid': 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mt-6',
        'action-item': 'card flex gap-[16px] items-start hover:-translate-y-1 transition-transform',
        'chip': 'inline-block bg-bg2 border-2 border-border font-sans font-bold text-[11px] py-1 px-3 rounded-full text-muted m-[4px_4px_4px_0] uppercase tracking-wide',
        'chip-ok': 'border-green/40 bg-green/10 text-green chip',
        'chip-warn': 'border-accent2/40 bg-accent2/10 text-accent2 chip',
        'chip-danger': 'border-red/40 bg-red/10 text-red chip',

        'tl-item': 'flex gap-6 py-5 border-b border-border items-start last:border-0',
        'tl-year': 'font-mono text-[13px] font-bold text-accent3 min-w-[50px] pt-1 bg-accent3/10 px-2 py-1 rounded-md text-center',
        'tl-content': 'flex-1 [&>strong]:block [&>strong]:text-heading [&>strong]:text-[1.05rem] [&>strong]:mb-1.5 [&>p]:text-[0.95rem] [&>p]:text-text [&>p]:m-0 [&>p]:leading-[1.6]',

        'tracker-table': 'w-full max-w-[860px] border-collapse mt-6 bg-card rounded-2xl overflow-hidden shadow-sm border-2 border-border',
        'tracker-th': 'font-sans font-bold text-[11px] uppercase tracking-[0.15em] text-muted text-left py-4 px-5 border-b-2 border-border bg-bg2/50',
        'tracker-td': 'py-4 px-5 border-b border-border text-[1rem] text-text last:border-0',

        'btn-primary': 'inline-block bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-xl text-[0.95rem] transition-colors border-none cursor-pointer text-center',
        'link-fancy': 'text-accent3 font-bold no-underline decoration-accent3/30 decoration-2 underline-offset-4 hover:underline transition-all'
    }
}
