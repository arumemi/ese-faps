import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../utils/constants';
import { useTranslation } from 'react-i18next';

const FloatingWhatsApp = () => {
  const { t } = useTranslation();
  const phoneDigits = PERSONAL_INFO.phone.replace(/\D/g, '');
  const defaultMessage = encodeURIComponent(t('whatsapp.defaultMessage'));
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.aria')}
      title={t('whatsapp.title')}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <FaWhatsapp className="h-8 w-8" />
    </a>
  );
};

export default FloatingWhatsApp;