import Image from 'next/image';
import SquareRoundedButton from '../ui/ComponentSquareButton';
import CardWithAnimatedNumbers from '../ui/CardWithAnimatedNumbers';
import TransparentCard from '../ui/TransparentCard';

const SupportersSection = () => {
    return (
        <section className="flex w-full py-10 bg-neutral-100">
            <div className="container mx-auto gap-8 md:gap-12 lg:flex-row lg:gap-16">
                <div className='flex flex-col-reverse lg:flex-row lg:gap-5'>
                    {/* div da foto */}
                    <div className="relative flex w-full justify-center lg:w-1/2">
                        <div className="flex w-[100vw] justify-center">
                            <Image
                                src="/assets/images/content/Frame1000008443.svg"
                                alt="Imagem do patrocinador"
                                width={1000}
                                height={661}
                                quality={100}
                                className="w-[80vw] h-[40vh] sm:w-[80vw] sm:h-[60vh] md:w-[100vw] md:h-[80vh] rounded-2xl z-0"
                            />
                            <TransparentCard 
                                title='Impacto que cresce' 
                                description='Mais de 50 empresas confiando em nós.' 
                                fontStyle='font-satoshi font-bold text-black text-[12px] text-base md:text-[16px] lg:text-[20px]' 
                                icon={["/assets/images/content/image.svg", "/assets/images/content/image-2.svg", "/assets/images/content/image-1.svg"]}
                            />
                        </div>
                    </div>

                    <div className='lg:mt-[3em]'>
                        <h4 className="mb-2 text-[14px] sm:text-[16px] md:text-[20px] font-satoshi font-bold text-neutral-900">
                            Apoiadores e Parceiros
                        </h4>
                        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight font-satoshi font-bold text-neutral-900">
                            Juntos, ampliamos nosso impacto social.
                        </h1>
                        <p className="mb-5 text-[12px] sm:text-[16px] lg:text-[20px] font-satoshi font-medium text-neutral-900">
                            Empresas e organizações que acreditam na nossa causa ajudam a transformar vidas todos os dias.
                        </p>
                    </div>
                </div>
                
                {/* div do conteudo */}
                <div className='w-full lg:flex lg:justify-end'>
                    <div className="flex flex-col-reverse lg:flex-col justify-center w-full lg:mt-[-15em] xl:mt-[-15em] lg:w-1/2 ">
                        <div className="flex flex-row mt-4 px-6 gap-6 sm:gap-8 md:gap-12 lg:gap-10 sm:flex-row sm:place-items-center md:mt-10">
                            {/* botoes */}
                            <div className="sm:w-auto">
                                <SquareRoundedButton
                                    title='Seja nosso parceiro'
                                    arrowIcon="/assets/icons/svg/arrowUpRight.svg"
                                />
                            </div>
                            <div className="pl-0 sm:pl-8">
                                <h4 className="text-center sm:text-left underline text-[10px] sm:text-[16px] md:text-[16px] font-satoshi font-bold text-neutral-900">
                                    Como nós atuamos
                                </h4>
                            </div>
                        </div>
                        <br />
                        <div className='flex flex-col lg:ml-5'>
                            <div className="w-full mt-6 mb-6 h-px bg-neutral-200"></div>
                            {/* numeros animados */}
                            <div className="flex flex-row gap-6 sm:flex-row sm:gap-11 lg:gap-3">
                                <div className="w-full sm:w-1/2">
                                    <CardWithAnimatedNumbers value={99} title='Projetos bem-sucedidos com nossos parceiros'/>
                                </div>
                                
                                <div className="w-[2px] mb-6 h-[5vh] lg:h-[8vh] mr-2 ml-2 bg-neutral-200"></div>
                                
                                <div className="w-full sm:w-1/2">
                                    <CardWithAnimatedNumbers value={98} title='Crianças e jovens evoluindo com nossas ações'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SupportersSection;
