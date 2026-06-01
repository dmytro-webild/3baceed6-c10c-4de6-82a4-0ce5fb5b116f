"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageSquareText, Palette, Rocket, Sparkles } from "lucide-react";

import { Raleway } from "next/font/google";

const raleway = Raleway({
  variable: "--font-raleway",  subsets: ["latin"]
});

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="largeSmallSizeLargeTitles"
      background="floatingGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav" className={raleway.variable}>
        <NavbarStyleCentered
          brandName="ATTITUDE LLC"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "Servizi", id: "#soluzione" },
            { name: "Come Funziona", id: "#come-funziona" },
            { name: "Prezzo", id: "#prezzo" },
            { name: "Contatti", id: "#contatti" }
          ]}
          button={{
            text: "Richiedi informazioni",            href: "#contatti"
          }}
          logoSrc="http://img.b2bpic.net/free-photo/mobility-creativity-concept-smartphone-screen_53876-94842.jpg"
          logoAlt="ATTITUDE LLC Logo"
        />
      </div>

      <div id="hero" data-section="hero" className={raleway.variable}>
        <HeroSplitKpi
          title="Il sito web della tua attività, pronto e online."
          description="Un sito professionale, ottimizzato per cellulare e senza pensieri, per far crescere la tua attività locale."
          background={{ variant: "plain" }}
          kpis={[
            { value: "+30%", label: "Clienti Online" },
            { value: "90%", label: "Mobile Traffic" },
            { value: "100%", label: "Proprietà Tua" }
          ]}
          enableKpiAnimation={true}
          buttons={[
            { text: "Richiedi informazioni", href: "#contatti" }
          ]}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/team-members-suits-overseeing-factory-activity-green-screen_482257-125952.jpg"
          imageAlt="Dashboard moderna con analisi di siti web"
          imagePosition="right"
        />
      </div>

      <div id="problema" data-section="problema" className={raleway.variable}>
        <SplitAbout
          title="Il Tuo Problema: Perdere Clienti Ogni Giorno"
          description="Nell'era digitale, la tua presenza online è fondamentale. Oggi, la maggior parte dei clienti cerca e sceglie attività come la tua direttamente dallo smartphone. Un'attività senza un sito web moderno, veloce e mobile-friendly, rischia di perdere opportunità e clienti preziosi ogni singolo giorno."
          bulletPoints={[
            { title: "Visibilità Ridotta", description: "La tua attività è invisibile a milioni di potenziali clienti che cercano servizi online ogni giorno." },
            { title: "Mancanza di Credibilità", description: "Un'attività senza una presenza digitale professionale può apparire obsoleta o meno affidabile." },
            { title: "Perdita di Opportunità", description: "Non potrai raggiungere nuovi clienti oltre il tuo raggio d'azione locale o attirare chi preferisce la ricerca online." }
          ]}
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/medium-shot-man-with-open-sign_23-2149149718.jpg"
          imageAlt="Persona che cerca un'attività commerciale sul cellulare"
        />
      </div>

      <div id="soluzione" data-section="soluzione" className={raleway.variable}>
        <FeatureCardThree
          features={[
            {
              title: "Sito Web Professionale \"Pronto all'Uso\"",              description: "Realizziamo un sito professionale completo, dal design alla pubblicazione, già pronto per la tua attività. Non devi preoccuparti di nulla, pensiamo a tutto noi.",              imageSrc: "http://img.b2bpic.net/free-photo/notebook-with-words-digital-marketing_1134-436.jpg?_wi=1"
            },
            {
              title: "Ottimizzato per Smartphone e Veloce",              description: "Ogni sito è progettato per essere impeccabile su ogni dispositivo mobile, garantendo velocità di caricamento e un'esperienza utente fluida. Includiamo foto, contatti chiari e un modulo richieste intuitivo.",              imageSrc: "http://img.b2bpic.net/free-photo/notebook-with-words-digital-marketing_1134-436.jpg?_wi=2"
            },
            {
              title: "Di Tua Proprietà, Senza Canoni Mensili",              description: "Il sito viene pubblicato a tuo nome e sarà di tua proprietà al 100%. Dimentica i canoni mensili nascosti: un unico investimento per una presenza online duratura e senza pensieri.",              imageSrc: "http://img.b2bpic.net/free-photo/notebook-with-words-digital-marketing_1134-436.jpg?_wi=3"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          title="La Nostra Soluzione: Il Tuo Sito Web Senza Pensieri"
          description="Offriamo un servizio completo per dotare la tua attività di una presenza online efficace."
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="come-funziona" data-section="come-funziona" className={raleway.variable}>
        <MetricCardThree
          metrics={[
            { id: "step-1", icon: MessageSquareText, title: "Ci Contatti e Raccogliamo le Info", value: "1" },
            { id: "step-2", icon: Palette, title: "Realizziamo il Tuo Sito Su Misura", value: "2" },
            { id: "step-3", icon: Rocket, title: "Il Sito Va Online e Attira Clienti", value: "3" }
          ]}
          animationType="slide-up"
          title="Come Funziona il Nostro Servizio"
          description="Tre semplici passi per avere il tuo sito web professionale online."
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="perche-sceglierci" data-section="perche-sceglierci" className={raleway.variable}>
        <SplitAbout
          title="Perché Scegliere ATTITUDE LLC?"
          description="Siamo il partner ideale per la tua presenza online grazie a un approccio chiaro e orientato ai risultati."
          bulletPoints={[
            { title: "Sito Pronto e Veloce da Attivare", description: "Il tuo sito sarà online in tempi record, senza attese prolungate e con la massima efficienza." },
            { title: "Ottimizzato per Google e Mobile", description: "Garantiamo un'ottimizzazione completa per i motori di ricerca e una perfetta visualizzazione su tutti i dispositivi mobili." },
            { title: "Design Professionale e Moderno", description: "Un look curato e al passo con i tempi, che riflette l'immagine della tua attività e attira nuovi clienti." },
            { title: "Prezzo Chiaro, Una Tantum, Senza Sorprese", description: "Nessun costo nascosto o abbonamento mensile. Un unico investimento per un sito di tua proprietà." },
            { title: "Assistenza Diretta e Umana", description: "Ti offriamo supporto personalizzato e risposte chiare, senza tempi di attesa interminabili o risposte automatiche." }
          ]}
          mediaAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/programming-background-with-html_23-2150038838.jpg"
          imageAlt="Icona di velocità per sito web"
        />
      </div>

      <div id="prezzo" data-section="prezzo" className={raleway.variable}>
        <PricingCardOne
          plans={[
            {
              id: "base",              badge: "Offerta Speciale",              badgeIcon: Sparkles,
              price: "500 €",              subtitle: "Unico investimento, nessuna sorpresa.",              features: [
                "Sito web professionale su misura",                "Design moderno e responsive",                "Ottimizzazione mobile inclusa",                "Galleria fotografica e contatti",                "Modulo di contatto",                "Assistenza diretta"
              ]
            }
          ]}
          animationType="depth-3d"
          title="Prezzo Chiaro e Senza Pensieri"
          description="Il tuo sito web professionale completo, con un investimento una tantum e nessuna spesa ricorrente."
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Richiedi informazioni", href: "#contatti" }
          ]}
        />
      </div>

      <div id="contatti" data-section="contatti" className={raleway.variable}>
        <ContactCenter
          tag="Contattaci Ora"
          title="Richiedi informazioni senza impegno"
          description="Compila il modulo sottostante per ricevere una consulenza personalizzata. Ti ricontattiamo entro 24 ore. Nessun impegno!"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
          inputPlaceholder="Il tuo nome e cognome"
          buttonText="Invia richiesta"
          termsText="Inviando la richiesta, accetti la nostra politica sulla privacy."
        />
      </div>

      <div id="footer" data-section="footer" className={raleway.variable}>
        <FooterBase
          columns={[
            {
              title: "Servizi",              items: [
                { label: "Creazione Siti Web", href: "#soluzione" },
                { label: "Ottimizzazione Mobile", href: "#soluzione" },
                { label: "Siti per Attività Locali", href: "#soluzione" }
              ]
            },
            {
              title: "Azienda",              items: [
                { label: "Chi Siamo", href: "#problema" },
                { label: "Perché Sceglierci", href: "#perche-sceglierci" },
                { label: "Contatti", href: "#contatti" }
              ]
            }
          ]}
          logoSrc="http://img.b2bpic.net/free-photo/mobility-creativity-concept-smartphone-screen_53876-94842.jpg"
          logoAlt="ATTITUDE LLC Logo"
          logoText="ATTITUDE LLC"
          copyrightText="© 2024 ATTITUDE LLC. Tutti i diritti riservati."
          onPrivacyClick={() => alert('Informativa sulla Privacy')}
        />
      </div>
    </ThemeProvider>
  );
}
