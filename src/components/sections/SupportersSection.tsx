import Image from 'next/image';
import SquareRoundedButton from '../ui/ComponentSquareButton';
import CardWithAnimatedNumbers from '../ui/CardWithAnimatedNumbers';
import TransparentCard from '../ui/TransparentCard';

const SupportersSection = () => {
    return (
        <section className="flex w-full overflow-hidden py-10 bg-neutral-100">
            <div className="container mx-auto flex flex-col gap-8 px-4 md:px-6 md:gap-12 lg:flex-row lg:gap-16">
                {/* div da foto */}
                <div className="relative flex w-full justify-center lg:w-1/2 lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-none">
                        <Image
                            src="/assets/images/content/Frame1000008443.svg"
                            alt="Imagem do patrocinador"
                            width={509}
                            height={661}
                            quality={100}
                            className="w-full h-auto rounded-2xl z-0"
                        />
                        <TransparentCard 
                            title='Impacto que cresce' 
                            description='Mais de 50 empresas confiando em nós.' 
                            fontStyle='font-[satoshi-bold] text-black text-base md:text-[20px]' 
                            icon={["/assets/images/content/image.svg", "/assets/images/content/image-2.svg", "/assets/images/content/image-1.svg"]}
                        />
                    </div>
                </div>
                
                {/* div do conteudo */}
                <div className="flex flex-col justify-center w-full lg:w-1/2">
                    <h4 className="mb-2 text-base md:text-[20px] font-[satoshi-bold] text-neutral-900">
                        Apoiadores e Parceiros
                    </h4>
                    <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight font-[satoshi-bold] text-neutral-900">
                        Juntos, ampliamos nosso impacto social.
                    </h1>
                    <p className="text-base md:text-[20px] font-[satoshi-medium] text-neutral-900">
                        Empresas e organizações que acreditam na nossa causa ajudam a transformar vidas todos os dias
                    </p>
                    <div className="flex flex-col mt-8 gap-4 sm:flex-row sm:place-items-center md:mt-10 sm:gap-0">
                        {/* botoes */}
                        <div className="w-full sm:w-auto">
                            <SquareRoundedButton
                                title='Seja nosso parceiro'
                                arrowIcon="/assets/icons/svg/arrowUpRight.svg"
                            />
                        </div>
                        <div className="pl-0 sm:pl-8">
                            <h4 className="text-center sm:text-left underline text-base md:text-[16px] font-[satoshi-bold] text-neutral-900">
                                Como nós atuamos
                            </h4>
                        </div>
                    </div>
                    <br />
                    <div className="w-full mt-6 mb-6 h-px bg-neutral-200"></div>
                    {/* numeros animados */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:gap-11">
                        <div className="w-full sm:w-1/2">
                            <CardWithAnimatedNumbers value={99} title='Projetos bem-sucedidos com nossos parceiros'/>
                        </div>
                        <div className="hidden sm:block w-px h-18 bg-neutral-200"></div>
                        <div className="w-full sm:w-1/2">
                            <CardWithAnimatedNumbers value={98} title='Crianças e jovens evoluindo com nossas ações'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportersSection;
